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

#backend-detail {
  --bd-border: #e5e7eb;
  --bd-bg: rgba(245,246,248,.65);
  --bd-text-sub: #64748b;
  --bd-get: #e8f2ff;
  --bd-get-b: #d6e7ff;
  --bd-patch: #fff7e6;
  --bd-patch-b: #ffe0a8;
  --bd-del: #ffe9e9;
  --bd-del-b: #ffcdcd;
}

/* grid */
#backend-detail .feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 8px;
}

/* card */
#backend-detail .feature-card {
  display: block;
  padding: 16px 14px;
  border-radius: 14px;
  border: 1px solid var(--bd-border);
  background: var(--bd-bg);
  box-shadow: 0 1px 0 rgba(0,0,0,.02);
  transition: transform .08s ease, box-shadow .12s ease, background .12s ease;
  text-decoration: none !important;
  color: inherit;
}
#backend-detail .feature-card:hover {
  transform: translateY(-2px);
  background: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,.07);
}

/* method badge */
#backend-detail .feature-kicker {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .02em;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--bd-get);          /* 기본: GET */
  border: 1px solid var(--bd-get-b);
  margin-bottom: 8px;
}
#backend-detail .feature-kicker.alt {   /* PATCH */
  background: var(--bd-patch);
  border-color: var(--bd-patch-b);
}
#backend-detail .feature-kicker.danger { /* DELETE */
  background: var(--bd-del);
  border-color: var(--bd-del-b);
}

#backend-detail .feature-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 6px;
}
#backend-detail .feature-sub {
  font-size: 12px;
  color: var(--bd-text-sub);
  letter-spacing: .01em;
  word-break: break-all;
}
#backend-detail .feature-note {
  margin-top: 18px;
  font-size: 13px;
  color: #6b7280;
}

/* 작은 화면 spacing 보정 */
@media (max-width: 420px) {
  #backend-detail .feature-card { padding: 14px 12px; }
  #backend-detail .feature-title { font-size: 15px; }
}

/* 다크모드(있다면) 살짝 톤다운 */
@media (prefers-color-scheme: dark) {
  #backend-detail {
    --bd-border: rgba(255,255,255,.12);
    --bd-bg: rgba(255,255,255,.04);
    --bd-text-sub: #9aa4b2;
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
