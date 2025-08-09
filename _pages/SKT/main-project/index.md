---
title: "✨ SKT Fly Ai - 시각장애인 맞춤 음식 필터링 AI 시스템"
layout: category
permalink: /SKT/main-project/
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
  <a href="/SKT/main-project/difficulties/" class="button-item"><span>프로젝트 진행 중 겪은 어려움</span></a>
  /*
  <a href="/SKT/main-project/ai-modeling/" class="button-item"><span>AI 모델링</span></a>
  <a href="/SKT/main-project/iot-tech/" class="button-item"><span>IoT 센서 구성 및 코드</span></a>
  <a href="/SKT/main-project/webapp/" class="button-item"><span>웹앱 개발 과정</span></a>
  <a href="/SKT/main-project/reflection/" class="button-item"><span>회고 및 개선점</span></a>
  */
</div>
