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



<span style="color:yellow">🔍 요약 정리:</span><br>
<div style="font-size:60%">
노드 js를 이용해서 우리가 웹서버를 만들고 그 웹서버가 1337번을 리스닝하도록 시키는 코드이다.<br> 
그리고 사용자가 접속했을 때 127.0.0.1로 접속한 사용자에 대해서 응답하라는 명령의 의미이다.<br>
이 응답의 결과는 Hello World라는 텍스트를 응답하도록 하는 코드이다.</span> <br/>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/1-1.png">
서버를 실행시키면 이렇게 출력된다.<br>   


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/1-2.png">
이 컴퓨터로 접속하는 접속 중에서 127.0.0.1이라고 브라우저에 브라우저의 주소창을 입력하고, 그 뒤에 1337이라고 입력한 접속에 대해서 응답하겠다는 것이다.<br>   

---  


#### NPM 
<span style="color:yellow">Node Package Manager</span><br>

<span style="font-size:70%">
노드js가 제공하는 모듈은 노드js 시스템에서만 사용할 수 있는 모듈이다.<br> 
NPM은 자바스크립트가 제공하는 모듈이기 때문에 자바스트립트가 동작하는 어떠한 시스템에서든 사용 가능하다.<br>

**이 패키지 관리자는 소프트웨어의 라이브러리와 의존성을 쉽게 설치하고 업데이트하며 관리할 수 있도록 돕는 도구이다.** 
</span><br>




<span style="color:yellow">NPM 사용법</span><br>
<div style="font-size:60%; padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
**1. npm 초기화하기** <br>
: 새로운 프로젝트를 시작하려면 먼저 터미널에서 다음과 같은 명령어로 package.json 파일을 생성해야 한다.<br>

<span style="color:yellow">npm init</span><br>  


**2. 패키지 검색하기** <br>

: 원하는 패키지를 찾기 위해서는 다음과 같은 방법으로 검색한다.<br>

<span style="color:yellow">npm search [패키지 이름]</span><br>   


**3. 설치된 패키지 확인하기** <br>

: 이미 설치된 모든 패키지를 확인하려면 아래 명령어를 사용한다.<br>

<span style="color:yellow">npm list --depth=0</span><br> 
</div>

---

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
while True:
    x, y, z = map(int, input().split())
    if x==0 and y==0 and z==0:
        break
    x,y,z = sorted([x,y,z])
    if z**2 == x**2 + y**2:
        print("right")
    else:
        print("wrong")
  </code></pre>
</div>  


🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
피타고라스의 정리 성립 조건: 세 변 중에서 가장 긴 변의 제곱이 나머지 두 변의 제곱의 합과 같다.<br/>
</div>  

<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- x, y, z = sorted([x, y, z]): 입력받은 세 변을 오름차순으로 정렬하고 가장 큰 값(빗변)은 z, 나머지 두 변은 x와 y로 설정한다.<br/>
</div>  

---

#### `2839 설탕 배달 (실버Ⅳ)`<br>
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
상근이는 요즘 설탕공장에서 설탕을 배달하고 있다.<br> 
상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다.<br>
설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.<br>  

상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다.<br> 
예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.<br>  

상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.<br/>  

<span style="color:yellow">입력</span>: 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)<br/>  

<span style="color:yellow">출력</span>: 상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.<br/>
</div>  


<span style="color:yellow">📝 풀이 코드 </span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
dp = [float('inf')] * (n+1)
dp[0]=0
sugar_bags = [3,5]
for sugar_bag in sugar_bags:
    for i in range(sugar_bag, n+1):
        if dp[i-sugar_bag] == float('inf'): continue
        dp[i] = min(dp[i], dp[i-sugar_bag]+1)
answer=dp[n] if dp[n]!=float('inf') else -1
print(answer)
  </code></pre>
</div>  


<span style="color:yellow"> 🔍 문제 분석:</span>
<div style="font-size:60%">
설탕봉지의 최소 개수를 구해야 하므로, 그리디 방식(가장 큰 단위부터 쓰는 방식)은 적합하지 않다.<br>
동적 계획법(DP)을 사용한다.<br/>
</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- dp[i]: ikg를 정확히 배달하는 데 필요한 최소 봉지 수로 정의한다.<br> 
  dp[0] = 0: 설탕이 0kg일 경우, 봉지의 수는 0이다.<br>
  나머지 dp[i]는 초기값으로 float('inf')를 설정하였다.<br> 
- 3kg 봉지와 5kg 봉지를 사용할 수 있으므로, ikg를 배달할 수 있는 최소 봉지 수는 i-3kg 또는 i-5kg를 배달하는 최소 봉지 수에 1을 더한 값이다.<br>
- dp[n]이 우리가 구하는 최소 봉지 수이다.<br> 
  만약 dp[n]이 float('inf')라면, n을 정확히 배달할 수 없다는 의미이므로, -1을 출력한다.<br>
</div>  


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
