---
title: " [2025 상반기] 🧓🏻잔물결 - 요양보호사 구인-구직 매칭 플랫폼"
layout: category
permalink: /Project/blaybus/
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





<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/액티비티 포스터.png">  

2025 블레이버스 MVP 해커톤에 2월 9일부터 2월 20일까지 약 열흘 간 백엔드로 참여했다.
"요양보호사와 노인의 최적 매칭"을 통해 재가노인복지센터의 구인난을 해결하고 맞춤형 돌봄 서비스를 제공하는 매칭 플랫폼을 제작하는 것이 목표였다.
팀은 랜덤으로 배정 되었고, 그 결과 현재 개발 분야로 근무하고 계신 직장인들과 대학생 등 다양한 직종의 사람들과 협업할 기회를 가지게 되었다.
10일 간의 짧은 기간동안 mvp를 개발해보며 협업과 개발의 경험을 쌓을 수 있었다.
그리고 파이널데이 발표와 웹앱 시연을 통해 평가를 받았다. 평가 결과 기술 구현 1등 "테크인사이트상"을 수여하였다.<br>

먼저 프로젝트 


사실 10일이면 일반적인 해커톤보다 훨씬 기간이 긴 편이라고 한다. 처음으로 10일 간의 짧은 기간동안 MVP를 개발해보는 경험을 통해 협업과 개발 관련하여 많은 경험을 얻어갈 수 있었다.

추가로, 블레이버스 자체 툴을 사용하여 프로젝트 상황 및 일정관리를 진행하였다. 파이널데이 발표 때 이 툴로 팀별 총 기여시간 및 태스크 완료율 등의 통계를 내 팀워크를 평가하였는데, 우리 팀이 작업 완료율 및 완료율이 가장 높아 팀워크 상을 수여하였다.  <br>
  
  
먼저 프로젝트 개요는는 다음과 같다.<br>

---


<html>
<head>
<style>
.info-container {
  margin: 20px 0;
  padding: 20px;
  background: #2d333b;
  border-radius: 10px;
  border: 1px solid #444c56;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-title {
  font-size: 1.1em;
  color: #58a6ff;
  margin-bottom: 15px;
  border-bottom: 1px solid #444c56;
  padding-bottom: 8px;
}

.info-row {
  display: flex;
  margin: 8px 0;
  align-items: flex-start;
}

.info-label {
  min-width: 120px;
  color: #8b949e;
  font-weight: 500;
}

.info-value {
  color: #c9d1d9;
  flex: 1;
}

.highlight {
  color: #7ee787;
  font-weight: 500;
}

</style>
</head>
<body>

<div class="info-container">
  <div class="info-title">프로젝트 개요</div>
  <div class="info-row">
    <span class="info-label">개발 기간</span>
    <span class="info-value">2025.02.09 ~ 2025.02.20 (10일)</span>
  </div>
  <div class="info-row">
    <span class="info-label">플랫폼</span>
    <span class="info-value">Web</span>
  </div>
  <div class="info-row">
    <span class="info-label">개발 인원</span>
    <span class="info-value">9명 (PM1 / 디자인2 / 백엔드3 / 프론트엔드3)</span>
  </div>
  <div class="info-row">
    <span class="info-label">담당 역할 - 백엔드</span>
    <span class="info-value">
      • 로그인 및 회원 관리 <span class="highlight">(기여도 100%)</span><br>
      • 마이페이지 웹서버 구현 <span class="highlight">(기여도 100%)</span><br>
      • 서비스 기획 및 방향성 설정 <span class="highlight">(기여도 80%)</span>
    </span>
  </div>
</div>

<div class="info-container">
  <div class="info-title">🔒개발 환경</div>
  <div class="info-row">
    <span class="info-label">🚀 Stacks</span>
    <span class="info-value">HTML, CSS(SCSS), JavaScript, React.js, Node.js</span>
  </div>
  <div class="info-row">
    <span class="info-label">🛠 Tools</span>
    <span class="info-value">Figma, Git</span>
  </div>
  <div class="info-row">
    <span class="info-label">👥 Collaboration</span>
    <span class="info-value">GitHub, Notion, Discord, Slack </span>
  </div>
</div>

</body>
</html>

---
본격적인 프로젝트 작업에 들어가기에 앞서 팀원들과 프로젝트 작업 일정과 규칙을 조율하고 아래와 같은 소통 방식을 사용했다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 204311.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 204329.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 204341.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 204353.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 204404.png">  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 204426.png">    




---
### 웹페이지 디자인 수정

기존에 코드잇에서 제공했던 디자인과 요구사항 중에 몇 가지 내용을 변경하여 아래와 같은 디자인으로 새롭게 디자인했다.  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 160431.png"> 

구체적인 변경 내용은 다음과 같다. <br>



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 160915.png"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 160927.png"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 160944.png"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/스크린샷 2025-03-05 160957.png"> 




---

## API 명세서

<html>
<head>
<style>
.api-container {
  margin: 20px 0;
  padding: 20px;
  background: #2d333b;
  border-radius: 10px;
  border: 1px solid #444c56;
  overflow-x: auto;
}

.api-title {
  font-size: 1.2em;
  color: #58a6ff;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #444c56;
}

.api-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: #c9d1d9;
}

.api-table th {
  background: #22272e;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  color: #58a6ff;
  border-bottom: 2px solid #444c56;
}

.api-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #373e47;
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-table tr:hover {
  background: #343942;
}

.method {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
}

.get {
  background: #1f6feb33;
  color: #58a6ff;
}

.post {
  background: #23863633;
  color: #7ee787;
}

.put {
  background: #9e6a03aa;
  color: #f7c843;
}

.delete {
  background: #8b1d1daa;
  color: #ff7b72;
}

.section {
  color: #d2a8ff;
  font-weight: 500;
}

.url-path {
  font-family: monospace;
  color: #c9d1d9;
}

.param {
  color: #ffa657;
}
</style>
</head>
<body>

<div class="api-container">
  <div class="api-title"> 그룹 및 게시글 API 명세서</div>
  <table class="api-table">
    <thead>
      <tr>
        <th>섹션</th>
        <th>Method</th>
        <th>URL</th>
        <th>기능/설명</th>
      </tr>
    </thead>
    <tbody>
      <!-- 그룹 -->
      <tr>
        <td class="section">그룹</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/groups</td>
        <td>그룹 등록</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/groups</td>
        <td>그룹 목록 조회</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method put">PUT</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span></td>
        <td>그룹 수정</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method delete">DELETE</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span></td>
        <td>그룹 삭제</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span></td>
        <td>그룹 상세 정보 조회</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span>/verify-password</td>
        <td>그룹 조회 권한 확인</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span>/like</td>
        <td>그룹 공감하기</td>
      </tr>
      <tr>
        <td class="section">그룹</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span>/is-public</td>
        <td>그룹 공개 여부 확인</td>
      </tr>
      <!-- 게시글 -->
      <tr>
        <td class="section">게시글</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span>/posts</td>
        <td>게시글 등록</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/groups/<span class="param">{groupId}</span>/posts</td>
        <td>게시글 목록 조회</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method put">PUT</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span></td>
        <td>게시글 수정</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method delete">DELETE</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span></td>
        <td>게시글 삭제</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span></td>
        <td>게시글 상세 정보 조회</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span>/verify-password</td>
        <td>게시글 조회 권한 확인</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span>/like</td>
        <td>게시글 공감하기</td>
      </tr>
      <tr>
        <td class="section">게시글</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span>/is-public</td>
        <td>게시글 공개 여부 확인</td>
      </tr>
      <!-- 댓글 -->
      <tr>
        <td class="section">댓글</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span>/comments</td>
        <td>댓글 등록</td>
      </tr>
      <tr>
        <td class="section">댓글</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/api/posts/<span class="param">{postId}</span>/comments</td>
        <td>댓글 목록 조회</td>
      </tr>
      <tr>
        <td class="section">댓글</td>
        <td><span class="method put">PUT</span></td>
        <td class="url-path">/api/comments/<span class="param">{commentId}</span></td>
        <td>댓글 수정</td>
      </tr>
      <tr>
        <td class="section">댓글</td>
        <td><span class="method delete">DELETE</span></td>
        <td class="url-path">/api/comments/<span class="param">{commentId}</span></td>
        <td>댓글 삭제</td>
      </tr>
    </tbody>
  </table>
</div>

</body>
</html>


---

### 🌿 Userflow 


<html>
<head>
<style>
.info-container {
  margin: 20px 0;
  padding: 20px;
  background: #2d333b;
  border-radius: 10px;
  border: 1px solid #444c56;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-title {
  font-size: 1.1em;
  color: #58a6ff;
  margin-bottom: 15px;
  border-bottom: 1px solid #444c56;
  padding-bottom: 8px;
}

.info-row {
  display: flex;
  margin: 8px 0;
  align-items: flex-start;
}

.info-label {
  min-width: 120px;
  color: #8b949e;
  font-weight: 500;
}

.info-value {
  color: #c9d1d9;
  flex: 1;
}

.highlight {
  color: #7ee787;
  font-weight: 500;
}

</style>
</head>
<body>

<div class="info-container">
  <div class="info-title">역할분담</div>
  <div class="info-row">
    <span class="info-value">
      • 그룹 목록 페이지 <span class="highlight">(기여도 100%)</span><br>
      • 그룹 상세 페이지 <span class="highlight">(기여도 100%)</span><br>
      • 추억 상세 페이지 <span class="highlight">(기여도 100%)</span><br>
      • 공개 그룹 목록 페이지 <span class="highlight">(기여도 100%)</span><br>
      • 댓글 작성/수정/삭제 페이지 <span class="highlight">(기여도 100%)</span><br>
      • 메인페이지 <span class="highlight">(기여도 70%)</span><br>
      • 마이페이지 <span class="highlight">(기여도 60%)</span>
    </span>
  </div>
</div>



</body>
</html>


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/userflow.png">  






---

### ERD 다이어그램



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/조각집ERD.png">  



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
