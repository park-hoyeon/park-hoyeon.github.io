---
layout: category
title: "✨ 3 Week - Codeit Boost BE Study"
permalink: /Study/codeit-details/3week
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


안녕하세요. 소시지입니다.<br>
본 포스팅은 <2024.12.26 ~ 2025.01.23> 기간의 Node.js 백엔드 스터디 3주차 학습 내용을 기록했습니다.


## Codeit Boost 백앤드 스터디 3주차 진행 (2025.01.09)

### 🗓️ 학습 주제


1. 줌 클론코딩 - 노마드 코더 <Nomad Coders> 강의 수강<br>
2. 인프런 - Node.js를 이용해 웹 애플리케이션 만들기 강의 수강<br>
3. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
4. 간단한 발표 및 기록<br>
 



---   



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/BEweek3.png">



---
### 📝 BE 스터디 내용

🔍 server.js 코드

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function handleConnenction(socket) {
    console.log(socket)
} 

wss.on("connection", handleConnenction)

server.listen(3000, handleListen);
  </code></pre>
</div>

Node.js의 기본 HTTP 모듈을 설정하고, WebSocket 서버를 만들기 위한 모듈을 입력했다.<br> 그리고 웹 서버를 쉽게 만들 수 있도록 돕는 라이브러리 express를 입력하였다.<br>
`/` 경로로 들어오는 GET 요청에 대해 `home.pug` 파일을 렌더링하여 클라이언트에게 응답을 보낸다.<br> 그리고 다른 경로로 들어오는 요청에 대해 `/`로 리다이렉트 하여 어떤 경로를 요청하도라도 홈페이지(/)로 보내지게 설정한다. <br> 


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const wss = new WebSocket.Server({ server });
  </code></pre>
</div>


server 객체를 인수로 넘겨서 WebSocket 서버가 기존의 HTTP 서버와 연동되도록 한다.<br>

##### 🔍 정리


클라이언트가 브라우저에서 http://localhost:3000으로 접속하면, Express 앱이 home.pug 파일을 렌더링하여 웹 페이지를 클라이언트에 응답한다.<br> 그 외의 URL을 요청하면, /로 리다이렉트된다.<br>
클라이언트가 WebSocket 서버에 연결하면, handleConnenction 함수가 호출되어 연결된 클라이언트에 대한 정보가 로그로 출력된다.<br>  


---


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (20).png"> <br>


`window.location.host`는 현재 브라우저에서 열려 있는 웹 페이지의 도메인과 포트를 가져온다. 예를 들어 `http://localhost:3000`에 접속 중이라면 `window.location.host`는 `"localhost:3000"`이 된다.<br> `ws://`는 WebSocket 연결을 사용하겠다는 의미로, `http://`와 유사하지만, WebSocket 프로토콜을 사용해야 한다. 따라서 이 코드는 클라이언트와 서버가 동일한 도메인 및 포트를 사용하는 경우에 주로 사용된다. <br>  



---

#### 🔍 WebSocket Messages

server.js 코드 변경 <br>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
wss.on("connection", (socket) => {
    socket.send("hello!");
})
  </code></pre>
</div>


`socket.send("hello!");`는 **클라이언트에게 메시지**를 바로 보낼 수 있도록 변경한 부분이다. 이 코드는 클라이언트가 연결되자마자 `"hello!"`라는 메시지를 클라이언트에게 전송하는 역할을 한다.<br>
기존의 `handleConnection(socket)` 함수에서 클라이언트 연결에 대한 처리가 추상화되어 있었지만, `wss.on("connection", (socket) => { ... })` 방식은 연결이 발생하는 즉시 클라이언트에 대한 처리를 한 번에 수행할 수 있는 '즉시 실행 방식'을 이용한다. 따라서 외부 함수의 호출 없이 바로 클라이언트와의 상호작용을 처리할 수 있도록 한 것이다.<br> 그렇다면 이를 통한 <메시지 받기>를 구현해야 한다.<br>  


---
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (21).png"> <br>


이 코드에서 open 이벤트 리스너는 WebSocket이 서버와 연결되었을 때 실행되는 코드 블록을 정의한다.
WebSocket이 서버와 연결되었을 때, open 이벤트가 발생하면"Connected to Server"라는 메시지를 출력하게 된다.<br>  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (22).png"> <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (23).png"> <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (24).png"> <br>
server.js 수정 <br>


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (25).png"> <br>
app.js 수정 <br>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
    socket.on("message", message => {
        console.log(message);
    })
  </code></pre>
</div>


클라이언트로부터 메시지가 전송되면 이 코드 블록이 실행된다. 
클라이언트가 **socket.send()**를 통해 보낸 메시지를 서버가 받게되면 그 메시지를 출력한다.<br>  


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
setTimeout(() => {
    socket.send("hello from the Browser")
}, 10000)
  </code></pre>
</div>


10초 후에 클라이언트가 서버로 메시지를 보낼 수 있게 설정해놨다.<br>
etTimeout() 내에서 실행되는 코드로, 클라이언트에서 서버로 메시지를 전송한다.<br>setTeimout()을 이용해 클라이언트가 서버로 일정한 시간 뒤에 메시지를 보내도록 하는 것이 목적이다.<br>  



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/ScreenRecorderProject18 (1).gif"> <br>


---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (26).png"> <br>
home.pug 수정

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (27).png"> <br>


document.querySelector("ul"): HTML의 `<ul>` 태그를 가져와 메시지를 추가할 때 사용하도록 했다.<br>
그리고 document.querySelector("form"): `<form>` 태그를 가져와 폼 제출 이벤트를 처리할 수 있도록 하였다.<br>
따라서 사용자가 메시지를 입력하고 버튼을 누르면 폼 제출 이벤트가 발생하고, JavaScript로 입력값을 가져와서 WebSocket을 통해 서버로 보내게 된다.<br>
제출하고 난 뒤에는 입력창을 초기화하고 메시지를 화면에 추가할 수 있다.<br>  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (28).png"> <br>



---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const sockets = [];

wss.on("connection", (sockets) => {
    sockets.push(socket);
    console.log("Connedcted to Browser")
    socket.on("colse", () => console.log("Disconnected from the Browser"));
    socket.on("message", (message) => {
        sockets.forEach(aSocket => aSocket.send(message));
    });
});
  </code></pre>
</div>


클라이언트가 서버와 연결되면 연결된 클라이언트의 socket 객체를 sockets 배열에 저장한다. 그리고 Connected to Browser를 출력하게 된다.
클라이언트가 메시지를 보내면 서버는 sockets 배열에 저장된 모든 클라이언트에게 그 메시지를 전송할 수 있다.<br>  

---
#### 🔍 SocketIO vs WebSockets

##### SocketIO


실시간, 양방향 기반의 통신을 가능하게 만들어주는 framework로 websocket을 이용한다. 
서버가 클라이언트에게 자동으로 데이터를 보낼 수 있기 때문에,이를 통해 서버의 상태가 변경될 때마다 즉시 클라이언트를 업데이트할 수 있다.그리고 한 번 연결이 이뤄지면 그 연결은 지속적으로 유지되므로 빠른 데이터 전송이 가능하다는 이점이 있다.<br>  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (29).png"> <br>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);
  </code></pre>
</div>

SocketIO는 websocket의 부가 기능이 아니다!

---
##### socketIO Room


Socket.IO에서 방은 여러 소켓들이 참여(join)하고 떠날 수 있는(leave) 채널을 말한다.<br> 방은 모든 클라이언트가 아니라, 일부 클라이언트에게 이벤트를 전송할 때 사용된다.<br> 방은 서버에서만 사용될 수 있는 개념이다.클라이언트는 자신이 참여(join)하고 있는 방 리스트에 접근할 수 없다.<br> 특정 클라이언트 소켓을 주어진 채널(룸)에 참여시키려면 `join()` 함수를 호출하면 된다.<br>  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (30).png"> <br>


`main` 태그 안에 `div#welcome` 요소가 있고, 그 안에 방 이름을 입력할 수 있는 텍스트 필드와 'Enter Room' 버튼이 포함된 `form`이 있다.<br>
`input` 태그는 사용자가 방 이름을 입력할 수 있도록 하rh, `required` 속성으로 빈 입력을 방지하고, `type="text"`로 텍스트만 입력받는다.<br>
`script(src="public/js/app.js")`는 `app.js` JavaScript 파일을 페이지에 연결하여 클라이언트 측 로직을 처리하도록 했다.<br>  


이 코드는 사용자가 방 이름을 입력하고 Enter Room 버튼을 클릭하여 방에 입장하는 기능을 제공한다. required 로 방 이름을 반드시 입력해야 하고, 버튼 클릭 시 JavaScript 코드(app.js)를 통해 방으로 들어갈 수 있도록 하는 기능이다.
서버에서 Socket.IO를 사용해 클라이언트가 특정 방에 입장할 수 있도록 한다.<br>  


##### 서버에서 Socket.IO를 사용해 클라이언트가 특정 방에 입장할 수 있도록 하려면?!

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const io = require('socket.io')(server);  // 서버에 Socket.IO 연결

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', (roomName) => {
    socket.join(roomName);  // 사용자가 지정한 방에 입장
    io.to(roomName).emit('message', `User has joined the room: ${roomName}`);  // 방에 메시지 전송
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
  </code></pre>
</div>


사용자가 방에 입장할 때 서버는 해당 방에 메시지를 보내어 다른 사용자에게 입장 사실을 알릴 수 있다. 그리고 클라이언트 측에서 방 목록을 표시하고, 사용자가 특정 방을 선택하여 입장할 수 있게 기능을 설정했다.<br>  




---




[돌아가기: 2024 하반기 Python Coding Study](https://park-hoyeon.github.io/Study/Codeit%20Boost%20BE%20Study/)  


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
