---
title: "어려움 · MyOT 프로젝트 고찰 및 개선점"
layout: single
permalink: /project-musical/reflection/
author_profile: true
sidebar:
  nav: "sidebar-category"
  enabled: true
---

## 결론 요약

> **요약**  
> MyOT는 뮤지컬/배우 팬 커뮤니티 플랫폼으로, 다양한 API와 데이터베이스 구조를 구현하면서 많은 시행착오가 있었다.  
> 특히 **Prisma 마이그레이션 충돌**, **스키마 불일치**, **라우팅 설계 문제**, **Swagger 문서화 오류**, **Postman 테스트 혼란** 등이 주요한 어려움이었다.  
> 그러나 이러한 문제를 해결하면서, **일관성 있는 데이터 모델 관리**, **명확한 라우팅 규칙 수립**, **문서-코드 동기화**, **환경 분리 전략**의 중요성을 깊이 체감할 수 있었다.  

---

## 1) 데이터베이스 마이그레이션 충돌

### 문제
- `npx prisma migrate deploy` 실행 시 `Table 'User' already exists` 오류 발생.  
- 로컬 DB와 RDS 간 스키마가 불일치했고, 초기 마이그레이션을 중복 적용하려다 충돌 발생.

### 해결
- 운영(RDS)에는 **`migrate deploy`만** 적용, 로컬은 **`migrate dev`**로만 작업.  
- `migrate resolve --applied` 명령으로 충돌 마이그레이션을 ‘적용됨’ 상태로 표시 후 배포 성공.  
- **체크리스트**:  
  - 운영/로컬 환경 분리  
  - 한 PR = 한 마이그레이션 원칙  
  - ERD → Prisma schema → 실제 DB 동기화  

---

## 2) 스키마 불일치와 ERD 관리

### 문제
- ERD, Prisma schema, 실제 DB 구조가 서로 달라 런타임 에러 다발.  
- enum 값, 관계 필드, nullable 정책 등이 일치하지 않음.

### 해결
- **ERD를 단일 기준(Single Source of Truth)** 으로 관리.  
- `prisma db pull`로 실제 DB 스키마 점검 → drift 수정 후 `migrate dev`로 정렬.  
- enum, 외래키 onDelete 정책을 코드와 문서에 모두 반영.  

---

## 3) 라우팅 설계 혼란

### 문제
- `/api/community/:type/:id` 라우트에서 `type` 값에 따라 참조 테이블이 달라지는 구조.  
- `musical`/`actor` 분기에 따라 `targetId` 해석이 달라 혼동 발생.

### 해결
- 경로 파라미터 `type`과 DB `community.type`을 일치 검증.  
- `targetId` 존재 여부 반드시 확인 → 없으면 404 반환.  
- Swagger 문서에 `enum: [musical, actor]` 명시하여 혼란 최소화.  

---

## 4) Swagger 문서화 오류

### 문제
- Swagger 정의와 실제 코드가 달라 테스트 시 400/404 에러 빈발.  
- path params, query, body 정의가 중구난방.

### 해결
- **라우터 코드 옆에 Swagger 주석을 직접 관리**하여 단일화.  
- Postman 성공 요청을 그대로 Swagger 예시(example)에 반영.  
- 필수/선택 구분과 타입을 명확히 기술.  

---

## 5) Postman 테스트 혼란

### 문제
- 커뮤니티 가입/탈퇴, 멀티프로필 생성 API에서 요청 body/쿼리 파라미터 혼동.  
- 트랜잭션 처리 순서가 불명확해 중복 가입/프로필 생성 에러 다발.

### 해결
- Prisma `$transaction`으로 가입/프로필 생성 원자성 보장.  
- 중복 가입, 멀티프로필 5개 제한, 중복 닉네임 등 **사전 검증 로직** 추가.  
- Postman Collection에 모든 요청 예시 저장 → 팀원과 공유.  

---

## 6) 피드 정렬 & 쿼리 최적화

### 문제
- 최신순/인기순/미디어 포함 조건을 동시에 처리하려다 쿼리 복잡성 ↑.  
- 불필요한 `include`와 `select`로 N+1 문제 발생.

### 해결
- 인기순 기준 = `likeCount desc, createdAt desc` 명확히 정의.  
- 미디어 전용 쿼리는 `where: { media: { some: {} } }`로 분리.  
- 불필요한 필드는 `select`로 제한.  

---

## 7) JWT 인증 상태별 응답 처리

### 문제
- 로그인 여부에 따라 다른 응답을 줘야 하는데, 미들웨어 처리 누락.  
- 비로그인 사용자가 좋아요/북마크 여부까지 요청하는 상황 발생.

### 해결
- 인증 미들웨어를 **옵셔널 모드**로 수정 → 비로그인도 200 반환.  
- 로그인 시만 좋아요 여부, 북마크 여부 포함.  

---

## 8) 환경 분리와 배포 파이프라인

### 문제
- `DATABASE_URL` 혼동 → 로컬에서 운영 DB에 `migrate dev` 실행하는 사고 발생.  
- `.env` 관리 부실, CI/CD 분리 안 됨.

### 해결
- `.env.development`, `.env.production` 파일 분리.  
- GitHub Actions에서 `deploy`만 실행, 로컬에서는 `dev`만 사용.  
- 마이그레이션 전 `resolve --applied` 안전장치 배치.  

---

## 종합 고찰

MyOT 프로젝트에서 겪은 어려움들은 대부분 **일관성 부족**에서 비롯되었다.  
- 데이터 모델 일관성(ERD ↔ Prisma ↔ DB)  
- 라우트와 문서 간 일관성(Swagger ↔ 코드)  
- 환경별 일관성(로컬 ↔ 운영)  

이를 해결하는 과정에서, **“한 가지 원칙을 지키는 것”** 의 중요성을 크게 느꼈다.  
결국 서비스 품질은 기술 스택보다 **팀 내 개발 규칙과 일관된 구조 관리**에서 나온다는 교훈을 얻었다.  
