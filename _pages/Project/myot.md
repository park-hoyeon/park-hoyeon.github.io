---
title: " [2025 하반기] 🎭 MyOT - 뮤지컬 커뮤니티 플랫폼"
layout: category
permalink: /Project/myot/
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


<img src="/_pages/Project/myot/image/MyOT.png" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); margin-bottom: 20px;" />

뮤지컬 관람 전후 작품별/배우별로 커뮤니티를 생성하고, 소통할 수 있는 커뮤니티 플랫폼을 개발했습니다.  
해당 프로젝트에서 전체 커뮤니티 기능 백엔드 구현을 전담했습니다.

---

<style>
.info-container {
  margin: 20px 0;
  padding: 20px;
  background: #2d333b;
  border-radius: 10px;
  border: 1px solid #444c56;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-title {
  font-size: 1.1em;
  color: #58a6ff;
  margin-bottom: 15px;
  border-bottom: 1px solid #444c56;
  padding-bottom: 8px;
}

.info-row {
  display: flex;
  margin: 8px 0;
  align-items: flex-start;
}

.info-label {
  min-width: 120px;
  color: #8b949e;
  font-weight: 500;
}

.info-value {
  color: #c9d1d9;
  flex: 1;
}

.highlight {
  color: #7ee787;
  font-weight: 500;
}
</style>

<div class="info-container">
  <div class="info-title">프로젝트 개요</div>
  <div class="info-row">
    <span class="info-label">개발 기간</span>
    <span class="info-value">2025.06.01 ~ 2025.08.23 (2개월)</span>
  </div>
  <div class="info-row">
    <span class="info-label">플랫폼</span>
    <span class="info-value">Android App</span>
  </div>
  <div class="info-row">
    <span class="info-label">개발 인원</span>
    <span class="info-value">10명 (PM1 / 디자인1 / 백엔드5 / 프론트엔드3)</span>
  </div>
  <div class="info-row">
  <span class="info-label">담당 역할 - 백엔드</span>
  <span class="info-value">
    • 커뮤니티 핵심 기능 전반 설계 및 구현 <span class="highlight">(기여도 100%)</span><br>
    &nbsp;&nbsp;- 커뮤니티 가입/탈퇴, 참여 가능 커뮤니티 필터링, 정보 조회, 가입 여부 확인 등 API 설계 및 구현<br>
    &nbsp;&nbsp;- 사용자 기반 커뮤니티 탐색 및 조건부 피드 출력 로직 구현 (로그인 상태 기반 동적 응답)<br>
    &nbsp;&nbsp;- 커뮤니티 프로필 등록/수정/삭제 및 특정 커뮤니티 내 프로필 관리 기능 구현<br>
    &nbsp;&nbsp;- 피드 필터 기능 (미디어 포함 게시물, 인기순, 타 커뮤니티 인용글 등 복합 조건 분기 처리)<br>
    • Prisma ORM 기반 스키마 정의 및 관계형 데이터베이스 모델링 (MySQL)<br>
    • RESTful API 구조 설계 및 컨트롤러/서비스/레포지토리 계층 분리<br>
    • Swagger 문서 자동화 및 Postman 기반 시나리오 테스트 케이스 작성 및 검증
  </span>
</div>

</div>

<div class="info-container">
  <div class="info-title">🔒개발 환경</div>
  <div class="info-row">
    <span class="info-label">🚀 Stacks</span>
    <span class="info-value">Node.js, Express, Prisma ORM, MySQL, Firebase, Android(Java)</span>
  </div>
  <div class="info-row">
    <span class="info-label">🛠 Tools</span>
    <span class="info-value">Postman, GitHub, Firebase, Figma</span>
  </div>
  <div class="info-row">
    <span class="info-label">👥 Collaboration</span>
    <span class="info-value">Notion, GitHub, Google Meet, Slack</span>
  </div>
</div>

---

## 프로젝트 자세히 보기

-  [백엔드 개발 세부 내용](/project-musical/backend-details)
-  [기획 및 설계](/project-musical/planning/)
-  [고찰 및 회고](/project-musical/reflection/)
-  [시연 이미지 및 영상](/project-musical/demo/)
-  [GitHub & 배포 링크](/project-musical/github/)
