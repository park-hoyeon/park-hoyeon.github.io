---
title: " [2025 하반기] MyOT - 백엔드 개발 세부 내용"
layout: category
permalink: /project-musical/backend-details
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

<style>
/* 공통: 반투명/블러 제거 + 제목/서브 색 강화 */
#backend-detail .feature-card{
  backdrop-filter: none !important;
  filter: none !important;
}
#backend-detail .feature-title{ color:#f5f7fb !important; font-weight:800; }
#backend-detail .feature-sub{ color:#c9d7ff !important; }

/* 다크모드 전용 고대비 오버라이드 */
@media (prefers-color-scheme: dark){
  #backend-detail{
    /* 더 진한 배경 + 또렷한 보더 + 서브텍스트 가독성 */
    --bd-bg: #1e222b;                /* 기존 rgba(...) → 불투명 다크 */
    --bd-border: #3d4352;
    --bd-text-sub: #b7c1d1;
    --bd-get: #8fb9ff;               /* 메서드 뱃지 색도 밝게 */
    --bd-get-b: #6fa3ff;
    --bd-patch: #ffd98a;
    --bd-patch-b: #ffc96a;
    --bd-del: #ff9aa5;
    --bd-del-b: #ff7b88;
  }

  #backend-detail .feature-card{
    background: var(--bd-bg) !important;
    border-color: var(--bd-border) !important;
    box-shadow: 0 10px 24px rgba(0,0,0,.35) !important;
    transform: translateY(0);
  }
  #backend-detail .feature-card:hover{
    background:#242b36 !important;   /* hover에서도 선명하게 */
    border-color:#505a6e !important;
    box-shadow: 0 14px 28px rgba(0,0,0,.42) !important;
  }

  /* 뱃지: 더 쨍한 색상 + 어두운 텍스트로 대비 */
  #backend-detail .feature-kicker{
    color:#0b1020 !important;
    border:0 !important;
    background: var(--bd-get) !important;
  }
  #backend-detail .feature-kicker.alt{   /* PATCH */
    background: var(--bd-patch) !important;
  }
  #backend-detail .feature-kicker.danger{ /* DELETE */
    background: var(--bd-del) !important;
  }
}
</style>

<div id="backend-detail">

<div class="feature-grid">
  <!-- 1 -->
  <a class="feature-card" href="/SKT/main-project/backend/join-leave/">
    <div class="feature-kicker">POST</div>
    <div class="feature-title">커뮤니티 가입/탈퇴하기</div>
    <div class="feature-sub">/api/community/type/join</div>
  </a>

  <!-- 2 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-switch/">
    <div class="feature-kicker alt">PATCH</div>
    <div class="feature-title">프로필 타입 전환 (커뮤니티별)</div>
    <div class="feature-sub">/api/profile/type/:communityId</div>
  </a>

  <!-- 3 -->
  <a class="feature-card" href="/SKT/main-project/backend/request/">
    <div class="feature-kicker">POST</div>
    <div class="feature-title">커뮤니티 신청 (등록 요청)</div>
    <div class="feature-sub">/api/community/:type/request</div>
  </a>

  <!-- 4 -->
  <a class="feature-card" href="/SKT/main-project/backend/discover/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">가입 가능한 커뮤니티 탐색</div>
    <div class="feature-sub">/api/community/type/:type/:userId</div>
  </a>

  <!-- 5 -->
  <a class="feature-card" href="/SKT/main-project/backend/all-list/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">모든 커뮤니티 목록 보기</div>
    <div class="feature-sub">/api/community</div>
  </a>

  <!-- 6 -->
  <a class="feature-card" href="/SKT/main-project/backend/my-list/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">내가 가입한 커뮤니티 목록 조회</div>
    <div class="feature-sub">/api/community/mine</div>
  </a>

  <!-- 7 -->
  <a class="feature-card" href="/SKT/main-project/backend/detail/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">커뮤니티 정보 조회</div>
    <div class="feature-sub">/api/community/:type/:id</div>
  </a>

  <!-- 8 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-create/">
    <div class="feature-kicker">POST</div>
    <div class="feature-title">커뮤니티 프로필 추가</div>
    <div class="feature-sub">/api/community/profile</div>
  </a>

  <!-- 9 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-update/">
    <div class="feature-kicker alt">PATCH</div>
    <div class="feature-title">커뮤니티 프로필 수정</div>
    <div class="feature-sub">/api/community/profile/:id</div>
  </a>

  <!-- 10 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-delete/">
    <div class="feature-kicker danger">DELETE</div>
    <div class="feature-title">커뮤니티 프로필 삭제</div>
    <div class="feature-sub">/api/community/profile/:id</div>
  </a>

  <!-- 11 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-by-community/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">해당 커뮤니티의 설정한 프로필 조회</div>
    <div class="feature-sub">/api/community/profile/my/:communityId</div>
  </a>

  <!-- 12 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-by-user/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">특정 유저의 해당 커뮤니티 프로필 조회</div>
    <div class="feature-sub">/api/community/user-profile/:communityId/:userId</div>
  </a>

  <!-- 13 -->
  <a class="feature-card" href="/SKT/main-project/backend/profile-count/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">현재 등록된 내 프로필 개수 확인</div>
    <div class="feature-sub">/api/community/profile/my/count</div>
  </a>

  <!-- 14 -->
  <a class="feature-card" href="/SKT/main-project/backend/feed-reposts/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">내 피드 중 다른 커뮤니티 글로 구성된 피드</div>
    <div class="feature-sub">/api/community/:id/feed/reposts</div>
  </a>

  <!-- 15 -->
  <a class="feature-card" href="/SKT/main-project/backend/feed-media/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">미디어가 있는 피드만 보기</div>
    <div class="feature-sub">/api/community/:id/feed/media</div>
  </a>

  <!-- 16 -->
  <a class="feature-card" href="/SKT/main-project/backend/feed-popular/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">요즘 인기 글만 모은 피드</div>
    <div class="feature-sub">/api/community/:id/feed/popular</div>
  </a>

  <!-- 17 -->
  <a class="feature-card" href="/SKT/main-project/backend/feed-all/">
    <div class="feature-kicker">GET</div>
    <div class="feature-title">커뮤니티에서 작성한 글만 모아보기</div>
    <div class="feature-sub">/api/community/:id/feed</div>
  </a>
</div>

<p class="feature-note">
  각 카드를 클릭하면 해당 기능의 <b>세부 문서</b>로 이동합니다. 
</p>

</div>
