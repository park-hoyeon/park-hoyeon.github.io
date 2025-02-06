---
layout: category
title: "✨ 4 Week - Python Coding Study"
permalink: /Study/codehive-details/4week
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



안녕하세요. hoyeon입니다.<br>
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 4주차 학습 내용을 기록했습니다.


## `CodeHive Study` 4주차 진행 (2024.10.14)

### 🗓️ 학습 주제

1. K-MOOC의 '파이썬 프로그래밍' 강의 수강<br>
2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
3. 모듈 & 라이브러리 관련 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br>
4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image04.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### 2750 수 정렬하기 (브론즈 Ⅱ)
<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
<b>문제:</b><br>
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오. <br>

<span style="color:yellow">입력</span>: 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.<br>  

<span style="color:yellow">출력</span>: 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.<br/>

</div>

<span style="color:yellow"> 📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
number = []
for i in range(n):
    number.append(int(input()))
for j in sorted(number):
    print(j)
  </code></pre>
</div>

🔍 <span style="color:yellow"> 문제 분석:</span>

1. 오름차순 정렬<br>
2. 입력으로는 첫 번째 줄에 수의 개수 𝑛개가 주어진다.<br/>  
    


<span style="color:yellow">🔍 해결 전략:</span><br>

- 입력받은 정수를 리스트에 저장한다.<br>
- sorted() 함수를 사용해 리스트를 오름차순으로 정렬한다.<br>
- 정렬된 결과를 하나씩 출력한다.<br/>  



---  


#### 1259 팰린드롬수 (브론즈I)<br>
<span style="color:yellow">문제</span><br>

<div style="padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
어떤 단어를 뒤에서부터 읽어도 똑같다면 그 단어를 팰린드롬이라고 한다. 'radar', 'sees'는 팰린드롬이다.<br>
수도 팰린드롬으로 취급할 수 있다. 수의 숫자들을 뒤에서부터 읽어도 같다면 그 수는 팰린드롬수다.<br> 
  121, 12421 등은 팰린드롬수다. 123, 1231은 뒤에서부터 읽으면 다르므로 팰린드롬수가 아니다.<br> 
  또한 10도 팰린드롬수가 아닌데, 앞에 무의미한 0이 올 수 있다면 010이 되어 팰린드롬수로 취급할 수도 있지만, 특별히 이번 문제에서는 무의미한 0이 앞에 올 수 없다고 하자.<br/>  
---  <br>
<span style="color:yellow">입력</span>:입력은 여러 개의 테스트 케이스로 이루어져 있으며, 각 줄마다 1 이상 99999 이하의 정수가 주어진다.<br> 
입력의 마지막 줄에는 0이 주어지며, 이 줄은 문제에 포함되지 않는다.<br/>  

<span style="color:yellow">출력</span>: 각 줄마다 주어진 수가 팰린드롬수면 'yes', 아니면 'no'를 출력한다.<br>
</div>

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
while True:
    num = input()
    if num == "0":
        break

    if num == num[::-1]:
        print("yes")
    else:
        print("no")
  </code></pre>
</div>  


🔍 <span style="color:yellow"> 문제 분석:</span>
숫자는 문자열로 입력되며, 입력값이 "0"이면 프로그램을 종료한다.<br>
입력된 숫자를 뒤집어서 원래 숫자와 비교해 동일하면 "yes", 다르면 "no"를 출력한다.<br/> 

<span style="color:yellow">🔍 해결 전략:</span><br>

문자열과 그 문자열을 뒤집은 값을 비교해 두 값이 같으면 팰린드롬이다.<br>
뒤집기 비교([::-1])를 통해 팰린드롬 여부를 검사한다.<br/>  
  


---

#### 10814 나이순 정렬 (실버V)`<br>
<span style="color:yellow">문제</span><br>

<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다.<br> 
이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.<br/>  


<span style="color:yellow">입력</span>: 첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)<br>
둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다.<br> 
나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다.<br> 
입력은 가입한 순서로 주어진다.<br/>  

<span style="color:yellow">출력</span>: 첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.<br/>
</div>  


<span style="color:yellow">📝 풀이 코드 </span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
information = []
for _ in range(n):
    age,name = input().split()
    information.append([int(age),name])
for i in sorted(information, key=lambda a: a[0]): print(i[0],i[1])
  </code></pre>
</div>  


<span style="color:yellow"> 🔍 문제 분석:</span>

사람들의 나이와 이름이 주어지며, 이를 나이순으로 정렬해야 한다.<br>
입력값은 나이와 이름이 공백으로 구분되어 주어지며, 여러 줄로 입력된다.<br/>



<span style="color:yellow">🔍 해결 전략:</span><br>

입력값을 받아 나이와 이름을 리스트로 저장한다.<br> 
sorted 함수의 key 매개변수에 나이를 기준으로 정렬하도록 한다.<br/>
  


---




[돌아가기: 2024 하반기 Python Coding Study](https://park-hoyeon.github.io/Study/Codehive%20(Python%20Coding)/)  


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
