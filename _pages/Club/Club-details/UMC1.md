---
layout: category
title: "✨ Chapter 1. Database 설계"
permalink: /Club/Club-details/UMC1
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - Coding
  - Club
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  



---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC1_images/image.png"> 


---

### 외래키

```
- 데이터가 일관될 수 있도록 돕는 역할을 한다. 보통은 두 개의 데이터베이스 테이블을 잇고자 기본 키와 함께 사용된다. 일종의 테이블을 연결하는 가상의 다리 역할을 한다.

- 외부 키는 한 테이블의 필드로, 다른 테이블의 기본 를 나타낸다.
- 외래 키를 가지고 있는 테이블을 하위 테이블, 기본 키를 가지고 있는 테이블을 참조 이블 또는 상위 테이블이라고 한다.
- 각 외부 키와 기본 키는 1:1관계로 매칭되어야 하며, 기본 키에 존재하지 않는 값이 외부키에 존재할 수 없다. -> 외래 키 제한 표현으로 데이터베이스에게 두 테이블 간의 관계를 알려주어야 한다.
```

### 기본키

```
- 데이터베이스 테이블 내의 모든 레코드에서 고유한 아이디를 제공한다.
- 모든 레코드가 서로 다른 값을 가지고 있어 각 레코드를 식별할 수 있다.
- NULL값이 존재할 수 없다.
- 레코드의 값은 중복이 불가능하다.
- 테이블에는 하나의 기본키만 가질 수 있지만 경우에 따라 1개 이상의 기본키를 정의할 수도 있다. (다수 열 기본 키, 복합 기본 키)
```

### ER 다이어그램

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC1_images/조각집ERD.png"> 


### 복합 키

```
두 개 이상의 칼럼으로 구성된 기본키
```

### 연관관계

```java
방향(Direction)
단방향 : 객체 관계에서 한 쪽만 참조
양방향 : 객체 관계에서 양쪽이 서로 참조
데이터베이스 테이블은 키 하나로 조인을 사용 → 항상 양방향 쿼리 사용 가능

다중성(Multiplicity)
다대일(N:1) : @ManyToOne
일대다(1:N) : @OneToMany
일대일(1:1) : @OneToOne
다대다(N:M) : @ManyToMany

연관관계의 주인(Owner) : 객체가 양방향 연관관계라면 주인을 정해야 한다.
연관관계의 주인만 데이터베이스 연관관계와 매핑되고, 외래 키를 관리(등록, 수정, 삭제)할 수 있다.
주인이 아닌 쪽은 읽기만 할 수 있다.
주인이 아닌 쪽에 mappedBy 속성으로 연관관계 주인을 지정
외래 키가 있는 곳이 연관관계 주인
```

### 정규화

```java
관계형 데이터베이스의 설계에서 데이터 중복을 줄이고 데이터 무결성을 개선하기 위해 데이터를 정규형(normal form)에 맞도록 구조화하는 프로세스
```

### 반정규화

```java
정규화된 엔티티, 속성, 관계에 대해 시스템의 성능향상과 개발과 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법

*즉, 성능 향상을 위해 정규화된 데이터 모델에서 중복, 통합, 분리 등을 수행하는 모든 과정을 의미한다. 반정규화를 적용하면 데이터 무결성이 깨질 수 있는 위험이 있다.
```

---

## ☑️ 실습 인증

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC1_images/for_UMC.png"> 
<br>
출처: UMC 제공 워크북

### 필요한 테이블

- Users
- Stores
- Regions
- Missions
- Points
- User_Missions (사용자가 진행 중인 미션)
- User_Regions (사용자가 진행 중인 지역)

### Users

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 사용자  ID |
| `username` | `string` | 사용자명 |
| `email` | `string` | 이메일 주소 |
| `password` | `string` | 비밀번호 |
| `created_at` | `timestamp` | 계정 생성 일시 |
| `updated_at` | `timestamp` | 계정 수정 일시 |
| `profile_image`  | `string` | 프로필 이미지 |

### Stores

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 가게  ID |
| `region_id` | `int` (FK) | 지역 ID  |
| `storename` | `string` | 가게 이름 |
| `description` | `string` | 가게 설명 |
| `address` | `string` | 가게 주소 |
| `store_image` | `string` | 가게 이미지  |
| `rating` | `int` | 가게 평점 |

### Regions

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 지역  ID |
| `regionname` | `string` | 지역명 |

### Missions

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 미션 ID |
| `store_id` | `int` (FK) | 가게 ID  |
| `title` | `string` | 미션 제목 |
| `mission_des` | `string` | 미션 설명 |
| `points` | `int` | 미션을 완료했을 때 받는 포인트 |
| `mission_type` | `string` | 미션 유형  |
| `proof` | `string` | 미션 증명  |
| `created_at` | `timestamp` | 미션 생성 일시 |
| `updated_at` | `timestamp` | 미션 수정 일시 |

### User_Missions

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 사용자 미션 기록 ID |
| `user_id` | `int` (FK) | 사용자 ID (누가 수행했는지) |
| `mission_id` | `int` (FK) | 미션 ID (어떤 미션을 수행했는지) |
| `status` | `enum` | 미션 진행 상태 (`진행 중`, `완료`) |
| `completed_at` | `timestamp` | 미션 완료 일시 |
| `created_at` | `timestamp` | 미션 기록 생성 일시 |
| `updated_at` | `timestamp` | 미션 기록 수정 일시 |

### User_Regions

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 사용자 방문 지역 ID |
| `user_id` | `int` (FK) | 사용자 ID (누가 방문했는지) |
| `region_id` | `int` (FK) | 지역 ID (어느 지역을 방문했는지) |
| `missions_completed` | `int` | 해당 지역에서 완료한 미션 개수 |
| `total_points` | `int` | 해당 지역에서 획득한 총 포인트 |
| `created_at` | `timestamp` | 기록 생성 일시 |
| `updated_at` | `timestamp` | 기록 수정 일시 |

### Pionts

| **속성명** | **타입** | **설명** |
| --- | --- | --- |
| `id` | `int` (PK) | 포인트 ID |
| `region_id` | `int` (FK) | 지역 ID (어느 지역의 보상인지) |
| `points` | `int` | 보상을 받기 위해 필요한 포인트 |
| `required_missions` | `int` | 보상을 받기 위해 완료해야 하는 미션 개수 |
| `created_at` | `timestamp` | 보상 정보 생성 일시 |
| `updated_at` | `timestamp` | 보상 정보 수정 일시 |

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC1_images/image 1.png"> 


### 시니어 미션1.

- [x]  미션 자료로 제공된 피그마를 보고 ERD를 설계한 후 제 1,2,3 정규화를 통해 제 1,2,3 정규형을 만들고 각각 중복된 데이터가 어떻게 변화하였고 어떠한 이점이 있었는 지 작성하여 주세요

Stores 테이블

| store_id | region | address |
| --- | --- | --- |
| 11 | 서울 | 강북구 |
| 22 | 대전 | 중구 |

### 제1 정규형

Users 테이블

| user_id | username | email | regions_visited |
| --- | --- | --- | --- |
| 1 | 신짱구 | love@naver.com | 서울, 대전, 대구 |
| 2 | 신짱아 | like@naver.com | 서울 |

### 제2 정규형

Users 테이블

| user_id | username | email |
| --- | --- | --- |
| 1 | 신짱구 | love@naver.com |
| 2 | 신짱아 | like@naver.com |

User_regions_visited

| user_id | region |
| --- | --- |
| 1 | 서울 |
| 1 | 대전 |
| 1 | 대구 |
| 2 | 서울 |

### 제3 정규형

Regions 테이블

| region_id | region_name |
| --- | --- |
| 1 | 서울 |
| 2 | 대전 |
| 3 | 대구 |

Users 테이블

| user_id | username | email |
| --- | --- | --- |
| 1 | 신짱구 | love@naver.com |
| 2 | 신짱아 | like@naver.com |

User_regions_visited

| user_id | region |
| --- | --- |
| 1 | 1 |
| 1 | 2 |
| 1 | 3 |
| 2 | 1 |

### 미션2

- [x]  피그마의 홈 부분에서 한 사람이 “미션 도전!” 버튼을 빠르게 여러 번 눌렀을 때 여러 가지 이유(비동기 로직 등)로 요청이 지연되어 완전히 처리하기 전 두 번 요청이 들어갈 수 있습니다. 이를 해결할 수 있는 방법에 대해 작성하여 주세요

: 콜백 함수는 자바스크립트의일급 객체Visit Website 특성을 이용해 함수의 매개변수에 함수 자체를 넘겨, 함수 내에서 매개변수 함수를 실행하는 기법이다.

다시 말해 코드를 통해 명시적으로 호출하는 함수가 아니라, 함수를 등록해놓은 후에 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.

—>

그럼 콜백함수는 왜 필요한가? 비동기로 함수를 실행할 경우 라도 논리적으로 A동작이 완료되고 B동작이 실행되어야 하는 경우가 있다. 예를들면 텍스트파일이나 서버로부터 비동기로 파일을 읽는동작(동작A) 과 읽은 파일을 가공하는 동작(동작B)가 있는 경우이다. 이럴경우 에 B를 콜백함수로 A함수의 인자로 호출하면 이를 방지하고 A가 동작을 완료하고 B를 실행 할 수가 있다.

그러나 A함수를 비동기로 실행하여 B함수 C함수 D함수와 같은 순서로 실행하고자 한다면 계속 A함수안에 B를 콜백함수로, B함수 안에 C함수를 콜백함수로, C함수 안에 D함수를 콜백함수로 넣어서 코드가 보기에 괭장히 복잡해 진다. 이를 클백지옥이라고 부른다고 한다.

이러한 문제점을 해결하기 위해 나온것이 promise이다. 비동기적 실행에서 순차적으로 실행시켜야 할경우 콜백함수를 이용해서 실행하는 것 대신에 promise를 활용하면 훨씬더 보기 깔끔한 프로그래밍이 실행된다.

promise를 좀더 편하고 간편하게 사용하기 위해서 나온것이 Async /Await이다. 사용방법은 간단하다. 함수앞에 Aysnc 를 붙여주고 비동기로 실행된 함수 앞에 await을 넣어주면 말그대로 비동기로 실행된 결과가 끝날때 까지 기다린다.
