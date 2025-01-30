---
layout: category
title: "✨ 4 Week - Codeit Boost BE Study"
permalink: /Study/codeit-details/4week
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
본 포스팅은 <2024.12.26 ~ > 기간의 백엔드 스터디 4주차 학습 내용을 기록했습니다.</span>


## Codeit Boost 백앤드 스터디 4주차 진행 (2025.01.16)

### 🗓️ 학습 주제


1. 줌 클론코딩 - 노마드 코더 <Nomad Coders> 강의 수강<br>
2. 인프런 - Node.js를 이용해 웹 애플리케이션 만들기 강의 수강<br>
3. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
4. 간단한 발표 및 기록<br>
 



---   



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/BE4.png">



---
### 📝 BE 스터디 내용

#### 🔍 Rooms

<span style="font-size:60%">서로 소통이 가능한 socket들의 그룹을 의미한다. 모든 websocket이 서로 대화할 필요는 없으며 room 안에 몇 개의 websocket 들끼리만 대화하면 된다.
Chat room이 그 대표적인 예시이고, 뿐 아니라 websocket 들은 그룹으로 묶일 수 있다. 예를 들어 배달 어플의 경우, 배달 기사의 위치를 나한테 알려주기 위해서는 배달기사와 나 사이의 socket이 room 안에 따로 있어야 한다.
socketIO는 join 메소드를 통해 room 기능을 제공하고 있다.</span> <br>   



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

🔍 app.js 코드
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const welcome = document.getElementById("welcome")
const form = welcome.querySelector("form");
 
function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", {payload: input.value}, () => {
        console.log("server is done!");
    });;
    input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
  </code></pre>
</div>

🔍 server.js 코드
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
import http from "http";
import SocketIO from "socket.io"
import WebSocket from "ws";
import express from "express";
 
const app = express();
 
//set the view
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));  
app.get("/", (req, res) => res.render("home"));//render 
app.get("/*", (req, res) => res.redirect("/"));
 
const handleListen = () => console.log('Listening on http://localhost:3000');
//app.listen(3000, handleListen);
 
//http의 서버
const httpServer = http.createServer(app); 
const wsServer  = SocketIO(httpServer);
 
wsServer.on("connection", (socket) => {
    socket.onAny((event) => {   
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        console.log(socket.id);
        console.log(socket.rooms);  
        socket.join(roomName);
        console.log(socket.rooms); 
        
        setTimeout(() => {
            done();
        }, 15000);
    });
});

httpServer.listen(3000, handleListen);
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (39).png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (40).png">


<span style="font-size:60%">backend에서 Set(1)에 해당하는 부분은  [socket.id](http://socket.id/) 이며,  모든 socket 은 처음에 private room 을 한개씩 가지고 있기 때문에 RoomName 이 설정되지 않은 상태의 room을 가지고 있다.
Set(2)에 해당하는 부분은 사용자가 브라우저에 hoho라고 RoomName을 지정했을 때의 Room을 나타낸다.</span> <br> 

---
#### 🔍 메시지 전송 기능

방에 참가했을 때 방 안의 모든 사람들에게 참여했음을 알리는 메세지<br/>  


🔍 home.pug 코드

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Noom
        link(rel="stylesheet", href="https://unpkg.com/mvp.css")
    body 
        header
            h1 Noom 
        main 
            div#welcome
                form
                    input(placeholder="room name", required, type = "text")
                    button Enter Room 
            div#room
                ul
                form
                    input(placeholder="message", required, type = "text")
                    button Send 
        script(src="/socket.io/socket.io.js")    
        script(src="/public/js/app.js")
  </code></pre>
</div>

: div#room 추가

<span style="font-size:60%">추가한 div#room은 처음에는 보이지 않아야 한다. 
처음에는 div#welcome 만 보이고,
roomname 을 입력한 뒤에 방에 입장하면 메세지를 입력할 수 있어야 하기 때문이다.
따라서 아래와 같이 app.js 코드를 수정할 수 있다.</span> <br> 



🔍 app.js 코드

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
 
room.hidden = true;
 
function showRoom(){
    welcome.hidden = true;
    room.hidden = false;
}
 
function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
  </code></pre>
</div>

: div#room 추가

<span style="font-size:60%">const room = document.getElementById("room"); 를 추가하여 room을 가져오고 showRoom 메소드를 생성하여 front에서 showRoom이 실행되면,
그 입력된 값을 back에서 front 로 넘겨줄 때 이 메소드를 실행하여 welcome 은 숨기고 room 은 보여지게 되는 것이다.</span> <br> 

---
#### 🔍 참가한 room에 누가 참가했는지를 알려주는 기능

home.pug에 아래 코드 추가
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (41).png">


🔍 app.js 코드 변경

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
 
room.hidden = true;
let roomName;
 
function showRoom(){
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
}
 
function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
  </code></pre>
</div>


<span style="font-size:60%">roomName 변수를 생성하고 handleRoomSubmit 에 roomName 을 넣는다.
그리고 showRoom에서 h3 변수를 생성한 뒤에 html 의 h3 내용을 받아와서 roomName으로 바꿔주는 것이다.</span> <br> 

---
#### 🔍 Room Messages

room에 처음 들어갔을 때 그 방의 모든 사람들에게 메세지를 전송하는 기능 구현 <br>



🔍 server.js 코드

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
import http from "http";
import SocketIO from "socket.io"
import WebSocket from "ws";
import express from "express";
 
const app = express();
 
//set the view
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); 
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
 
const handleListen = () => console.log('Listening on http://localhost:3000');

 
//http의 서버
const httpServer = http.createServer(app); 
 
wsServer.on("connection", (socket) => {
    socket.onAny((event) => {   
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome");    
    });
});

httpServer.listen(3000, handleListen);
  </code></pre>
</div>


<span style="font-size:60%">같은 roomName을 가진 room 에 있는 socket 들 중에서 본인을 제외한 모든 socket 에 "welcome" 이벤트를 emit하는 코드를 추가하였다.<br>
backend 에서 보낸 "welcome" 이벤트를 front 에서 받기 위해서 app.js를 수정해보자.</span> <br> 


🔍 server.js 코드 수정

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
 
room.hidden = true;
let roomName;
 
function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}
 
function showRoom(){
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
}
 
function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
 
socket.on("welcome", () => {
    addMessage("Someone Joined!");  
})
  </code></pre>
</div>

---

#### 🔍 Room Notifications
: 사용자가 방을 떠날 때 이를 알리는 기능 구현 <br>

먼저,  disconnecting 과 disconnected 를 구별하자!!! <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (42).png">


<span style="font-size:60%">
- disconnect: 연결이 완전히 끊어졌다는 것을 의미한다.<br>
- disconnecting: 고객이 접속을 중단할 것이지만 아직 방을 완전히 나가지 않은 상태를 의미한다.<br> 
</span> 

---
🔍 server.js에 disconnecting 부분 추가

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
import http from "http";
import SocketIO from "socket.io"
import WebSocket from "ws";
import express from "express";
 
const app = express();
 
//set the view
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); 
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
 
const handleListen = () => console.log('Listening on http://localhost:3000');

 
//http의 서버
const httpServer = http.createServer(app); 
 
wsServer.on("connection", (socket) => {
    socket.onAny((event) => {   
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome");    
    });
    socket.on("disconnecting", () => {
        socket.rooms.forEach(room => socket.to(room).emit("bye"));
    })
});

httpServer.listen(3000, handleListen);
  </code></pre>
</div>



🔍 app.js에도 bye 부분 추가하기

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
 
room.hidden = true;
let roomName;
 
function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}
 
function showRoom(){
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
}
 
function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
 
socket.on("welcome", () => {
    addMessage("Someone Joined!");  
});

socket.on("bye", () => {
    addMessage("Someone Left!");  
});
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (43).png">

---
#### 🔍 Nicknames


🔍 home.pug

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Noom
        link(rel="stylesheet", href="https://unpkg.com/mvp.css")
    body 
        header
            h1 Noom 
        main 
            div#welcome
                form
                    input(placeholder="room name", required, type = "text")
                    button Enter Room 
            div#room
                h3
                ul
                form#name
                    input(placeholder="nickname", required, type = "text")
                    button Save 
                form#msg
                    input(placeholder="message", required, type = "text")
                    button Send 
        script(src="/socket.io/socket.io.js")    
        script(src="/public/js/app.js")
  </code></pre>
</div>


🔍 app.js - : msg form에 addEventListener 추가함

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const welcome = document.getElementById("welcome");
const msgForm = welcome.querySelector("msgForm");
const room = document.getElementById("room");
 
room.hidden = true;
let roomName;
 
function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}
 
function handleMessageSubmit(event){
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", input.value, roomName, () => {     //백엔드에 입력한 메세지 전송 
        addMessage(`You: ${value}`);  //대화창에 메세지 출력 
    });
    input.value = "";
}
 
function handleNicknamesSubmit(event){
    event.preventDefault();
    const input = room.querySelector("#name input");
    socket.emit("nickname", input.value);
}
 
function showRoom(){
    welcome.hidden = true;
    room.hidden = false; 
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
    const msgForm = room.querySelector("#msg");
    const nameForm = room.querySelector("#name");
    msgForm.addEventListener("submit", handleMessageSubmit);
    nameForm.addEventListener("submit", handleNickNamesSubmit);
}
 
function handleRoomSubmit(event){
    event.preventDefault();
    const input = msgForm.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = "";
}
msgForm.addEventListener("submit", handleRoomSubmit);
 
socket.on("welcome", () => {
    addMessage("Someone Joined!");  
}); 
 
socket.on("bye", () => {
    addMessage("Someone Left!");  
});
 
socket.on("new_message", (addMessage)); 
// = socket.on("new_message", (msg) => {addMessage});
  </code></pre>
</div>

🔍 server.js - 백엔드 부분 수정

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
import http from "http";
import SocketIO from "socket.io"
import WebSocket from "ws";
import express from "express";
 
const app = express();
 
//set the view
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));  
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
 
const handleListen = () => console.log('Listening on http://localhost:3000');


const httpServer = http.createServer(app); 
const wsServer  = SocketIO(httpServer);
 
wsServer.on("connection", (socket) => {
    socket["nickname"] = "Anon";
    socket.onAny((event) => {   
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome", socket.nickname);    
    });
    socket.on("disconnecting", () => {
        socket.rooms.forEach(room => socket.to(room).emit("bye", socket.nickname));
    })
    socket.on("new_message" , (msg, room, done) => {
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        done();
    })
    socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});
 
httpServer.listen(3000, handleListen);
  </code></pre>
</div>



<span style="font-size:60%">
nickname 이벤트가 발생하면 nickname을 가져와서 socket 에 저장한다.
nickname 기능을 추가한 후에 해당 기능을 화면에 표시하기 위해서 app.js 를 추가로 수정한다.
누군가 채팅방에 접속하고 나갔을 때는 nickname 을 표시하기 위해 welcome, bye 부분에 추가한다.</span> <br>  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (42).png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (43).png">


---

#### 🔍 Room Count part

###### Adapter

<span style="font-size:60%">
다른 서버들 사이에 실시간 어플리케이션을 동기화한다.
지금 우리는 서버의 메모리에서 Adapter를 사용하고 있다. 
데이터베이스에는 아무것도 저장하고 있지 않는다.
우리가 서버를 종료하고 다시 시작할 때 모든 room과 message와 socket은 없어진다.
우리가 서버를 재시작할 때에는 모든 것들이 처음부터 시작되는 것이다.
그러나 우리가 원하는 것은 처음부터 시작되는 그 상태가 아니다.
백엔드에 데이터베이스를 가지도록 해야 한다.<br>  
</span> 


---

#### 🔍 User Video

목표1. 유저로부터 비디오를 가져와서 화면에 비디오를 보여주도록 하자.<br>

목표2. 마이크를 음소거하고 음소거를 해제하는 버튼을 구현하자.<br>

목표3. 카메라 on/off 기능 구현하자<br>


<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Noom
        link(rel="stylesheet", href="https://unpkg.com/mvp.css")
    body 
        header
            h1 Noom 
        main 
            video#myFace(autoplay, playsinline, width = "400", height = "400")
        script(src="/socket.io/socket.io.js")    
        script(src="/public/js/app.js")
  </code></pre>
</div>


<span style="font-size:60%">
우선 myFace라고 불리게 될 video를 만들었다. 
autoplay로 비디오 자동재생을 설정하고, playsinline이라는 property를 설정한다. 모바일 브라우저가 필요로 하는 property 이다. 모바일기기로 비디오를 재생할 때, 그 비디오가 전체화면 모드로 실행되는 것을 방지해준다.<br>  
</span> 


app.js는 아래와 같이 수정하였다.
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const socket = io();
 
const myFace = document.getElementById("myFace");
 
let myStream;
 
async function getMedia(){ 
    try{
        myStream = await navigator.mediaDevices.getUserMedia({
            audio : true,
            video : true,
        });
        console.log(myStream);
    } catch(e){
        console.log(e);
    }
}  
 
getMedia();
  </code></pre>
</div>



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (46).png"> <br>
테스트 실행해보면, 유저에게 카메라와 마이크 권한을 요청한다.

---

#### 🔍 소리와 화면을 on/off 할 수 있도록 버튼 생성하기

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Noom
        link(rel="stylesheet", href="https://unpkg.com/mvp.css")
    body 
        header
            h1 Noom 
        main 
            video#myFace(autoplay, playsinline, width = "400", height = "400")
            button#mute Mute
            button#camera Turn Camera Off
        script(src="/socket.io/socket.io.js")    
        script(src="/public/js/app.js")
  </code></pre>
</div>


---

#### 🔍 WebRTC
###### : web Real-Time Communication - 웹 기반 통신을 가능하게 해주는 기술



<span style="font-size:60%">
기존 web socket 통신은 한 서버에 많은 web socket들이 연결되어 있었고, 메시지를 보낼 때 서버로 보내진 후에 서버가 해당 메시지를 모두에게 전달하는 방식이다.<br>
WebRTC는 브라우저 간에 peer-to-peer 통신을 통해 영상 및 오디오 등이 서버로 전송되지 않는다. 따라서 서버의 중계 없이 클라이언트 브라우저간 실시간으로 통신이 가능하다는 특징이 있다.<br>  
</span>


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (47).pug"> <br>

<span style="font-size:60%">
초기 Signaling 시에만 서버를 통해 클라이언트 브라우저를 확인한다.
브라우저는 서버에 간단한 configuration 정보만 전달하게 되고 해당 Signaling 이후에는 클라이언트 간 채널이 형성되어서 Peer-to-Peer로 직접 연결된다.<br>  
</span>



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
