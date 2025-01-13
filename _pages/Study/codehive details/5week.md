---
layout: category
title: "✨ 5 Week - Python Coding Study"
permalink: /Study/codehive-details/5week
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 5주차 학습 내용을 기록했습니다.</span>


## `CodeHive Study` 5주차 진행 (2024.10.28)

### 🗓️ 학습 주제

<span style="font-size:70%">1. API의 개념 공부<br></span>
<span style="font-size:70%">2. HTML 웹 프로그래밍 학습 <br></span>
<span style="font-size:70%">3. 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br></span>
<span style="font-size:70%">4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습</span>

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image05.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 HTML 학습 내용

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image05-1.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">

---
####  📝 학습 강좌 발표 내용
<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
<span style="color:yellow"><b> <!DOCTYPE html>:</b></span><br>
선언하는 이유<br>
: 지금 쓰고 있는 이 html이 HTML5 표준을 따른다고 명시하기 위해서이다.  <br>
html은 버전에 따라서 문서 해석법이 다르다.  

<hr>

<span style="color:yellow"><b> "<meta charset="utf-8">":</b></span><br>
메타 태그.<br> 
html 파일 인코딩을 알려주는 태그로 만약 존재하지 않다면 한글이나 특수 문자가 깨져서 출력될 수도 있다<br>  

<hr>

html 코드에서 엔터를 친다고 해서 글자들이 알아서 줄바꿈하지 않는다.<br>
줄바꿈해주려면 <br>을 활용해야 한다.<br> 
<p>를 쓰면 단락 처리가 된다.<br/>  

<hr>

수평선은 "<hr>"로 그을 수 있다.<br> 
이미지는 <img src=“../pa.png” width=“100” height=“150” alt=“pa 그림”>로 넣을 수 있다. <br>

<hr>

글박스는 "<input type="text" size="10" value="">" 등.<br/>  

<hr>

<span style="color:yellow"><b> API </b></span><br>
API를 뭉뚱그려 비유한다면, '식당 메뉴'라고 볼 수 있다.<br> 
코드를 짜고 url로 get 요청하면 개발자가 작성한 코드가 실행된다.<br> 
이때 url로 get을 요청하는 부분을 API로 볼 수 있는 것이다.<br>   


Application Programming Interface: 한 프로그램에서 다른 프로그램으로 데이터를 주고받기 위한 방법이다.<br> 
API는 요청 방식(method), 요청할 자료(endpoint), 자료 요청에 필요한 추가 정보로 구성된다.<br> 
API의 종류는 public, private, partner API가 있다.<br/></div>


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
