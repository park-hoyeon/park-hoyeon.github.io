---
layout: category
title: "✨ Codeit Boost OT"
permalink: /Club/Club-details/OT
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - Codeit_Boost
  - Coding
  - Club
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  


안녕하세요. 소시지입니다.<br>
본 포스팅은 코드잇 부스트 동아리 첫 번째 활동 내용을 기록했습니다.


## Codeit Boost 중앙 OT (2024.09.25)
온라인 진행


## Codeit Boost 교내 OT (2024.09.29)

### 🗓️ 활동 내용

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/OT.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/OT2.png">  


---

### 🔍 What is Codeit Boost ?! 

[보러가기: Club / Codeit_Boost](https://park-hoyeon.github.io/Club/Club-details/What)  


<div style="text-align: right; margin-top: 30px;">
  <button onclick="scrollToTop()" style="
    padding: 10px 15x; 
    background-color: #FFEB46; 
    color: black; 
    border: 2px solid #FFEB46; 
    border-radius: 5px; 
    cursor: pointer; 
    font-size: 10px;">
    맨 위로 이동
  </button>
</div>

<script>
  // 맨 위로 이동하는 함수
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
