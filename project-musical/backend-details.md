---
title: "[2025 하반기] MyOT - 백엔드 개발 세부 내용"
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
/* 공통: 반투명/블러 제거 + 카드 가독성 강화 */
#backend-detail .feature-card {
  backdrop-filter: none !important;
  filter: none !important;
  background: #1f242d !important;
  border: 1px solid #3c4556 !important;
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 8px 22px rgba(0,0,0,.28);
  transition: transform .12s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;
  display: block;
  text-decoration: none !important;
}
#backend-detail .feature-card:hover {
  transform: translateY(-2px);
  border-color: #55607a !important;
  background: #242b36 !important;
  box-shadow: 0 12px 28px rgba(0,0,0,.38);
}
#backend-detail .feature-title {
  color: #f4f7fb !important;
  font-weight: 800;
  margin-top: 2px;
  font-size: 1.02rem;
}
#backend-detail .feature-sub {
  color: #c9d7ff !important;
  margin-top: 6px;
  font: 500 .92rem ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  word-break: break-all;
}

/* 뱃지 스타일 */
#backend-detail .feature-kicker {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  font: 700 11px/1 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  letter-spacing: .03em;
  color: #0b1020 !important;
  border: 0 !important;
  background: #7fe5b7 !important; /* POST 기본 */
}
#backend-detail .feature-kicker.alt { background: #ffd98a !important; } /* PATCH */
#backend-detail .feature-kicker.danger { background: #ff9aa5 !important; } /* DELETE */
#backend-detail .feature-kicker.get { background: #8cc8ff !important; } /* GET */

/* 다크모드 전용 대비 강화 */
@media (prefers-color-scheme: dark) {
  #backend-detail .feature-card {
    background: #1e222b !important;
    border-color: #3d4352 !important;
    box-shadow: 0 10px 24px rgba(0,0,0,.35) !important;
  }
  #backend-detail .feature-card:hover {
    background: #242b36 !important;
    border-color: #505a6e !important;
    box-shadow: 0 14px 28px rgba(0,0,0,.42) !important;
  }
}

/* 레이아웃 */
.feature-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;
}
@media (min-width: 820px) {
  .feature-grid { grid-template-columns: 1fr 1fr; }
}
.feature-note {
  margin-top: 14px;
  color: #b8c2d4;
  font-size: .92rem;
}
</style>

<div id="backend-detail">

<div class="feature-grid">
  <a class="feature-card" href="/project-musical/backend/join-leave/">
    <div class="feature-kicker">POST</div>
    <div class="feature-title">커뮤니티 가입/탈퇴하기</div>
    <div class="feature-sub">/api/community/type/join</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-switch/">
    <div class="feature-kicker alt">PATCH</div>
    <div class="feature-title">프로필 타입 전환 (커뮤니티별)</div>
    <div class="feature-sub">/api/profile/type/:communityId</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/request/">
    <div class="feature-kicker">POST</div>
    <div class="feature-title">커뮤니티 신청 (등록 요청)</div>
    <div class="feature-sub">/api/community/:type/request</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/discover/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">가입 가능한 커뮤니티 탐색</div>
    <div class="feature-sub">/api/community/type/:type/:userId</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/all-list/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">모든 커뮤니티 목록 보기</div>
    <div class="feature-sub">/api/community</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/my-list/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">내가 가입한 커뮤니티 목록 조회</div>
    <div class="feature-sub">/api/community/mine</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/detail/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">커뮤니티 정보 조회</div>
    <div class="feature-sub">/api/community/:type/:id</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-create/">
    <div class="feature-kicker">POST</div>
    <div class="feature-title">커뮤니티 프로필 추가</div>
    <div class="feature-sub">/api/community/profile</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-update/">
    <div class="feature-kicker alt">PATCH</div>
    <div class="feature-title">커뮤니티 프로필 수정</div>
    <div class="feature-sub">/api/community/profile/:id</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-delete/">
    <div class="feature-kicker danger">DELETE</div>
    <div class="feature-title">커뮤니티 프로필 삭제</div>
    <div class="feature-sub">/api/community/profile/:id</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-by-community/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">해당 커뮤니티의 설정한 프로필 조회</div>
    <div class="feature-sub">/api/community/profile/my/:communityId</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-by-user/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">특정 유저의 해당 커뮤니티 프로필 조회</div>
    <div class="feature-sub">/api/community/user-profile/:communityId/:userId</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/profile-count/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">현재 등록된 내 프로필 개수 확인</div>
    <div class="feature-sub">/api/community/profile/my/count</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/feed-reposts/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">내 피드 중 다른 커뮤니티 글로 구성된 피드</div>
    <div class="feature-sub">/api/community/:id/feed/reposts</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/feed-media/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">미디어가 있는 피드만 보기</div>
    <div class="feature-sub">/api/community/:id/feed/media</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/feed-popular/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">요즘 인기 글만 모은 피드</div>
    <div class="feature-sub">/api/community/:id/feed/popular</div>
  </a>

  <a class="feature-card" href="/SKT/main-project/backend/feed-all/">
    <div class="feature-kicker get">GET</div>
    <div class="feature-title">커뮤니티에서 작성한 글만 모아보기</div>
    <div class="feature-sub">/api/community/:id/feed</div>
  </a>
</div>

<p class="feature-note">
  각 카드를 클릭하면 해당 기능의 <b>세부 문서</b>로 이동합니다.
</p>

</div>
