---
layout: category
title: "✨ 8 Week - Python Coding Study"
permalink: /Study/codehive-details/8week
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 8주차 학습 내용을 기록했습니다.</span>


## `CodeHive Study` 8주차 진행 (2024.11.18)

### 🗓️ 학습 주제

<span style="font-size:70%">1. 생활코딩 Python Django Web Framework  강의<br></span>
<span style="font-size:70%">2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br></span>
<span style="font-size:70%">3. 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br></span>
<span style="font-size:70%">4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습</span>

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image08.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### 2920 음계 (브론즈 II)`
<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
<b>문제:</b><br>
다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다.<br> 
이 문제에서 8개 음은 다음과 같이 숫자로 바꾸어 표현한다. c는 1로, d는 2로, ..., C를 8로 바꾼다.<br>

1부터 8까지 차례대로 연주한다면 ascending, 8부터 1까지 차례대로 연주한다면 descending, 둘 다 아니라면 mixed 이다.<br>

연주한 순서가 주어졌을 때, 이것이 ascending인지, descending인지, 아니면 mixed인지 판별하는 프로그램을 작성하시오.<br>

<span style="color:yellow">입력</span>: 첫째 줄에 8개 숫자가 주어진다. 이 숫자는 문제 설명에서 설명한 음이며, 1부터 8까지 숫자가 한 번씩 등장한다.

<br/>  

<span style="color:yellow">출력</span>: 첫째 줄에 ascending, descending, mixed 중 하나를 출력한다.<br/>
</div>  


</div>





<span style="color:yellow"> 📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
note = list(map(int, input().split()))

if note == sorted(note):
    print("ascending")
elif note == sorted(note, reverse=True):
    print("descending")
else:
    print("mixed")
  </code></pre>
</div>

🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
8개의 음이 입력으로 주어질 때, 해당 음들이 오름차순(ascending), 내림차순(descending), 또는 **혼합(mixed)**인지 판단해야 한다.<br>
입력 리스트가 정렬된 상태와 동일하면 "ascending", 역순 정렬과 동일하면 "descending"을 출력한다.<br>

</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- 입력 리스트를 sorted()를 사용해 오름차순으로 정렬한 결과와 비교하여 오름차순인지 판단한다.<br>
- sorted(note, reverse=True)로 정렬하여 내림차순 결과와 비교하여 내림차순인지 확인한다.<br>
- 두 조건에 모두 해당하지 않으면 "mixed"를 출력한다.<br/>
</div>  


---  


#### 1676 팩토리얼 0의 개수 (실버 V)`<br>
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.<br>
입력: 첫째 줄에 N이 주어진다.<br>
출력: 첫째 줄에 구한 0의 개수를 출력한다.
</div>

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
count = 0
while n >= 5:
    answer = n//5
    count += answer
    n = n//5

print(count)
  </code></pre>
</div>  


🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
팩토리얼의 끝에 있는 0은 10의 배수에서 만들어지며, 10은 2와 5의 곱으로 이루어진다.<br>
팩토리얼에서는 2의 배수보다 5의 배수가 적으므로, 5의 배수의 개수를 센다.
</div>  

<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- n을 5로 나눈 몫을 구해 5의 배수가 몇 개 있는지 계산한다.<br>
- n을 계속 5로 나누며, 각 단계에서 몫을 누적하여 5, 25, 125, ... 같은 더 큰 배수도 포함시킨다.
- 반복문은 n이 5 이상일 때만 실행되며, n이 작아지면 종료되도록 한다.
</div>  

---

#### 1920 수 찾기 (실버Ⅳ)<br>
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.<br/>  

<span style="color:yellow">입력</span>: 첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. <br>
다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다.<br> 
다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다.<br> 
다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다.<br> 
모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.<br/>  

<span style="color:yellow">출력</span>: M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.<br/>
</div>  


<span style="color:yellow">📝 풀이 코드 </span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
numbers = set(map(int, input().split()))
m = int(input())
number_list= list(map(int, input().split()))

for number in number_list:
    print(1) if number in numbers else print(0)
  </code></pre>
</div>  


<span style="color:yellow"> 🔍 문제 분석:</span>
<div style="font-size:60%">
첫 번째 수열은 n개의 정수로 이루어져 있으며, 두 번째 수열은 m개의 정수로 이루어진다.<br/>
</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- 첫 번째 수열(numbers)을 집합(set) 자료형으로 변환한다.<br> 
- 두 번째 수열(number_list)의 각 숫자를 순회하면서, 첫 번째 수열에 존재하는지 확인한다.<br>
- 각 숫자에 대해 존재하면 1, 아니면 0을 출력한다.<br>
</div>  


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
