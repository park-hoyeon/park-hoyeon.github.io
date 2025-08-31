---
title: "SKT Fly Ai - 시각장애인을 위한 터치스크린 도우미"
layout: category
permalink: _pages/SKT/main-project/index
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

---

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
  <a href="/SKT/main-project/contents" class="button-item"><span>프로젝트 내용</span></a>
  <a href="/SKT/main-project/difficulties" class="button-item"><span>프로젝트 진행 중 겪은 어려움</span></a>
  <a href="/SKT/main-project/ai-modeling" class="button-item"><span>개발 코드</span></a>
  <a href="/SKT/main-project/reflection" class="button-item"><span>회고 및 개선점</span></a>
</div>

---

## 프로젝트 내용 자세히 보기

<img src="/_pages/SKT/main-project/images/슬라이드3.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드4.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드5.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드6.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드7.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드8.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드9.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드10.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드11.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드12.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드13.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드14.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드15.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드16.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드17.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드18.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드19.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드20.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드21.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드22.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드23.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드24.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드25.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드26.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드27.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드28.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드29.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드30.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드31.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드32.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드33.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드34.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드35.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드36.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드37.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드38.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드39.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드40.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드41.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드42.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드43.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드44.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드45.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드46.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드47.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드48.PNG">
<img src="/_pages/SKT/main-project/images/슬라이드49.PNG">
