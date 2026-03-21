---
title: "[2026 상반기] AI 프롬프트 리라이팅 웹서비스"
layout: category
permalink: /Project/PromMate/difficulties/
author_profile: true
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}


# 중간 과정 + 문제 해결 + 회고

[리라이팅 기능 구현 정리](https://www.notion.so/2e4cc9e706b38014bdb5d9bff3ec917d?pvs=21)


# 목차

- **배경/목표**
    - 왜 AI 서버 연동이 필요했는지
    - “PromptMate”에서 리라이팅이 어떤 유저 플로우에 들어가는지(요청 → AI → 결과 저장/응답)
- **최종 아키텍처(그림 + 설명)**
    - Spring API 서버(Rewrite Service)
    - RewriteRunner 인터페이스
    - HttpRewriteRunner 구현체 (AI 서버 호출)
    - RewriteAiProperties (baseUrl/path 등)
    - RestTemplateConfig or WebClient Bean
    - (선택) JudgeRunner / JudgeClient
    - DB 저장 지점(RewriteResult 등)과의 연결
- **구현 단계별 진행 기록**
    - Step 1: “AI 호출을 어디에 넣을지” 결정(Controller가 아니라 Runner/Client로 분리)
    - Step 2: 요청/응답 스펙 확정(JSON body/field, status code)
    - Step 3: Properties/Profiles로 환경 분리(local vs !local)
    - Step 4: 타임아웃/재시도/예외 처리
    - Step 5: 응답 DTO 매핑/Null 안전성
    - Step 6: 성능(평균 15초) 관찰 및 병목 분리
- **어려웠던 점 & 해결**
- **테스트/검증**
- **회고(배운 점/다음 개선)**

---

# 기술 포인트

### A. “왜 Runner 패턴으로 분리했는가”

기록 포인트:

- Service 안에서 RestTemplate/WebClient를 직접 호출하면
    - 테스트가 어려워짐(외부 의존)
    - 예외 처리 로직이 서비스 로직과 섞임
    - 향후 AI 서버 변경/추가(예: Judge) 시 코드가 난잡해짐
- 그래서 `RewriteRunner`(interface)로 추상화하고
    - `HttpRewriteRunner`(실제 호출)
    - (선택) `FakeRewriteRunner`(local/dev용 더미)
    - 처럼 구현체를 분리

### B. 요청/응답 스펙을 어떻게 맞췄는지

기록 포인트:

- AI 서버가 요구하는 body: 예) `{ "prompt": "..." }`
- 서버 URL: `baseUrl + path`로 합성
- 헤더: `Content-Type: application/json`
- 응답 형태: AI가 반환하는 JSON 구조(예: `rewrittenText`, `result`, `data` 등)를 DTO로 매핑
- **응답이 예상과 다를 경우**를 대비한 방어 로직(빈 값/키 누락/타입 불일치)

디테일 예시:

- `beforeText == null ? "" : beforeText` 같은 **Null-safe 처리**
- `ResponseEntity<Map>`로 먼저 받아서 구조 확인 → DTO 확정
- or `ObjectMapper`로 안전하게 파싱 + 예외 발생 시 커스텀 예외 던짐

### C. Profile 분기로 “로컬에서는 AI 호출 안 하게” 만든 부분

- local 개발 환경에서는 AI 서버가 없거나 느릴 수 있음
- 그래서 local 프로파일에서는
    - 더미 Runner를 사용하거나
    - AI 호출 자체를 막고 빠르게 개발
- 운영/스테이징에서는 `HttpRewriteRunner`를 활성화
- `application-local.yml`과 `application-prod.yml`에 `rewrite.ai.baseUrl`, `rewrite.ai.path` 같은 설정을 분리
- 민감 정보/환경별 주소를 Git에 올리지 않게 `.gitignore` 처리한 이유

### D. 타임아웃, 예외 처리, 장애 대응

- 네트워크 호출에서 반드시 고려한 장애
    - AI 서버 다운 / 5xx / 4xx
    - 응답 지연(15초)
    - 응답 JSON 깨짐/형식 변경
- 그래서 한 것
    - connect timeout / read timeout 설정
    - 실패 시 던지는 커스텀 예외 분리 (`RewriteUnavailableException`, `InvalidResponseException` 같은 느낌)
    - 로그에 **요청 시작 시간/소요 시간(ms)** 찍어서 성능 관측 가능하게 함
    - “유저에게 어떤 에러 메시지를 줄지” 정책
- “성능 계측을 위해 호출 시작/종료 시간을 기록했다”
    
    

### E. WebClient로 바꿨는데도 15초 걸린 이유를 어떻게 판단했는지

1. 처음엔 “RestTemplate이 블로킹이라 느린가?” 의심
2. WebClient로 바꾸면 빨라질 줄 알았는데 **평균 15초 유지**
3. 따라서 병목이
    - Spring 서버 내부(클라이언트 라이브러리)보다는
    - **AI 서버의 처리 시간** 또는
    - 네트워크/큐잉(동시 요청) 또는
    - AI 서버가 sync로 추론하고 있어 latency가 큰 구조
        
        라는 결론을 “측정 기반”으로 내림
        

- AI 서버를 Postman/curl로 직접 쳐서 응답 시간 비교
- Spring에서 “AI 요청만 호출하는 최소 endpoint” 만들어서 내부 처리 제외하고 측정
- 로그에 `rewriteRunner.run()` 단독 소요시간 vs 전체 API 처리시간 분리

---

## 어려웠던 점 & 해결법: “대표 트러블슈팅”

- **증상**: (예: 응답이 null / 500 / 너무 느림 / JSON 파싱 실패)
- **원인 가설**: (AI 서버 스펙 불일치 / 타임아웃 / 프로파일 문제)
- **확인 방법**: (로그/요청 바디 출력/Postman 재현)
- **원인 확정**: (실제 응답 키가 달랐다 등)
- **해결**: (DTO 변경 / 예외 처리 / properties 분리)
- **재발 방지**: (계측 로그 / 계약 문서화 / 테스트 추가)

- baseUrl/path 설정 실수(슬래시 중복, 누락)
- local 프로파일에서 AI 호출이 되거나 안 되는 문제
- 응답 형식 변경으로 Map 파싱 실패
- WebClient 전환 후에도 latency 해결 안 됨 → 병목 분리
- 로그인 사용자만 접근하도록 인증 추가하면서 401/403 처리

## 회고

### 배운 점

- “외부 AI 서버 연동은 ‘기능 구현’보다 **장애/지연/스펙 변경**을 전제로 설계해야 했다.”
- “WebClient로 바꿨다고 latency가 해결되지 않았다 → **측정/분리**가 우선이라는 걸 배웠다.”
- “Profile과 Properties 분리를 통해 로컬 개발 생산성을 유지하면서 운영 환경과 안전하게 분리할 수 있었다.”
- “Runner/Client 레이어 분리 덕분에 Judge 같은 외부 연동도 같은 패턴으로 확장 가능해졌다.”

### 

---

외부 AI 서버 연동은 단순히 HTTP 요청을 보내는 문제를 넘어서, 지연 시간·장애 대응·환경 분리까지 함께 고려해야 하는 영역이었다. 이 글에서는 Spring Boot 기반 서비스에서 AI 리라이팅 서버를 연동하며 겪은 설계 고민과 성능 이슈, 그리고 그에 대한 판단 과정을 기술적으로 정리한다.

# 전체 아키텍처 구조

- Controller
    - 요청/응답 책임만 가짐
- Service
    - 리라이팅 비즈니스 흐름만 담당
- **RewriteRunner (interface)**
    - 외부 AI 호출을 추상화
- **HttpRewriteRunner**
    - 실제 AI 서버 HTTP 호출 담당
- Properties
    - AI 서버 주소/경로를 코드와 분리

외부 AI 서버 호출은 서비스 로직과 분리해 `RewriteRunner`라는 추상 레이어로 감쌌다. 이를 통해 서비스는 “리라이팅 요청 → 결과 처리”라는 도메인 흐름에 집중하고, 네트워크/외부 장애 이슈는 Runner 계층에서 관리하도록 설계했다.

## 왜 Runner 패턴을 선택했는가

- 외부 의존성 격리
- 테스트 용이성
- 환경별 구현 분리(local vs prod)
- 향후 AI 서버 변경/추가 대비

초기에는 Service에서 직접 WebClient를 호출하는 구조를 고려했지만, 외부 AI 서버는 지연·장애·스펙 변경 가능성이 높았다. 이에 따라 HTTP 호출 로직을 `RewriteRunner`로 분리해 외부 의존성을 격리했고, 이는 이후 Judge 서버 연동에서도 동일한 패턴으로 재사용할 수 있었다.

# RestTemplate 기반 HTTP 연동에서 WebClient로 전환한 이유

[RestTemplate VS Web Client](https://www.notion.so/RestTemplate-VS-Web-Client-2e4cc9e706b380a09c03f5076aa09ba1?pvs=21)

### (1) 관측: RestTemplate로 구현했을 때의 문제

- 응답이 느리다(평균 15초)
- 외부 AI 서버 호출은 네트워크/추론 시간 때문에 지연이 발생할 수 있음
- RestTemplate은 **동기(blocking)** → 스레드 점유

> 초기에는 RestTemplate 기반의 동기 HTTP 호출로 AI 서버를 연동하였다. 기능 구현 자체는 단순했지만, 외부 AI 서버 호출 시간이 길어질수록 요청 스레드가 점유되는 구조라 확정성의 측면에서는 리스크가 있다고 판단했다.
> 

### (2) 가설: “WebClient로 바꾸면 개선될 수 있다”

- WebClient는 **Reactive 기반 non-blocking**
- 긴 I/O 대기 시간을 스레드가 붙잡지 않음
- 따라서 “동시 요청 증가 상황”에서 더 유리할 것이라는 가설

**문장 템플릿**

> 지연 시간이 길어지는 상황에서 동기 호출이 서버 자원을 비효율적으로 점유할 수 있다고 판단했다. 따라서 논블로킹 방식의 WebClient로 전환하면, 최소한 서버의 동시 처리 효율 측면에서 개선 여지가 있다고 가정했다.
> 

### (3) 변경: 실제로 어떻게 바꿨는지 (구현 포인트)

### 변경 내용

- RestTemplate Bean 제거/축소
- WebClient Bean 설정(`baseUrl`, default headers)
- 요청 생성 방식 변경
    - `.post().uri(path).bodyValue(body)`
- 응답 처리
    - `.retrieve()` vs `.exchangeToMono()`
- 예외 처리
    - `onStatus`로 4xx/5xx 구분
    - `timeout(Duration.ofSeconds(x))`
    - `retryWhen`(도입 여부)
- 로깅/계측 유지(전환 전/후 비교를 위해)

> WebClient 전환 시 단순히 호출 라이브러리만 교체하지 않고, (1) 상태 코드별 예외 처리(onStatus), (2) timeout 정책, (3) 호출 구간의 소요 시간 로깅을 함께 정비했다. 전환 전/후 성능 비교가 가능하도록 계측 포인트는 동일하게 유지했다.
> 

### (4) 측정: “바꾼 뒤 뭐가 달라졌나?”

👉 **WebClient로 바꿨는데도 평균 15초는 유지됨**

**문장 템플릿**

> WebClient로 전환한 뒤에도 평균 응답 시간은 유의미하게 감소하지 않았다. 즉, 지연 시간의 주된 원인은 Spring 애플리케이션 내부의 HTTP 클라이언트 구현이 아니라, AI 서버의 추론 처리 시간(혹은 서버 측 큐잉)일 가능성이 높다고 결론지었다.
> 

### (5) 결론: “그럼 WebClient 전환이 의미 없었나?”

**정리 포인트**

- latency 자체는 AI 서버가 병목이라 WebClient로 해결 불가
- 하지만 WebClient 전환은 의미 있음:
    - 스레드 점유 줄여 **동시성/확장성** 확보
    - 장애/timeout 정책 정교화하기 쉬움
    - 장기적으로 비동기 작업화(job id)로 확장 시 기반이 됨

> 결과적으로 latency 자체는 AI 서버 처리 시간에 의해 결정되어 WebClient 전환만으로 개선되지는 않았다. 다만 논블로킹 기반으로 전환함으로써 서버의 동시 요청 처리 효율을 높일 수 있고, 향후 비동기 처리(job 기반)로 확장할 때도 구조적으로 유리한 기반을 확보했다는 점에서 전환의 의미는 충분했다.
> 

---
