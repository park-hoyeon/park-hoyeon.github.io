---
layout: category
title: "✨ 1 Week - Codeit Boost BE Study"
permalink: /Study/codeit-details/1week
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
본 포스팅은 <2024.12.26 ~ > 기간의 백엔드 스터디 1주차 학습 내용을 기록했습니다.</span>


## Codeit Boost 백앤드 스터디 1주차 진행 (2024.12.26)

### 🗓️ 학습 주제


1. 줌 클론코딩 - 노마드 코더 <Nomad Coders> 강의 수강<br>
2. 인프런 - Node.js를 이용해 웹 애플리케이션 만들기 강의 수강<br>
3. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
4. 간단한 발표 및 기록<br>
 



---   



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/BE1.png">



---
### 📝 BE 스터디 내용

#### 서버 측 JS - 간단한 웹앱 만들기


<span style="color:yellow"> 📝 코드</span>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
  </code></pre>
</div>


<span style="font-size:60%">
createServer로 서버를 구축한다.<br> 
서버를 만들어서 그 서버가 이 컴퓨터에 리스닝 하도록 시킨다. <br>
그리고 첫번째 인자로 port 변수를 전달했고, 이 port는 1337번을 가리키게 된다.<br>
hostname을 전달했는데 127.0.0.1로, 즉 컴퓨터의 ip값이 설정되었다.<br/>
</span>  

---   


<span style="color:yellow">🔍 요약 정리:</span><br>
<div style="font-size:60%">
노드 js를 이용해서 우리가 웹서버를 만들고 그 웹서버가 1337번을 리스닝하도록 시키는 코드이다.<br> 
그리고 사용자가 접속했을 때 127.0.0.1로 접속한 사용자에 대해서 응답하라는 명령의 의미이다.<br>
이 응답의 결과는 Hello World라는 텍스트를 응답하도록 하는 코드이다.</div> <br/>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/1-1.png"> <br>  

<div style="font-size:60%"> 서버를 실행시키면 이렇게 출력된다.</div><br>   


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/1-2.png">   <br>

<div style="font-size:60%"> 
이 컴퓨터로 접속하는 접속 중에서 127.0.0.1이라고 브라우저에 브라우저의 주소창을 입력하고, 그 뒤에 1337이라고 입력한 접속에 대해서 응답하겠다는 것이다.</div><br>   

---  


## NPM  


<span style="color:yellow">Node Package Manager</span><br>

<span style="font-size:70%">
노드js가 제공하는 모듈은 노드js 시스템에서만 사용할 수 있는 모듈이다.<br> 
NPM은 자바스크립트가 제공하는 모듈이기 때문에 자바스트립트가 동작하는 어떠한 시스템에서든 사용 가능하다.<br>
이 패키지 관리자는 소프트웨어의 라이브러리와 의존성을 쉽게 설치하고 업데이트하며 관리할 수 있도록 돕는 도구이다. </span><br>   






<span style="color:yellow">NPM 사용법</span><br>
<div style="font-size:60%; padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
**1. npm 초기화하기** <br>   
: 새로운 프로젝트를 시작하려면 먼저 터미널에서 다음과 같은 명령어로 package.json 파일을 생성해야 한다.<br>

<span style="color:yellow">npm init</span><br> 

.

**2. 패키지 검색하기** <br>

: 원하는 패키지를 찾기 위해서는 다음과 같은 방법으로 검색한다.<br>

<span style="color:yellow">npm search [패키지 이름]</span><br>   

.

**3. 설치된 패키지 확인하기** <br>

: 이미 설치된 모든 패키지를 확인하려면 아래 명령어를 사용한다.<br>

<span style="color:yellow">npm list --depth=0</span><br> 
</div>

---

### Callback/동기•비동기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/1-3.png">   <br>

<span style="font-size:70%">
node sample.js 를 입력하면 sample.js 코드에 담겨있는 자바스트립터를 하나씩 실행하는 명령이다.<br>

즉 **다른 함수의 인자로 전달**되어 **특정 작업이 완료된 후 실행되는 함수**를 의미한다.<br>

일반 함수는 즉시 실행되는 반면, **콜백 함수**는 **특정 이벤트나 작업이 완료된 후**에 실행된다.<br>

콜백 함수는 **비동기 처리 상황**에서 **순차적인 동작을 보장**하기 위해 사용되는 특징이 있다.</span><br>  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/1-4.png">   <br>

---

### 비동기식

fs.readFile( 파일명(파일 경로), 옵션, 콜백함수 )<br>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    // 파일을 읽는 중에 오류가 발생하면 `err` 인자로 에러 객체가 전달된다.
    console.error(err);
    return;
  }
  // 파일 읽기에 성공하면 `data` 로 파일의 내용이 전달된다.
  console.log(data);
});
  </code></pre>
</div>


<span style="font-size:70%">
파일 읽기 작업이 시작되고 바로 다음 코드가 실행된다. 파일 읽기가 완료되면 콜백 함수가 호출된다.<br>

즉 **다른 함수의 인자로 전달**되어 **특정 작업이 완료된 후 실행되는 함수**를 의미한다.<br>

I/O 작업 중 **이벤트 루프를 차단하지 않기 때문에**, 높은 성능과 효율성을 제공한다는 장점이 있고

콜백 함수는 파일 읽기 성공 시 data에 내용을 전달해서 실패 했을 때 에러 정보를 전달한다.</span><br>  


---

### 동기식


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  console.log(data);
} catch (err) {
  // 파일 읽는 중에 오류가 발생했을 때 실행
  console.error(err);
}
  </code></pre>
</div>


<span style="font-size:70%">
파일 읽기가 완료될 때까지 코드 실행이 멈춘다.<br>

에러 발생 시 try의 catch 함수로 에러를 처리하는 것이다.<br>

이것은 **이벤트 루프를 차단**하기 때문에, I/O 작업 중에 다른 작업을 수행할 수 없다는 특징이 있다.</span><br>  


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
