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

뮤지컬 관람 후 팬들이 **작품별/배우별로 커뮤니티를 생성하고, 후기·댓글·좋아요 등으로 소통할 수 있는 커뮤니티 플랫폼**을 백엔드 중심으로 개발했습니다.  
해당 프로젝트에서 **전체 커뮤니티 기능 백엔드 구현을 전담**했으며, 로그인한 사용자의 활동 기반 동적 커뮤니티 탐색 기능과  
피드 필터링, 커뮤니티 프로필 기능 등도 직접 구현하였습니다.

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
    <span class="info-value">2025.06 ~ 2025.07 (약 1개월)</span>
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
      • 커뮤니티 메인 기능 전체 구현 <span class="highlight">(기여도 100%)</span><br>
      &nbsp;&nbsp;- 커뮤니티 가입/탈퇴, 탐색, 정보 조회, 프로필 관리<br>
      &nbsp;&nbsp;- 커뮤니티 피드 기능 (미디어 필터, 인기글, 외부 인용 등)<br>
      • Prisma 기반 데이터베이스 설계 및 API 구축<br>
      • Swagger, Postman을 통한 문서화 및 테스트 진행
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

## 📌 세부 내용 보기

- 🔧 [백엔드 개발 세부 내용](/project-musical/backend-details/)
- 🧠 [기획 및 설계](/project-musical/planning/)
- 🔎 [고찰 및 회고](/project-musical/reflection/)
- 📸 [시연 이미지 및 영상](/project-musical/demo/)
- 🔗 [GitHub & 배포 링크](/project-musical/github/)
