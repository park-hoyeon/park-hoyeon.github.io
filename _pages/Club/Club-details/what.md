---
layout: category
title: "✨ What is Codeit Boost"
permalink: /Club/Club-details/What
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


## Codeit Boost 

### 📌 국내 최초 IT 부트캠프 동아리, 코드잇 부스트!

<div style="font-size:70%">
✅ 국내 최초 개발 교육 플랫폼 코드잇과 함께하는 국내 최초 IT 부트캠프 동아리입니다. <br>
✅ 전국 13개 대학이 연합한 동아리로, 교내 학우들 뿐 아니라 교외 학생들과 함께하는 프로젝트 경험이 가능합니다.<br>  
</div>  


---
### 🚀 코드잇 부스트 교육 과정

<div style="font-size:70%">
✅ 프론트엔드, 백엔드, 데이터 분석 총 3개의 트랙으로 이루어져 있습니다.<br>
✅ 백엔드 : KDC(JS 기초/ JS 중급) ➡️ Node.js / 데이터베이스 (SQL) / GIT ➡️ 교내 데모데이(토이 프로젝트) 
</div>  


---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/whatis.png">  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/whatis2.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/school.png">  

---
### 📌 코드잇 부스트 연간 행사 일정

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/2024.png">  

### 📌 덕성 코드잇 부스트 활동

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/content.png">  

#### 📝매주 과제 수행

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/homework.png">  


---




[돌아가기: Club / Codeit_Boost](https://park-hoyeon.github.io/Club/Codeit_Boost/)  


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

