---
title: "[2026 상반기] AI 프롬프트 리라이팅 웹서비스"
layout: category
permalink: /Project/PromMate/runner/
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


# Runner란?

### Runner = “외부 시스템을 실행(run)시키는 전용 어댑터(호출 담당자)”

- 외부 AI 서버에 HTTP 요청을 보내고
- 응답을 받아서
- 우리 서비스에서 쓰는 형태(DTO)로 정리해서
- Service에 넘겨주는 역할

즉, Service가 AI 서버 호출(WebClient 코드)을 직접 들고 있지 않게 분리한 것이다.

---

# Runner를 만든 이유

### 현재 나의 상황

- AI 서버 응답이 느림 (평균 15초)
- 종종 응답 출력 실패
- timeout/예외처리 같은 ‘방어 로직’이 필요함

따라서 이런 외부 연동 코드를 Service에 그대로 넣으면 문제가 발생한다.

### Service에 넣으면 생기는 문제

1. Service 코드가 지저분해진다
    
    : 비즈니스 로직과 HTTP 호출, 예외처리, DTO 변환이 모두 한 곳에 섞이게 된다.
    
2. 나중에 변경하기 어려움
    
    : AI 서버 URL/스펙 변경, 호출 방식 변경할 때 서비스 로직까지 모두 다 손대야 한다.
    
3. 테스트의 어려움
    
    : Service 테스트할 때마다 실제 AI 서버를 호출하게 되면 테스트가 느리고 불안정해진다.
    

따라서, 외부 의존성은 한 곳에 모아두는 것이 좋다고 생각되어, Runner를 생성하였다.

---

# RewriteRunner 인터페이스를 분리한 이유

리라이팅 기능을 구현할 때, 처음에는 `HttpRewriteRunner` 하나의 클래스로 외부 AI 서버 호출을 처리할 수도 있었다. 하지만 단순히 기능을 동작시키는 것보다, **외부 의존성을 어떻게 분리할 것인가**에 초점을 두고 구조를 설계했다.

그래서 다음과 같은 구조로 분리했다.

- `RewriteRunner` (인터페이스)
- `HttpRewriteRunner` (구현체)

## RewriteRunner는 무엇인가?

**외부 AI 호출 기능의 ‘규칙(계약)’을 정의한 인터페이스**이다.

```jsx
public interface RewriteRunner {
    AiRewriteResult run(String beforeText);
}
```

> “리라이팅을 실행할 수 있는 객체라면 반드시 run() 메서드를 제공해야 한다.”
> 

여기에는 HTTP 호출 방식, WebClient, timeout 등의 구체적인 구현은 전혀 포함되어 있지 않다.

오직 “리라이팅을 실행하면 결과를 반환한다”는 **기능적 계약만 정의**되어 있다.

## HttpRewriteRunner는 무엇인가?

이 클래스는:

- WebClient를 이용해 AI 서버에 HTTP 요청을 보내고
- timeout을 설정하고
- 응답을 검증하며
- 내부 DTO(AiRewriteResult)로 변환하는 역할을 담당한다.

즉,

- `RewriteRunner` = 추상화된 실행 계약
- `HttpRewriteRunner` = HTTP 기반 실제 실행 구현

이라는 관계를 가진다.

## 왜 하나의 클래스가 아니라 두 개로 나누었을까?

가장 핵심적인 이유는 구현 방식과 비즈니스 로직을 분리하기 위해서이다.

Service는 “리라이팅을 실행한다”는 기능만 필요하다.

하지만 그 내부에서는 HTTP로 호출하는지, 로컬 모델을 호출하는지 등은 알 필요가 없다.

따라서 Service가 인터페이스에만 의존하게 함으로써

- AI 호출 방식이 바뀌어도 Service 코드를 수정할 필요가 없다.
- 테스트 할 때가짜 구현체(FakeRewriteRunner)를 주입해서 외부 AI 서버 없이 테스트가 가능하다.
- 외부 의존성이 한 레이터에 격리되어 유지보수가 쉬워진다.

---

# Flow

### (1) Controller

`/api/rewrite` 요청 오면

1. “로그인 했냐?” 확인하고 userId 얻음
2. `rewriteRunner.run(prompt)` 호출
    - 여기서부터 **외부 AI 호출** 시작
3. 받은 결과를 draft로 DB 저장
4. id + 결과를 응답으로 반환

### (2) Runner (HttpRewriteRunner)

`run(prompt)`가 호출되면

1. 시작 시간 저장 (latency 재려고)
2. `{ prompt: beforeText }` 형태로 바디 만들고
3. WebClient로 AI 서버에 POST 요청
4. timeout 걸어서 무한 대기 방지
5. 응답에서 `rewrite_final` 뽑음 (없으면 예외)
6. `AiRewriteResult` DTO로 감싸서 Service에 반환

### (3) Service

Runner가 준 결과를 `RewriteResult` 엔티티로 만들어 DB에 저장하고 id 반환

---

# HttpRewriteRunner의 핵심 역할

“외부 AI 서버에 요청을 보내고 결과 받아오기”

## WebClient

WebClient = 서버가 다른 서버에게 HTTP 요청을 보내기 위한 도구

### 왜 webClient를 사용했는가

- 비동기 기반
- timeout 설정 쉬움
- 확장성 좋음

## timeout 의 필요성

만약 사용자가 요청을 보내, 내 서버가 AI  서버에 요청을 보냈다. 그런데  AI 서버가 응답 결과를 주지 않았다.

그럴 경우엔 내 서버는 계속 결과를 기다리게 되고, 기다리는 동안 스레드를 점유한다. 요청이 계속 쌓이면 서버가 멈춰 서버 장애가 생길 수 있다.

따라서 timeout이 필요하다.

.timeout(Duration.ofSeconds(20))을 설정함으로써 20초 안에 응답이 안 오면 기다리지 말고 그냥 실패 처리하도록 했다.

### .block()

WebClient는 원래 비동기적이다. 하지만 나는 .block()를 사용했다.

즉 응답이 올 때까지 기다린다는 것으로 동기 방식을 선택했다.

구조가 아직 동기 요청-응답 방식이었고 무엇보다 프론트에서 바로 결과를 받아야만 하는 구조였기 때문에 동기를 선택한 것이다.

## latency 측정한 이유

AI 서버 응답 결과가 지연되어 다음과 같은 의심이 들었다.

- RestTemplate가 느린가?
- 우리 서버가 느린가?
- AI 서버가 느린 것인가?

따라서 이유를 추론하기 위해 다음과 같이 설정했다.

1. 요청을 보내기 전에 시간을 저장한다.
2. 응답이 오면 시간을 계산한다.
3. 몇 ms가 걸렸는지 기록한다.

이렇게 측정한 결과, RestTemplate에서 WebClient로 바꿨음에도 불구하고, 응답 결과가 평균 15초 정도 소요되는 것을 확인했다. 즉 병목은 Spring이 아니라 외부 AI 서버 추론 시간이었다는 것을 직접 확인하였다.

---

# 개발하면서 든 의문점과 그 해답 발견

## `.block()`이면 WebClient의 비동기 이점이 사라지나?

- WebClient는 원래 `Mono/Flux`로 “비동기 파이프라인”을 만들 수 있는데
- `.block()`을 하면 **현재 스레드가 결과를 받을 때까지 기다려** → 동기 호출처럼 됨.

### 핵심: “비동기라서”가 아니라 “운영/정책/확장 기반” 때문에

### (1) 타임아웃, 재시도, 상태코드별 처리 같은 **정교한 정책**을 붙이기 쉬움

- WebClient는 `timeout`, `onStatus`, `retryWhen` 같은 “연동 정책”을 **체인으로** 명확하게 붙이기 좋음.
- RestTemplate도 가능하긴 한데, 보통은
    - `ClientHttpRequestFactory` 설정
    - 예외 매핑
    - 인터셉터/에러핸들러
        
        이런 식으로 “흩어져” 구성되는 경우가 많다.
        

즉 WebClient는 **외부 연동 로직을 ‘하나의 파이프라인’으로 읽히게** 만들기 쉽다.

### (2) 연결/리소스 관리를 더 유연하게 가져갈 수 있음 (특히 Netty 기반)

- WebClient는 기본적으로 Reactor Netty 위에서 돌아가서 커넥션 풀/타임아웃/리소스 옵션을 더 세밀하게 조정할 수 있다.
- `.block()`이라 “요청을 기다리는 건 동일”하지만, 운영 설정(커넥션 풀, keep-alive, 응답 처리)을 “현대적인 방식”으로 다루기 쉽다.
