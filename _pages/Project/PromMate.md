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

