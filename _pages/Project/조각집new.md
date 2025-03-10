---
title: " [2025 상반기] 💌조각집 - 기억 저장 및 공유 서비스 웹페이지 제작"
layout: category
permalink: /Project/조각집new/
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





<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/기억저장.png">  

코드잇부스트 동아리의 마지막 활동으로 ```부스트 데모데이```에 참여하게 되었다.
이번 프로젝트의 <조각집>은 추억을 저장하고 공유할 수 있는 서비스이다.
코드잇부스트에서는 개발에만 집중할 수 있도록 디자인 시안을 제공해줬다.
따라서 이번 프로젝트에서는 제시된 모든 기능 요구사항을 충족하기 위하여 백엔드 개발에 집중하였다.<br>   
  
  
먼저 프로젝트 개요는 다음과 같다.<br>

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
    <span class="info-value">2025.02.04 ~ 2025.02.22 (2주)</span>
  </div>
  <div class="info-row">
    <span class="info-label">플랫폼</span>
    <span class="info-value">Web</span>
  </div>
  <div class="info-row">
    <span class="info-label">개발 인원</span>
    <span class="info-value">7명 (백엔드4 / 프론트엔드3)</span>
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

### 수상

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/IMG_7499.jpg">  


---

### 회고

API 키 설정과 **로컬 개발 환경**에서 ‘**서버 테스트**’를 진행하는 데 여러 어려움이 있었다. 특히 환경 변수를 설정하고 로컬과 배포 서버 간의 차이점을 이해하는 데 다소 시간이 걸렸다. <br>  

그리고 Prisma와 데이터베이스 스키마 관리에서도 복잡한 상황을 겪었다.
직접 SQL 명령어로 데이터베이스 컬럼을 추가하게 되면서 Prisma 스키마와 실제 데이터베이스 구조가 일치하지 않는다는 문제가 발생했다. 이로 인해 팀원들과의 데이터베이스 migration 과정에서 충돌이 생다. <br>  

따라서 먼저 .env 파일을 통해 환경 변수를 관리하고, Postman을 활용해서 각각의 API 를 단계별로 검증하는 과정을 거쳤다.

그리고 팀원들과 계속적으로 소통하면서, DB 스키마 관리에서 발생한 문제를 해결했다. 데이터베이스 스키마와 코드 간의 일관성을 유지했고, 팀 전체가 동일한 데이터베이스 상태를 공유할 수 있도록 변경사항이 있을 때마다 공지를 하는 등 소통 횟수를 늘려나갔다.<br>

직접 SQL 명령어로 DB를 변경하면서 발생한 스키마 불일치 문제를 해결하기 위해서는 Prisma의 마이그레이션 도구를 활용했다. 우선 로컬 환경에서 발생하는 문제를 해결해야 했고, 그 후에는 서버에서 발생할 수 있는 오류를 줄여나갔다.<br>


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
