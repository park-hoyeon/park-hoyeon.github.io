---
title: " [2025 상반기] 🪴식집사들 - 웹앱 반려식물 관리 및 진료 서비스"
layout: category
permalink: /Project/plantcode/
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





<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집2.png">  

먼저 웹사이트의 로그인 기능을 구현해보자!<br> 
로그인 코드를 작성하기에 앞서 쿠키와 세션 중 어떤 방식으로 로그인을 구현할 것인지 고민했다.

### 🍪쿠키

쿠키는 클라이언트 측에서 상태 정보를 저장하는 방식이다.
서버는 사용자의 웹 브라우저에 쿠키를 보내며 브라우저는 서버에서 보낸 쿠키를 저장하고 이후 요청과 함께 동일한 서버로 다시 전송할 수 있다. 즉 나의 정보에 관한 모든 것을 기억하기 위해서 데이터를 보관하는 것이다.


### 세션

세션은 쿠키를 기반으로 동작하지만, 정보를 서버 측에서 관리한다는 점에서 차이가 있다.
서버는 클라이언트에 Session ID값을 부여하고 정보는 서버에 저장한다.
이후 클라이언트의 요청에 따라 서버에서 Session ID를 조회하여 클라이언트 정보를 가져와 사용한다. <br>

#### 세션을 사용하여 로그인 기능을 구현하자!

세션은 비밀번호와 같은 인증 정보를 쿠키에 저장하지 않고 서버에 저장한다. 대신 쿠키에는 사용자 식별자인 session-id를 저장합니다.  이처럼 세션도 쿠키를 이용하지만 추정 불가능한 session-id를 주고받기 때문에 보안상 안전하다. <br>
따라서 노출되면 안 되는 중요한 사용자의 정보는 세션을 이용하기로 결정했다.

---   




### express-session 미들웨어 

세션 관리용 미들웨어이다.<br>
특정 사용자를 위한 데이터를 저장해둘 때 유용하게 쓰인다.<br>
세션은 사용자별로 req.session 객체 안에 유지된다.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // 개발 환경에서 HTTPS가 아닌 경우
        maxAge: 1000 * 60 * 60 // 1시간 동안 세션 유지
    }
}));
  </code></pre>
</div>

먼저 세션을 암호화하기 위한 secret_key를 가져왔다. 그리고 사용자의 세션 데이터가 변경되지 않은 경우에 서버는 세션을 다시 저장하지 않도록 설정하였다. 또한 브라우저가 불필요한 빈 세션 쿠키를 생성하는 것을 방지하기 위해 saveUninitialized를 false로 해서, 실제 세션 데이터가 설정되기 전까지는 세션을 생성하지 못하도록 하였다.<br>
secure값이 true일 경우에는 HTTPS 연결에서만 쿠키가 전송된다. 그러나 나는 개발 환경에서 HTTPS를 사용하지 않을 수 있다고 생각해서 쿠키의 설정값으로 secure를 false로 했다.<br>   


**개발이 완료된 후에 배포 환경에서는 secure를 true로 변경할 예정이다!!!!**



---   



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.post('/login', async (req, res) => {
    const { ID, password } = req.body;
    try {
        const user = await fetchUser(ID);
        if (!user) {
            return res.json({ success: false, message: "존재하지 않는 아이디입니다." });
        }
        if (password !== user.password) {
            return res.json({ success: false, message: "비밀번호가 틀렸습니다." });
        }

        // 세션을 이용하여 로그인 상태 저장
        req.session.user = { 
            ID: user.ID, 
            nickname: user.nickname 
        };

        // 출석 기록
        const attendanceRecorded = await recordAttendance(user.ID);
        if (attendanceRecorded) {
            console.log(`${user.ID}님의 출석이 기록되었습니다.`);
        } else {
            console.log(`${user.ID}님은 이미 오늘 출석했습니다.`);
        }

        res.json({ success: true, message: "로그인 성공" });
    } catch (error) {
        console.error('로그인 에러:', error);
        res.status(500).json({ success: false, message: "로그인 처리 중 오류가 발생했습니다." });
    }
});

  </code></pre>
</div>

fetchUser(ID)는 사용자 ID를 가져오는 함수이다.
만약 데이터베이스에서 user를 찾지 못했다면 return을 이용해 더 이상 진행되지 못하도록 했다.
로그인에 성공하면 세션에 사용자 정보를 저장한다.
req.session.user에 아이디와 닉네임을 저장했다. 
따라서 이후 사용자가 서버에 요청을 보내면 사용자가 누구인지 식별 가능하며 로그인 상태를 유지할 수 있다!


---

여기부터.




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
    <span class="info-value">2025.01 ~ 2025.02 (2개월)</span>
  </div>
  <div class="info-row">
    <span class="info-label">플랫폼</span>
    <span class="info-value">Web</span>
  </div>
  <div class="info-row">
    <span class="info-label">개발 인원</span>
    <span class="info-value">3명 (백엔드2 / 프론트엔드1)</span>
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
    <span class="info-label">언어</span>
    <span class="info-value">JavaScript (ES6+)</span>
  </div>
  <div class="info-row">
    <span class="info-label">서버</span>
    <span class="info-value">Node.js (v16+)</span>
  </div>
  <div class="info-row">
    <span class="info-label">프레임워크</span>
    <span class="info-value">Express.js</span>
  </div>
  <div class="info-row">
    <span class="info-label">DB</span>
    <span class="info-value">SQLite (각 파일 기반 DB)</span>
  </div>
  <div class="info-row">
    <span class="info-label">IDE</span>
    <span class="info-value">Visual Studio Code</span>
  </div>
  <div class="info-row">
    <span class="info-label">라이브러리</span>
    <span class="info-value">cors, express-session, sqlite3, pug</span>
  </div>
</div>

</body>
</html>

---

## API 명세서

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  white-space: nowrap;  /* 추가: 단어 줄바꿈 방지 */
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
}
.get {
  background: #1f6feb33;
  color: #58a6ff;
}
.post {
  background: #23863633;
  color: #7ee787;
}
.section {
  color: #d2a8ff;
  font-weight: 500;
}

/* 모바일 환경을 위한 추가 스타일 */
@media screen and (max-width: 768px) {
  .api-container {
    padding: 10px;
  }
  
  .api-table {
    font-size: 0.9em;
  }
  
  .api-table td, 
  .api-table th {
    padding: 8px 10px;
  }
}
</style>
</head>
<body>
<div class="api-container">
  <div class="api-title">📝 API 명세서</div>
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
      <tr>
        <td class="section">로그인</td>
        <td><span class="method get">GET</span></td>
        <td>/</td>
        <td>기본 로그인 화면</td>
      </tr>
      <tr>
        <td class="section">로그인</td>
        <td><span class="method post">POST</span></td>
        <td>/signup</td>
        <td>회원가입</td>
      </tr>
      <tr>
        <td class="section">로그인</td>
        <td><span class="method post">POST</span></td>
        <td>/login</td>
        <td>아이디,비번 입력</td>
      </tr>
      <tr>
        <td class="section">로그인</td>
        <td><span class="method post">POST</span></td>
        <td>/IDfind</td>
        <td>아이디 찾기</td>
      </tr>
      <tr>
        <td class="section">로그인</td>
        <td><span class="method post">POST</span></td>
        <td>/pwfind</td>
        <td>비밀번호 찾기</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/mypage</td>
        <td>기본 정보 조회/메인 화면</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/diary</td>
        <td>내가 쓴 글 목록 조회</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/diary/:id</td>
        <td>내가 쓴 특정 글 상세 조회</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/scraps</td>
        <td>스크랩한 글 목록 조회</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/scraps/:id</td>
        <td>스크랩한 글 상세 조회</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/comment</td>
        <td>내가 쓴 댓글 목록 조회</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method get">GET</span></td>
        <td>/comment/:id</td>
        <td>내가 쓴 댓글 상세 조회</td>
      </tr>
      <tr>
        <td class="section">마이페이지</td>
        <td><span class="method post">POST</span></td>
        <td>/write</td>
        <td>글 작성</td>
      </tr>
    </tbody>
  </table>
</div>
</body>
</html>

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
  <div class="api-title">🌐 커뮤니티 API 명세서</div>
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
      <tr>
        <td class="section">홈페이지</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/plantowner</td>
        <td>메인 페이지</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/plantowner/community/<span class="param">:boardId</span></td>
        <td>자유게시판으로 이동</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/plantowner/community/<span class="param">:boardId</span>/board?page=<span class="param">:n</span></td>
        <td>페이지 이동</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/plantowner/community/<span class="param">:boardId</span>/<span class="param">:postId</span></td>
        <td>게시글 열람</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/plantowner/community/serch?query=<span class="param">:keyword</span></td>
        <td>게시글 검색</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method get">GET</span></td>
        <td class="url-path">/plantowner/community/post/draft/<span class="param">:draftId</span></td>
        <td>임시 저장글 불러오기</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/plantowner/community/<span class="param">:boardId</span>/write</td>
        <td>새 글 작성</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method post">POST</span></td>
        <td class="url-path">/plantowner/community/<span class="param">:boardId</span>/<span class="param">:postId</span>/scrap</td>
        <td>스크랩 저장/삭제</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method put">PUT</span></td>
        <td class="url-path">/plantowner/community/edit/<span class="param">:postId</span></td>
        <td>게시글 수정</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method put">PUT</span></td>
        <td class="url-path">/plantowner/community/post/draft/<span class="param">:draftId</span></td>
        <td>임시 저장글 저장</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method delete">DELETE</span></td>
        <td class="url-path">/plantowner/community/post/<span class="param">:postId</span></td>
        <td>게시글 삭제</td>
      </tr>
      <tr>
        <td class="section">커뮤니티</td>
        <td><span class="method delete">DELETE</span></td>
        <td class="url-path">/plantowner/community/<span class="param">:boardId</span>/<span class="param">:postId</span>/comment/<span class="param">:commentId</span></td>
        <td>댓글 삭제</td>
      </tr>
    </tbody>
  </table>
</div>

</body>
</html>


---

### 🌿 식집사들 페이지별 기능 분석

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/기능1.png">  
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/기능2.png">  



---






---


### 웹 페이지 디자인 기획

##### 홈페이지
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집1.png">  

챗봇 단어를 클릭하면 식물 질병 진단 챗봇으로 이어지며, 현재 기분에 해당하는 단어를 클릭하면 식물과의 대화 페이지로 이동한다.

<br>

---
##### 로그인 / 회원가입 / 비밀번호 & 아이디 찾기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집2.png">  



---

##### 커뮤니티

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집3.png">  

추천글: 글을 올린 시점부터 일주일 간 추천글 후보에 들어갈 수 있다.<br>

공감 5개 이상이면 추천글에 등록<br>
- 최대 3개 글만 추천 글
- 더 높은 공감 수가 추천글에 등록되면 갱신
- 동일하다면 더 최신 글로 갱신
- 추천글에 최장 3일간만 있을 수 있다.


---

##### 글 보기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집4.png">  

글쓴이일 경우 수정과 삭제 버튼이 추가로 보이며, 댓글 작성자일 경우 자신이 쓴 댓글에만 삭제 버튼이 보인다.<br>
공감 버튼을 클릭하면 하트가 붉게 칠해지고 공감 수가 1 올라간다.<br>
다시 한 번 누르면 최소가 가능하다.<br>
공유 버튼을 누르면 해당 글의 링크가 복사된다.<br>
댓글을 쓰고 "댓글 쓰기" 버튼을 누르면 쓴 댓글이 추가된다.<br>
이전과 다음 버튼을 누르면 해당 글 번호 -1, 번호 +1의 글로 이동한다.<br>
신고를 누르면 브라우저 내 경고창(alert)이 뜨고, 취소 버튼을 누르면 취소된다.<br>
-> 직접 운영하게 될 때에는 사유를 받아야 하며, 운영진이 직접 확인할 수 있도록 추가 구현이 더 필요하다!  


---

##### 마이페이지

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집5.png">  

마이페이지 기본 화면이다. 왼쪽 섹션에는 사용자 정보와 커뮤니티, 출석을 확인할 수 있다.<br>
보관함에는 과거에 키웠던 식물 목록이 뜬다.<br>
식물 사진 아래에는 글을 등록했던 날짜도 같이 표기된다.<br>
왼쪽 커뮤니티 섹션의 내가 쓴 글 메뉴를 클릭하면 다음과 같이 현재 선택한 메뉴에 음영이 생긴다.<br>
오른쪽 섹션에는 내가 쓴 글, 내가 쓴 댓글, 스크랩한 글 탭이 위에 뜨며, 마찬가지로 현재 선택한 탭 메뉴 글씨 색이 바뀐다.<br>
탭 메뉴로 쉽게 이동 가능하다.<br>
체크 박스를 선택해서 글을 삭제할 수 있고 글쓰기 버튼을 누르면 커뮤니티 글 작성 페이지로 바로 넘어가도록 설정했다.



---
##### 챗봇 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Project/images/식집사 사진 편집6.png">  






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
