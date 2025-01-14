---
layout: category
title: "✨ 10 Week - Python Coding Study"
permalink: /Study/codehive-details/10week
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - 2024-python-coding-study
  - CodeHive
  - Python
  - Coding
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  



<span style="font-size:65%">안녕하세요. hoyeon입니다.<br>
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 10주차 학습 내용을 기록했습니다.</span>


## `CodeHive Study` 10주차 진행 (2024.12.02)

### 🗓️ 학습 주제

<span style="font-size:70%">1. 그동안 공부했던 데이터를 저장하고 이용할 수 있는 간단한 웹 서버(Django) 팀원 모두 함께 협업하여 제작<br></span>
<span style="font-size:70%">2. 게시판, 글 작성 기능, 글 수정 기능, 글 삭제 기능, 글 조회 기능 구현<br></span>
<span style="font-size:70%">3. 게시판 외에 팀 내에서 얻은 데이터들을 업로드 할 수 있는 공간 제작<br></span>


---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image10.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 최종 결과물 제작

[✨최종 활동본 보러 가기✨](https://park-hoyeon.github.io/Study/codehive-details/final)  


---
[돌아가기: 2024 하반기 Python Coding Study](https://park-hoyeon.github.io/Study/Codehive%20(Python%20Coding)/)  


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
