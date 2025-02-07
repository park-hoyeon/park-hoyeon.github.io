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

### <span style="color:#F2F5A9">Ⅰ. 프로젝트 배경 및 목표 </span><br>

현대 사회에서 반려식물은 실내 공기 질을 개선하고, 심리적 안정감을 주는 등 긍정적인 
효과로 인기를 얻고 있다. 그러나 식물 관리에 대한 전문 지식이 부족하거나, 일상에서 식
물의 건강 상태를 꾸준히 점검하기 어렵다는 문제가 있다​ . 따라서 AI 기반의 식물 관리 시
스템은 초보자도 쉽게 반려식물을 돌볼 수 있도록 도움을 제공하며, 스마트 농업과 스마트
홈 트렌드와 결합하여 농업 분야로의 ai확산이 빠르게 발전하고 있다.<br>
따라서 본 프로젝트는 반려식물 관리에 적용되는 기술을 체계적으로 분석하는 것을 목표로 한다. 이를 통해 식물 관리 시스템을 이용하여 식물 상태를 파악하고 관리할 수 있는 웹 사이트를 제작하는 것이 이 프로젝트의 목표이다.<br>


### <span style="color:#F2F5A9">Ⅱ. 식물 시스템 연구자료 정리하기 </span><br>

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

---


#### <span style="color:#F2F5A9"> <식집사들> 웹 페이지 디자인 기획<br>

##### 홈페이지
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식1.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식2.png"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식3.png">  

챗봇 단어를 클릭하면 식물 질병 진단 챗봇으로 이어지며, 현재 기분에 해당하는 단어를 클릭하면 식물과의 대화 페이지로 이동한다.

<br>

---
##### 로그인

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식4.png" width="500" height="auto"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식5.png" width="500" height="auto"> 


---

##### 회원가입

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식6.png" width="500" height="auto"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식7.png" width="500" height="auto"> 


---

##### 비밀번호 찾기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식8.png" width="500" height="auto"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식9.png" width="500" height="auto"> 


---

##### 아이디 찾기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식10.png" width="500" height="auto"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식11.png" width="500" height="auto"> 

---

##### 커뮤니티

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식12.png" width="300" height="auto"> 

추천글: 글을 올린 시점부터 일주일 간 추천글 후보에 들어갈 수 있다.<br>

공감 5개 이상이면 추천글에 등록<br>
- 최대 3개 글만 추천 글
- 더 높은 공감 수가 추천글에 등록되면 갱신
- 동일하다면 더 최신 글로 갱신
- 추천글에 최장 3일간만 있을 수 있다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식13.png" width="300" height="auto"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식14.png" width="300" height="auto"> 

---

##### 글 보기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식15.png" width="300" height="auto"> 

글쓴이일 경우 수정과 삭제 버튼이 추가로 보이며, 댓글 작성자일 경우 자신이 쓴 댓글에만 삭제 버튼이 보인다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식16.png" width="300" height="auto"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식17.png" width="300" height="auto"> 

공감 버튼을 클릭하면 하트가 붉게 칠해지고 공감 수가 1 올라간다.<br>
다시 한 번 누르면 최소가 가능하다.<br>
공유 버튼을 누르면 해당 글의 링크가 복사된다.<br>
댓글을 쓰고 "댓글 쓰기" 버튼을 누르면 쓴 댓글이 추가된다.<br>
이전과 다음 버튼을 누르면 해당 글 번호 -1, 번호 +1의 글로 이동한다.<br>
신고를 누르면 브라우저 내 경고창(alert)이 뜨고, 취소 버튼을 누르면 취소된다.<br>
-> 직접 운영하게 될 때에는 사유를 받아야 하며, 운영진이 직접 확인할 수 있도록 추가 구현이 더 필요하다!  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식18.png"> 


---

##### 마이페이지

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식19.png" width="500" height="auto"> 

마이페이지 기본 화면이다. 왼쪽 섹션에는 사용자 정보와 커뮤니티, 출석을 확인할 수 있다.

---
##### 마이페이지 - 보관함

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식20.png" width="500" height="auto"> 

보관함에는 과거에 키웠던 식물 목록이 뜬다.<br>
식물 사진 아래에는 글을 등록했던 날짜도 같이 표기된다.

---
##### 마이페이지 - 내가 쓴 글

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식21.png" width="500" height="auto">

왼쪽 커뮤니티 섹션의 내가 쓴 글 메뉴를 클릭하면 다음과 같이 현재 선택한 메뉴에 음영이 생긴다.<br>
오른쪽 섹션에는 내가 쓴 글, 내가 쓴 댓글, 스크랩한 글 탭이 위에 뜨며, 마찬가지로 현재 선택한 탭 메뉴 글씨 색이 바뀐다.<br>
탭 메뉴로 쉽게 이동 가능하다.<br>
체크 박스를 선택해서 글을 삭제할 수 있고 글쓰기 버튼을 누르면 커뮤니티 글 작성 페이지로 바로 넘어가도록 설정했다.

---
##### 마이페이지 - 보관함 상세보기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식22.png" width="500" height="auto">


---
##### 챗봇 - 채팅 시작

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식23.png" width="500" height="auto">



##### 챗봇 - 식물 질병 진단

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식24.png" width="500" height="auto">

##### 챗봇 - 식물과의 대화

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식25.png" width="500" height="auto">


---

📝 [API 명세서 작성 & 페이지 기능 분석 보러가기](https://park-hoyeon.github.io/Project/plant/API) 

💻 [백엔드 코드 구현 보러가기](https://park-hoyeon.github.io/Project/plant/code) 

  




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
