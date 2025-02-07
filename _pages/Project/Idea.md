---
title: " [2024 하반기] 🪴식집사들 프로젝트"
layout: category
permalink: /Project/plant/
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

### 🌿 식집사들 프로젝트 주제 선정


식물 식별, 질병 진단 및 정밀 농업을 포함한 식물 과학에서 AI의 활용과 이미지 인식 기술과 결합된 기계 학습 알고리즘은 빠르고 정확한 식물 종 식별을 가능하게 하여 생태 연구와 생물 다양성 보존을 발전시킨다.
AI 기술은 식물 특성의 측정 및 분석을 자동화하여 식물 성장 및 적응 메커니즘에 대한 더 
깊은 이해를 제공하고 있다. 식물의 건강과 성장에 대한 실시간 모니터링은 혁신적인 연구와 개선된 작물 관리 관행을 위한 새로운 길을 열어준다<br>  

### <span style="color:#FFBF00">Ⅰ. 프로젝트 배경 및 목표 </span><br>

현대 사회에서 반려식물은 실내 공기 질을 개선하고, 심리적 안정감을 주는 등 긍정적인 
효과로 인기를 얻고 있다. 그러나 식물 관리에 대한 전문 지식이 부족하거나, 일상에서 식
물의 건강 상태를 꾸준히 점검하기 어렵다는 문제가 있다​ . 따라서 AI 기반의 식물 관리 시
스템은 초보자도 쉽게 반려식물을 돌볼 수 있도록 도움을 제공하며, 스마트 농업과 스마트
홈 트렌드와 결합하여 농업 분야로의 ai확산이 빠르게 발전하고 있다.<br>
따라서 본 프로젝트는 반려식물 관리에 적용되는 기술을 체계적으로 분석하는 것을 목표로 한다. 이를 통해 식물 관리 시스템을 이용하여 식물 상태를 파악하고 관리할 수 있는 웹 사이트를 제작하는 것이 이 프로젝트의 목표이다.<br>


### <span style="color:#FFBF00">Ⅱ. 식물 시스템 연구자료 정리하기 </span><br>

#### 🪴 이동식 인공지능 화분 및 통합 애플리케이션

가정에서도 쉽게 사용할 수 있도록 소형화된 인공지능 화분은 온습도, 조도, 물 부족 등을 
실시간으로 감지하고, 사용자가 원격으로 식물에 물을 줄 수 있도록 설계되었다. 해당 화분은 
아두이노와 연동된 모터와 펌프, 무선통신 기능을 통해 스마트폰 애플리케이션으로 제어 가능
하다<br>

##### 자세한 연구 내용<br>
: 화분 구성 센서 알고리즘과 웹서버를 통해 아두이노에 원격으로 명령 제어를 내리는 어플리케이션을 화분과 이을 
수 있다. 이 아두이노를 기반으로 인공지능 화분이 구현된다. 인공지능 화분에서는 조도 센서, 온습도 통합 센서, 
물체감지센서가 연동되고 이 센서를 통해 이동을 위한 모터, 물주기 펌프가 구동된다.이때 물주기 펌프를 구동하는 
알고리즘은 온습도 통합 센서와 연관되었고 이 데이터값은 웹서버를 통해 실시간으로 어플리케이션에 전송된다. 식물에 물이 필요하면 물주기 펌프를 원격으로 제어하여 식물에 물을 줄 수 있다. 인공지능 화분과 어플리케이션 
간 무선 통신은 웹서버로 통신하도록 구성하였는데, 이는 Apache 서버와 Mysql을 연동하여 구현했다

<br>




#### <span style="color:yellow"> <식집사들> 웹 페이지 디자인 기획 </span><br>







<br>


---
### 📝 제작 페이지 - 홈페이지 (게시판)

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch1.png">  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch2.png">  


게시판에서 글 작성, 글 수정, 글 보기, 글 삭제, 글 검색이 가능하다.<br> 
‘글 작성’ 버튼을 누르면 글을 쓸 수 있는 칸이 나오고, 제출을 누르면 첫 번째 4번째 그림과 같이 카드로 글이 추가가 된다.<br> 
글 수정을 누르면 글 내역을 수정할 수 있고, 수정 완료를 눌러 수정 사항을 반영할 수 있다.<br> 
또한 글 삭제를 누르면 글 카드에서 글이 지워진다.<br> 
키워드를 입력하고 검색을 누르면 해당 키워드가 포함된 글이 목록으로 뜬다.<br>  




---

### 📝 제작 페이지 - 성과 가시화와 정리 업로드

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch3.png">    


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch4.png">  


성과 가시화 글을 누르면 성과 페이지로 이동이 된다.<br> 
스터디 활동하면서 얻은 팀의 성과를 표로 나타내었다.<br> 
정리 업로드 글을 누르면 정리 업로드 페이지로 이동이 된다.<br> 
여기서 + 버튼을 눌러 여태 디스코드에 업로드했던 학습 내용을 업로드할 수 있다.<br> 
뒤로가기 버튼을 누르면 게시판으로 이동이 된다.<br>  


---

### 📝 제작한 페이지 요약

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch5.png">  


---

### 📝 깃허브
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch6.png">    


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ch7.png">  


깃허브에 올린 결과물은 클론하여 파일로 따로 첨부하였다. <br>  



---

#### 🔍 학습 목표 달성 여부


CodeHive의 학습 목표는 총 4가지였다. <br>    


<span style="color:yellow">첫 번째</span><br> 
대학 강좌 K-MOOC의 ‘파이썬 프로그래밍’ 강의를 활용해 파이썬의 전반적인 내용을 복습하고 학습하기와 강의마다 기재된 퀴즈를 풀고 50점 이상의 점수를 받는 목표는 팀원 전원이 100% 달성하였다. 
K-MOOC를 가입하여 파이썬 프로그래밍 강의를 수강 신청하였으며, 계획한 주차에 맞게 모두 강의를 듣고 퀴즈 100점을 획득하였다.
해당 점수와 강의 수강 기록은 디스코드에서 인증하였고 그 증거를 주간학습보고서에 기재하였다. <br>  

  
<span style="color:yellow">두 번째</span> <br>

백준(Baekjoon) 알고리즘 문제 풀이하는 목표 역시 팀원 전원 100% 달성하였다. 
한 주마다 공통 문제 4개, 개인 문제 4개를 풀기로 계획하였고 총 8문제의 백준 알고리즘 문제를 풀이하였다.
또한 1주차부터 7주차까지 해당 주차 만남에서 본인이 푼 문제를 팀원에게 설명하고 다른 팀원의 개인 문제를 풀어보는 시간을 가졌다. <br>


<span style="color:yellow">세 번째</span> <br> 

각자가 이해한 python, API, HTML, Django 내용을 발표하며 2차 복습을 진행하는 목표 또한 팀원 전원 100% 달성하였다.
해당 주차 만남에서 강의를 듣고 본인이 직접 그 강의 내용을 팀원에게 설명하며 복습을 철저하게 시행하였다. <br>


<span style="color:yellow">네 번째</span> <br> 

데이터 자료를 저장하고 이용할 수 있는 간단한 웹 서버(Django) 제작 목표를 상당 부분 달성하였다.
피그마를 통해 어떻게 웹서버를 제작할 건지 계획을 세운 뒤 각자 역할을 분배하여 맡은 파트를 제작하였다.
깃허브를 통해 각자 제작한 부분을 결합하여 업로드를 하였다. <br>



---

### 🔍 스터디 활동 내용 활용 방안


주기적으로 코딩 문제를 풀고 풀이법을 공유하면서 알고리즘과 문제 해결 능력을 향상시켰다.<br> 
이를 통해 코딩 테스트와 취업 준비에 대비할 수 있다.
또한, Django와 관련된 강의를 통해 웹 프로그래밍 지식을 쌓아 실제 프로젝트를 구현하는 데 활용할 수 있다.
이를 바탕으로 우리가 지금까지 했던 학습 활동을 한눈에 볼 수 있는 웹페이지를 팀원들과 함께 구현하며 협업 경험과 프로젝트 관리 능력을 키웠다.<br>   


이 웹페이지는 각자의 학습 성과를 체계적으로 정리하고 공유할 수 있는 도구로 활용할 수 있다. 
이를 기반으로 나중에 취업이나 대외 활동을 준비하기 위해 포트폴리오를 구성하거나, 학습 목표를 설정하는 데 도움을 줄 수 있다고 생각한다.
또한, 팀원들과 협업하여 웹사이트를 지속적으로 발전시킴으로써 개발 경험을 쌓을 수 있다.<br>



---


 


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
