---
layout: category
title: "✨ Codehive 스터디 최종 활동 결과 페이지 제작"
permalink: /Study/codehive-details/final
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 최종 활동 정리본 내용을 기록했습니다.</span>



### 🗓️ 학습 주제

<span style="font-size:70%">
K-MOOC 강의를 통해 파이썬을 체계적으로 학습하고, 최종적으로 파이썬을 활용한 웹 서버를 제작할 수 있는 수준까지 실력을 끌어올리는 것이 투게더를 통해 이루고자 하는 학습 주제이다. 단순히 파이썬 기초 문법을 익히는 것에서 그치지 않고, 협업 및 실무에서 쓰일 수 있는 모듈과 Python Django를 함께 학습한다. 궁극적으로 학습한 내용을 기반으로, 공부한 내용을 정리할 수 있는 웹 페이지를 구현하는 것이 최종 목표이다.<br>  

##### <span style="color:yellow">Ⅰ. 강의 수강 </span><br>
대학 강좌 K-MOOC의 ‘파이썬 프로그래밍’ 강의를 활용해 파이썬의 전반적인 내용을 복습하고 학습한다. 기초 연산자부터 시작해 다양한 모듈과 라이브러리까지의 내용을 다룰 예정이다. 강의가 끝난 후에는 기재된 퀴즈를 푼다. 또한 팀원들과 학습 내용을 공유하고, 각자가 이해한 내용을 발표하며 2차 복습을 진행한다.<br>  


##### <span style="color:yellow">Ⅱ. 기반 다지기 </span><br>
강의 학습이 끝나면 습득한 학습 자료를 기반으로 백준(Baekjoon) 알고리즘 문제 풀이를 진행한다. 공통 문제와 개인 문제로, 총 두 개 이상의 문제를 매일 푸는 것을 원칙으로 한다. 개인 문제는 수업한 내용과 관련된 알고리즘 문제 중 본인의 수준에 맞는 문제를 선택하여 매일 하나씩 풀고 디스코드(discord)에 공유하는 것으로 한다. 모임에서 각자가 풀었던 문제와 코드를 공유하며, 팀원들끼리 질문을 주고받는 방식으로 추가 학습을 실시한다. 이때, 서로의 코드를 비교하여 공통점과 차이점을 분석하며, 본인만의 코딩 스타일을 찾고 보다 더 효율적인 문제 해결 방법을 배워본다.<br>


##### <span style="color:yellow"> Ⅲ. 심화 공부 </span><br>
이후 협업이나 실무에서 쓰이는 파이썬 관련 도구들을 심화 학습한다. 이를 통해 프로젝트 협업이나 실무 환경에서 활용할 수 있는 기술을 익힌다. 공부 방식은 다음과 같다.<br>  

- API와 HTML 개념 공부<br>
: 명품 웹 프로그래밍 책을 활용하여 웹 페이지를 제작하기 위한 최소한의 기능 익히기<br>

- Python Django Web Framework 공부<br>
: 생활코딩 opentutorial django를 활용하여 포트, 홈페이지, 생성 및 수정 기능 익히기<br>


##### <span style="color:yellow"> Ⅳ. 결과물 정리 </span><br>
Ⅰ~Ⅲ 단계 학습 과정에서 얻은 모든 자료를 데이터화 시킨다. 이 데이터 자료를 저장하고 이용할 수 있는 간단한 웹 페이지(Django)를 만들어본다. 학습한 모든 내용을 바탕으로 공부한 내용을 데이터로 만들어 저장할 수 있는 웹 페이지를 만드는 것이 최종 목표이다. <br>

</span>

---
### 📝 제작 페이지 - 홈페이지 (게시판)

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch1.png">  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch2.png">  

<span style="font-size:70%">
게시판에서 글 작성, 글 수정, 글 보기, 글 삭제, 글 검색이 가능하다.<br> 
‘글 작성’ 버튼을 누르면 글을 쓸 수 있는 칸이 나오고, 제출을 누르면 첫 번째 4번째 그림과 같이 카드로 글이 추가가 된다.<br> 
글 수정을 누르면 글 내역을 수정할 수 있고, 수정 완료를 눌러 수정 사항을 반영할 수 있다.<br> 
또한 글 삭제를 누르면 글 카드에서 글이 지워진다.<br> 
키워드를 입력하고 검색을 누르면 해당 키워드가 포함된 글이 목록으로 뜬다.<br>  
</span>



---

### 📝 제작 페이지 - 성과 가시화와 정리 업로드

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch3.png">    


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch4.png">  

<span style="font-size:70%">
성과 가시화 글을 누르면 성과 페이지로 이동이 된다.<br> 
스터디 활동하면서 얻은 팀의 성과를 표로 나타내었다.<br> 
정리 업로드 글을 누르면 정리 업로드 페이지로 이동이 된다.<br> 
여기서 + 버튼을 눌러 여태 디스코드에 업로드했던 학습 내용을 업로드할 수 있다.<br> 
뒤로가기 버튼을 누르면 게시판으로 이동이 된다.<br>  
</span>

---

### 📝 제작한 페이지 요약

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch5.png">  


---

### 📝 깃허브
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch6.png">    


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch7.png">  

<span style="font-size:70%">
깃허브에 올린 결과물은 클론하여 파일로 따로 첨부하였다. <br>  
</span>


---

#### 🔍 학습 목표 달성 여부


CodeHive의 학습 목표는 총 4가지였다. <br>    

<span style="font-size:70%">  
<span style="color:yellow">첫 번째</span><br> 
대학 강좌 K-MOOC의 ‘파이썬 프로그래밍’ 강의를 활용해 파이썬의 전반적인 내용을 복습하고 학습하기와 강의마다 기재된 퀴즈를 풀고 50점 이상의 점수를 받는 목표는 팀원 전원이 100% 달성하였다. 
K-MOOC를 가입하여 파이썬 프로그래밍 강의를 수강 신청하였으며, 계획한 주차에 맞게 모두 강의를 듣고 퀴즈 100점을 획득하였다.
해당 점수와 강의 수강 기록은 디스코드에서 인증하였고 그 증거를 주간학습보고서에 기재하였다. <br>  

  
<span style="color:yellow">두 번째</span> <br>
백준(Baekjoon) 알고리즘 문제 풀이하는 목표 역시 팀원 전원 100% 달성하였다. 
한 주마다 공통 문제 4개, 개인 문제 4개를 풀기로 계획하였고 총 8문제의 백준 알고리즘 문제를 풀이하였다.
또한 1주차부터 7주차까지 해당 주차 만남에서 본인이 푼 문제를 팀원에게 설명하고 다른 팀원의 개인 문제를 풀어보는 시간을 가졌다.<br>


<span style="color:yellow">세 번째</span> <br> 
각자가 이해한 python, API, HTML, Django 내용을 발표하며 2차 복습을 진행하는 목표 또한 팀원 전원 100% 달성하였다.
해당 주차 만남에서 강의를 듣고 본인이 직접 그 강의 내용을 팀원에게 설명하며 복습을 철저하게 시행하였다. <br>


<span style="color:yellow">네 번째</span> <br> 
데이터 자료를 저장하고 이용할 수 있는 간단한 웹 서버(Django) 제작 목표를 상당 부분 달성하였다.
피그마를 통해 어떻게 웹서버를 제작할 건지 계획을 세운 뒤 각자 역할을 분배하여 맡은 파트를 제작하였다.
깃허브를 통해 각자 제작한 부분을 결합하여 업로드를 하였다.<br>

</span>

---

### 🔍 스터디 활동 내용 활용 방안

<span style="font-size:70%">  
주기적으로 코딩 문제를 풀고 풀이법을 공유하면서 알고리즘과 문제 해결 능력을 향상시켰다.<br> 
이를 통해 코딩 테스트와 취업 준비에 대비할 수 있다.
또한, Django와 관련된 강의를 통해 웹 프로그래밍 지식을 쌓아 실제 프로젝트를 구현하는 데 활용할 수 있다.
이를 바탕으로 우리가 지금까지 했던 학습 활동을 한눈에 볼 수 있는 웹페이지를 팀원들과 함께 구현하며 협업 경험과 프로젝트 관리 능력을 키웠다.<br>   

이 웹페이지는 각자의 학습 성과를 체계적으로 정리하고 공유할 수 있는 도구로 활용할 수 있다. 
이를 기반으로 나중에 취업이나 대외 활동을 준비하기 위해 포트폴리오를 구성하거나, 학습 목표를 설정하는 데 도움을 줄 수 있다고 생각한다.
또한, 팀원들과 협업하여 웹사이트를 지속적으로 발전시킴으로써 개발 경험을 쌓을 수 있다.<br>
</span>


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
