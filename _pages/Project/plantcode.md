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

fetchUser(ID)는 사용자 ID를 가져오는 함수이다.<br>
만약 데이터베이스에서 user를 찾지 못했다면 return을 이용해 더 이상 진행되지 못하도록 했다.<br>
로그인에 성공하면 세션에 사용자 정보를 저장한다.<br>
req.session.user에 아이디와 닉네임을 저장했다. <br>
따라서 이후 사용자가 서버에 요청을 보내면 사용자가 누구인지 식별 가능하며 로그인 상태를 유지할 수 있다!<br>


---   
### 아이디 찾기 코드

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.post('/find-id', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await fetchUserByEmail(email);

        if (!user) {
            return res.json({ success: false, message: "등록된 이메일이 없습니다." });
        }

        res.json({ success: true, message: "아이디를 찾았습니다.", ID: user.ID });
    } catch (error) {
        console.error('아이디 찾기 에러:', error);
        res.status(500).json({ success: false, message: "아이디 찾기 중 오류가 발생했습니다." });
    }
});
  </code></pre>
</div>

먼저 클라이언트가 email을 서버로 보내면 req.body에서 이메일 값을 추출하여 변수 email에 저장한다.<br>
그리고 fetchUserByEmail(email)을 이용해 사용자의 이메일을 가져온다.<br>
해당 이메일을 가진 사용자가 존재하면 user.ID를 클라이언트에 반환하도록 했다.<br>
**위의 코드와 비슷하게 비밀번호 찾기 기능을 구현했다!!!**

---

### 비밀번호 찾기 코드  

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.post('/find-password', async (req, res) => {
    const { ID, email } = req.body;

    try {
        const user = await fetchUserByIdAndEmail(ID, email);

        if (!user) {
            return res.json({ success: false, message: "아이디 또는 이메일이 일치하지 않습니다." });
        }

        // 새 비밀번호 생성 및 저장
        const newPassword = generateRandomPassword();
        const hashedPassword = await hashPassword(newPassword);
        await updateUserPassword(ID, hashedPassword);

        // 이메일로 새 비밀번호 발송
        await sendEmail(email, "비밀번호 재설정", `새 비밀번호: ${newPassword}`);
        res.json({ success: true, message: "새 비밀번호가 이메일로 발송되었습니다." });
    } catch (error) {
        console.error('비밀번호 찾기 에러:', error);
        res.status(500).json({ success: false, message: "비밀번호 찾기 중 오류가 발생했습니다." });
    }
});
  </code></pre>
</div>   


##### 새 비밀번호 생성 및 암호화

generateRandomPassword()는 새로운 임시 비밀번호를 생성하는 함수이다.<br>
hashPassword(newPassword)는 새 비밀번호를 암호화하는 비동기 함수이다.<br>
이 암호화된 값인 hashedPassword는 데이터베이스에 저장된다.

``` await updateUserPassword(ID, hashedPassword); ``` <br>
그리고 데이터베이스에서 해당 ID를 가진 사용자의 비밀번호를 새로 만든 암호화된 비밀번호로 업데이트 했다.

---

### 회원가입 코드   

ID가 존재하지 않는 신규 가입자들을 위한 회원가입 기능을 구현하였다.<br>
따라서 중복 ID가 발견되면, 가입이 되지 않고 "이미 존재하는 ID입니다."라는 메시지가 출력되도록 했다.   



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.post('/signup', async (req, res) => {
    const { ID, nickname, email, password, confirmPassword } = req.body;
    try {
        const exists = await fetchUser(ID);
        if (exists) {
            return res.json({ success: false, message: '이미 존재하는 ID입니다.' });
        }
        if (!ID || !nickname || !email || !password || !confirmPassword) {
            return res.json({ success: false, message: '모든 항목을 입력해주세요.' });
        }
        if (password !== confirmPassword) {
            return res.json({ success: false, message: '비밀번호가 일치하지 않습니다.' });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: '올바른 이메일 형식이 아닙니다.' });
        }
        const newUser = { ID, nickname, email, password, createdAt: new Date().toISOString() };
        await createUser(newUser);
        return res.json({ success: true, message: '회원가입이 완료되었습니다.' });
    } catch (error) {
        console.error('회원가입 에러:', error);
        return res.status(500).json({ success: false, message: '회원가입 처리 중 오류가 발생했습니다.' });
    }
});
  </code></pre>
</div>    

newUser 변수를 만들어 새로운 사용자 데이터를 담았다. <br>
그리고 ```createUser(newUser)```로 새로운 사용자의 정보를 데이터베이스에 저장했다.


---

여기부터!

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
