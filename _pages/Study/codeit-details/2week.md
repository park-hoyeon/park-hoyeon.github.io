---
layout: category
title: "✨ 2 Week - Codeit Boost BE Study"
permalink: /Study/codeit-details/2week
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
본 포스팅은 <2024.12.26 ~ > 기간의 백엔드 스터디 2주차 학습 내용을 기록했습니다.</span>


## Codeit Boost 백앤드 스터디 1주차 진행 (2025.01.02)

### 🗓️ 학습 주제


1. 줌 클론코딩 - 노마드 코더 <Nomad Coders> 강의 수강<br>
2. 인프런 - Node.js를 이용해 웹 애플리케이션 만들기 강의 수강<br>
3. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
4. 간단한 발표 및 기록<br>
 



---   



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/BE2.png">



---
### 📝 BE 스터디 내용

#### 🔍 템플릿 엔진

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (1).png">   

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (2).png">

<span style="font-size:60%">
웹 페이지를 구성하는 Markup Language는 HTML이며, 이는 정적 언어이다. 따라서, Javascript의 반복문을 사용해 간단하게 처리할 수 있는 동적 연산을 HTML로 표현하려면 위의 사진처럼 직접 코드를 작성해야 하는 불편함이 있다. <br>
템플릿 엔진은 이 불편한 상황을 해소하기 위한 도구로, 템플릿 프로세서를 이용하여 웹 페이지를 동적으로 구현할 수 있는 시스템이다.<br/>
</span>  

---

#### 🔍 템플릿 엔진 사용하기

##### 템플릿 엔진 npm 패키지 설치하기

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
$ npm install jade --save
$ npm install pug --save
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (3).png">


- `views`, 템플리트가 있는 디렉토리. 예:<br> 
  `app.set('views', './views')`<br>
- `view engine`, 사용할 템플리트 엔진. 예:<br>
  `app.set('view engine', 'pug')`<br/>




<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (4).png">

<span style="font-size:60%">
send 대신 render 이용한다.<br>
template 경로를 통해서 들어온 사용자에게 function 기능이 수행되면서 ‘temp’라는 템플릿 파일을  웹페이지로 렌더링 해서 전송한다는 의미이다.<br/>
</span>  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (5).png"> <br>

<span style="font-size:60%">그냥 나열된 형식으로 출력된다. </span><br>  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (6).png"> <br>

<span style="font-size:60%">html 아래에 head와 body는 들여쓰기를 통해서 적용되도록 한다.</span><br>



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (7).png"> <br>

<span style="font-size:60%">app.locals.pretty = true; 추가로 정리하기</span><br>

---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (8).png"> <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (9).png"> <br>


---
#### 🔍 Express, URL을 이용한 정보 전달

##### Query String

<span style="font-size:60%">
사용자가 입력 데이터를 전달하는 방법 중의 하나로, url 주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것이다.<br/>
</span>   

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
http://a.com/login   


http://a.com/home

http://a.com/topic
  </code></pre>
</div>

<span style="font-size:60%">
각 주소는 패스에 따라 다른 결과를 주지만 예를 들어 <http://a.com/home> 하나만 놓고 본다면 이것은 언제나 똑같은 결과를 가져온다.<br/>
</span>   


<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
http://a.com/home?id=1
  </code></pre>
</div>

<span style="font-size:60%">
home에 id가 1인 값을 전달하고 있다.<br>
그럼 home은 1에 해당되는 결과를 처리하여 그것을 화면에 표현해준다.<br/>
</span>   


---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (12).png"> <br>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.get('/topic', function(req, res){
    res.send(req.query.id);
})
  </code></pre>
</div>


<span style="font-size:60%">
쿼리 스트링으로 전달된 값이 아래의 함수의 첫 번째 매개변수의 값에 쿼리 객체의 id 값에 들어온다는 것이다.<br/>
</span>   

---

##### 시멘틱 URL

<span style="font-size:60%">
querystring 을 / 뒤로 빼내어 깔끔한 url를 만드는 방식을 의미한다.<br/>
</span>   

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascript is....',
        'Nodejs is....',
        'Express is....'
    ];
    var output = `
    <a href= "/topic?id=0">Javascript</a><br>
    <a href= "/topic?id=1">Nodejs</a><br>
    <a href= "/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
})
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (13).png"> <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (14).png"> <br>

---

#### 🔍 Post 방식을 이용한 정보 전달

##### GET vs POST

<span style="font-size:60%">
GET: 우리가 어떤 정보를 서버에 요청해서 가져오는 방식<br>
POST: 사용자의 정보를 서버에 전송할 때 사용하는 방식 (ex.로그인 입력)<br/>
</span>   

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
app.get('/form', function(req, res){
    res.render('form');
});
app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (15).png"> <br>

---
##### Node.js를 이용해 웹 애플리케이션 만들기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (16).png"> <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (17).png"> <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (18).png"> <br>


<span style="font-size:60%">
 input(type='text' name='title' placeholder='title') 코드의 placeholder로 타이틀이 적힌 상자가 생겨남.<br/>
</span>   

- 이어서 폼 태그 만들기

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="java">
doctype html 
html 
    head 
        meta(charset='utf-8')
    body 
        form(action='/topic' method='post')
            p 
                input(type='text' name='title' placeholder='title')
            p 
                textarea(mane='description')
            p 
                input(type='submit')
  </code></pre>
</div>


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image (19).png"> <br>

<span style="font-size:60%">
사용자가 입력한 정보를 ‘/topic’으로 전송되도록, method=’post’ 방식으로 전송한다.<br/>
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
