# 리라이팅 기능 구현 정리

# Flow

1. 로그인한 사용자가 /api/rewrite로 프롬프트 원문을 보낸다.
2. 서버는 외부AI 서버에 리라이팅을 요청한다.
3. 응답으로 받은 rewrite_final을 DB에 draft(초안)로 저장하고 rewriteResultId를 돌려준다.
4. 사용자가 마음에 들면 리라이팅 결과를 저장한다.

---

# 구조 설계

RewriteController → RewriteResultService → RewriteRunner(HttpRewriteRunner) → AI Server(WebClient) → AiRewriteResult → DB 저장

## 외부 AI 호출은 Service에 넣지 않고 Runner로 분리

RewriteRunner라는 ‘외부 AI 호출 전용 인터페이스’를 만들고, 그 구현체가 HttpRewriteRunner이다.

## 미리보기(draft)와 최종 저장 기능을 분리

사용자는 리라이팅 결과를 보고 마음에 들면 저장하고 마음에 안 들면 다시 요청한다.

1. `/api/rewrite` → AI 결과 받아서 “미리보기 + draft 저장(id 발급)”
2. (결과가 마음에 들면) 라이브러리 내에서 저장하기 기능

---

# 코드 전체 흐름

## 1. 사용자가 /api/rewrite를 호출

### RewriteController.preview()가 실행된다.

```java
@PostMapping("/rewrite")
public ResponseEntity<RewritePreviewResponse> preview(
        @AuthenticationPrincipal CustomUserDetails principal,
        @Valid @RequestBody RewritePreviewRequest req) {
```

- `principal`: 로그인 사용자 정보가 들어있음(없으면 null)
- `req`: 프론트가 보낸 JSON 바디
    - 여기서 중요한 건 `req.prompt()` (리라이팅할 원문)

### 로그인 체크

```java
Long userId = requireUserId(principal);

```

### requireUserId( ) 내부

```java
if (principal == null) {
	    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "로그인이 필요한 기능입니다.");
	}
	return principal.getUserId();
```

### 외부 AI 서버 호출

```java
AiRewriteResult result = rewriteRunner.run(req.prompt());
System.out.println("RewriteRunner bean = " + rewriteRunner.getClass().getName());
```

: rewriteRunner에게 위임한다.

그 결과 HttpRewriteRunner.run()이 실행됨 (AI 연동 핵심 코드)

---

## 2. HttpRewriteRunner.run() 실행

```java
public AiRewriteResult run(String beforeText) {
    long start = System.currentTimeMillis();
```

### latency(소요시간) 측정 시작

- start 시간을 저장해둠
- 나중에 끝나면 `latency = now - start`

### AI 서버에 보낼 JSON body 만들기

```java
Map<String, Object> body = Map.of("prompt", beforeText == null ? "" : beforeText);
```

- AI 서버 스펙이 `{ "prompt": "..." }` 형태라서 key가 `"prompt"`
- `beforeText`가 null이면 빈 문자열로 처리

### WebClient로 POST 요청

```java
Map response = rewriteWebClient.post()
        .uri("/" + props.getPath().replaceAll("^/", ""))
        .contentType(MediaType.APPLICATION_JSON)
        .bodyValue(body)
        .retrieve()
        .bodyToMono(Map.class)
        .timeout(Duration.ofMillis(props.getTimeoutMs()))
        .block();
```

WebClient를 썼지만 .block() 때문에 “완전 비동기”는 아님.

하지만 RestTemplate보다 확장/정책 설정(타임아웃/상태코드 처리 등)이 편하고,

나중에 async 구조로 갈 때도 기반이 WebClient가 유리하다.

### 내부 DTO(AiRewriteResult)로 변환해서 반환

```java
return new AiRewriteResult(
        response.get("rewrite_final").toString(),
        0,
        0,
        latency,
        "RewriteModel",
        "v1"
);
```

- 외부 응답(Map)을 그대로 서비스에 넘기지 않고
- 내부에서 쓰는 표준 DTO로 감싸서 넘김

---

## 3. 다시 Controller로 돌아와서 “draft 저장” 한다

```java
Long rewriteResultId = rewriteResultService.createDraft(userId, req.prompt(), result);
```

→ Service로 흐름

---

# RewriteResultService.createDraft() 코드 흐름

```java
public Long createDraft(Long userId, String beforePrompt, AiRewriteResult ai) {
```

- userId: 로그인 사용자 id
- beforePrompt: 원문
- ai: AI가 만든 결과 + latency 등 메타

### RewriteResult 엔티티 생성

```java
RewriteResult entity = RewriteResult.builder()
        .userId(userId)
        .prompt(null)
        .modelName(ai.modelName())
        .inputTokens(ai.inputTokens())
        .outputTokens(ai.outputTokens())
        .latencyMs(ai.latencyMs())
        .content(ai.rewrittenContent())
        .build();
```

### 저장 후 id 반환

```java
rewriteResultRepository.save(entity);
return entity.getId();
```

- DB에 insert 되고 PK(id)가 생김
- 이 id를 프론트로 돌려줌

---

# 4. Controller가 최종적으로 응답 내림

```java
return ResponseEntity.ok(new RewritePreviewResponse(
        rewriteResultId,
        result.rewrittenContent(),
        result.latencyMs(),
        result.modelName(),
        result.version()
));
```
