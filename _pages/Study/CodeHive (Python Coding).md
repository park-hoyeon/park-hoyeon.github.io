---
title: "✨ Study / CodeHive (Python Coding)"
layout: category
permalink: /Study/Codehive%20(Python%20Coding)/
author_profile: true
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-bottom: 30px;
}

.study-card {
  background: #2a2a2a;
  border-radius: 15px;
  padding: 20px;
  color: white;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.study-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: #3a3a3a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: white;
}

.card-date {
  font-size: 0.8em;
  color: #cccccc;
  margin-top: 10px;
}

.featured {
  border: 2px solid #ffd700;
}

.center-text {
  text-align: center;
  margin: 20px 0;
}

.highlight-link {
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #2a2a2a;
  color: #ffd700;
  text-decoration: none;
  border-radius: 10px;
  font-size: 16px;
}

.highlight-link:hover {
  background-color: #3a3a3a;
}

.star-text {
  color: #ffd700;
  font-size: 16px;
  margin: 20px 0;
}
</style>

{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}

<div class="center-text">
  <span>✨ 각 주차별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.</span>
</div>

<div class="center-text star-text">
  ⭐⭐⭐ <a href="/Study/codehive-details/final" class="highlight-link">최종 활동 정리본 보기</a> ⭐⭐⭐
</div>

<div class="cards-container">
  <a href="/Study/codehive-details/1week" class="study-card featured">
    <div class="card-icon">1️⃣</div>
    <div class="card-title">⭐ 1 Week</div>
    <div class="card-date">2024.09.23</div>
  </a>

  <a href="/Study/codehive-details/2week" class="study-card">
    <div class="card-icon">2️⃣</div>
    <div class="card-title">2 Week</div>
    <div class="card-date">2024.09.30</div>
  </a>

  <a href="/Study/codehive-details/3week" class="study-card">
    <div class="card-icon">3️⃣</div>
    <div class="card-title">3 Week</div>
    <div class="card-date">2024.10.07</div>
  </a>

  <a href="/Study/codehive-details/4week" class="study-card">
    <div class="card-icon">4️⃣</div>
    <div class="card-title">4 Week</div>
    <div class="card-date">2024.10.14</div>
  </a>

  <a href="/Study/codehive-details/5week" class="study-card">
    <div class="card-icon">5️⃣</div>
    <div class="card-title">5 Week</div>
    <div class="card-date">2024.10.28</div>
  </a>

  <a href="/Study/codehive-details/6week" class="study-card">
    <div class="card-icon">6️⃣</div>
    <div class="card-title">6 Week</div>
    <div class="card-date">2024.11.04</div>
  </a>

  <a href="/Study/codehive-details/7week" class="study-card featured">
    <div class="card-icon">7️⃣</div>
    <div class="card-title">⭐ 7 Week</div>
    <div class="card-date">2024.11.11</div>
  </a>

  <a href="/Study/codehive-details/8week" class="study-card">
    <div class="card-icon">8️⃣</div>
    <div class="card-title">8 Week</div>
    <div class="card-date">2024.11.18</div>
  </a>

  <a href="/Study/codehive-details/9week" class="study-card">
    <div class="card-icon">9️⃣</div>
    <div class="card-title">9 Week</div>
    <div class="card-date">2024.11.25</div>
  </a>

  <a href="/Study/codehive-details/10week" class="study-card">
    <div class="card-icon">🔟</div>
    <div class="card-title">10 Week</div>
    <div class="card-date">2024.12.02</div>
  </a>
</div>
