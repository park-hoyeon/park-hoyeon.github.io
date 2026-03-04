---
title: "[2026 상반기] AI 프롬프트 리라이팅 웹서비스"
layout: category
permalink: /Project/PromMate/
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
.project-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}
.project-card {
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #3a3a3a;
  text-align: center;
  width: 200px;
  transition: transform 0.2s;
}
.project-card:hover {
  transform: scale(1.03);
  background-color: #2c2c2c;
}
.project-card a {
  color: #f1f1f1;
  text-decoration: none;
  font-weight: bold;
}
</style>

<style>
.main-project-highlight {
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.main-project-highlight img {
  width: 180px;
  height: auto;
  border-radius: 10px;
  margin-right: 1.5rem;
}

.main-project-highlight-text h2 {
  font-size: 1.5rem;
  color: #f5f5f5;
  margin-bottom: 0.5rem;
}

.main-project-highlight-text p {
  color: #ccc;
  margin-bottom: 0.8rem;
}

.main-project-highlight-text a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #f1f1f1;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid #555;
  font-weight: bold;
}
.main-project-highlight-text a:hover {
  background-color: #444;
}
</style>



## 개발 과정 기록

<style>
.button-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.button-item {
  display: block;
  background-color: #2a2a2a;
  color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button-item:hover {
  background-color: #3a3a3a;
  transform: translateY(-2px);
}

.button-item span {
  color: #00bcd4; /* 링크 색상 강조 */
}
</style>

<div class="button-list">
  <a href="Project/PromMate/contents" class="button-item"><span>구현한 시스템 아키텍쳐</span></a>
  <a href="Project/PromMate/difficulties" class="button-item"><span>중간과정 + 문제해결 + 회고</span></a>
  <a href="Project/PromMate/runner" class="button-item"><span>Runner란?</span></a>
</div>
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
    <span class="info-value">2025.11 ~ 2026.01 (2개월)</span>
  </div>
  <div class="info-row">
    <span class="info-label">플랫폼</span>
    <span class="info-value">Web Service (AI 기반 프롬프트 최적화 플랫폼)</span>
  </div>
  <div class="info-row">
    <span class="info-label">개발 인원</span>
    <span class="info-value">9명 (AI 2 / 백엔드 3 / 프론트엔드 2 / 디자인 2)</span>
  </div>
  <div class="info-row">
    <span class="info-label">담당 역할 - 백엔드 팀장</span>
    <span class="info-value">
      • 프롬프트 리라이팅·평가 핵심 도메인 설계 및 구현 <span class="highlight">(기여도 100%)</span><br>
      &nbsp;&nbsp;- Rewrite / Judge AI 서버 연동 구조 설계 및 책임 분리 (Runner 패턴 적용)<br>
      &nbsp;&nbsp;- WebClient 기반 비동기 통신 구조로 전환하여 응답 블로킹 문제 해결<br>
      &nbsp;&nbsp;- AI 응답 latency 측정 및 예외 처리 로직 설계<br>
      • Draft 기반 AI 결과 관리 모델 설계 <span class="highlight">(상태 모델링 구조 설계)</span><br>
      &nbsp;&nbsp;- AI 리라이팅 결과를 Draft 상태로 우선 영속화 후, 사용자 확정 시 Final로 연결<br>
      &nbsp;&nbsp;- status 컬럼 없이 연관관계 기반 상태 판단 구조 설계 (SSoT 관점 적용)<br>
      &nbsp;&nbsp;- Draft 결과 재사용 구조를 통해 라이브러리 기능 확장성 확보<br>
      • RESTful API 구조 설계 및 계층 분리<br>
      &nbsp;&nbsp;- Controller / Service / Repository 구조 명확화<br>
      &nbsp;&nbsp;- 요청/응답 스펙 정의 및 프론트엔드 협업 기준 수립<br>
      • 사용자 인증 기반 AI 기능 접근 제어 및 보안 흐름 설계<br>
    </span>
  </div>
</div>

<div class="info-container">
  <div class="info-title">🔒개발 환경</div>
  <div class="info-row">
    <span class="info-label">🚀 Stacks</span>
    <span class="info-value">Java 17, Spring Boot, MySQL, AWS EC2, WebClient</span>
  </div>
  <div class="info-row">
    <span class="info-label">🛠 Tools</span>
    <span class="info-value">IntelliJ IDEA, DataGrip, GitHub, Postman</span>
  </div>
  <div class="info-row">
    <span class="info-label">👥 Collaboration</span>
    <span class="info-value">Notion, GitHub, Figma, Slack</span>
  </div>
</div>

---

## 프로젝트 내용 자세히 보기
<img src="/_pages/Project/images/PromMate1.png">
<img src="/_pages/Project/images/PromMate2.png">
<img src="/_pages/Project/images/PromMate3.png">
<img src="/_pages/Project/images/PromMate4.png">
<img src="/_pages/Project/images/PromMate5.png">
<img src="/_pages/Project/images/PromMate6.png">
<img src="/_pages/Project/images/PromMate7.png">
<img src="/_pages/Project/images/PromMate8.png">
<img src="/_pages/Project/images/PromMate9.png">
<img src="/_pages/Project/images/PromMate10.png">
<img src="/_pages/Project/images/PromMate11.png">
<img src="/_pages/Project/images/PromMate12.png">
<img src="/_pages/Project/images/PromMate13.png">
<img src="/_pages/Project/images/PromMate14.png">
<img src="/_pages/Project/images/PromMate15.png">
<img src="/_pages/Project/images/PromMate16.png">
<img src="/_pages/Project/images/PromMate17.png">
---

