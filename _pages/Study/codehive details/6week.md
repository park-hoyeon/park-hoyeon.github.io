---
layout: category
title: "✨ 6 Week - Python Coding Study"
permalink: /Study/codehive-details/6week
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 6주차 학습 내용을 기록했습니다.


## `CodeHive Study` 6주차 진행 (2024.11.04)

### 🗓️ 학습 주제

1. 생활코딩 Python Django Web Framework  강의<br>
2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
3. 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br>
4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image06.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### 11650 좌표 정렬하기 (실버Ⅴ)
<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
<b>문제:</b><br>
2차원 평면 위의 점 N개가 주어진다.<br> 
좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.<br/>

<span style="color:yellow">입력</span>: 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다.<br>  
둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다.<br> 
(-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.<br/>  

<span style="color:yellow">출력</span>: 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.<br/>


</div>

<span style="color:yellow"> 📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n=int(input())
dot_list = []
for _ in range(n):
    x,y = map(int, input().split())
    dot_list.append([x,y])
dot_list.sort(key=lambda a: (a[0],a[1]))
for dot in dot_list:
    print(dot[0],dot[1])
  </code></pre>
</div>

🔍 <span style="color:yellow"> 문제 분석:</span>

x좌표를 기준으로 오름차순 정렬해야 한다.<br>
만약 x좌표가 같다면, y좌표를 기준으로 오름차순 정렬해야 한다.<br>
입력값은 n개의 점으로 이루어지며, 각 점은 x, y 좌표가 공백으로 구분되어 있다.<br/>



<span style="color:yellow">🔍 해결 전략:</span><br>

- 입력받은 좌표를 리스트에 저장하며, 각 점을 [x, y] 형태로 구성한다.<br>
- 리스트의 정렬 기준을 설정하기 위해 sort 함수에서 key=lambda a: (a[0], a[1])를 사용한다.<br>
- 정렬 기준은 첫 번째로 x좌표, 두 번째로 y좌표를 오름차순으로 지정한다.<br>




---  


#### 1978 소수 찾기 (브론즈II)`<br>
<span style="color:yellow">문제</span><br>

<div style="padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.<br>
입력: 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다.<br> 
  다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.<br>
출력: 주어진 수들 중 소수의 개수를 출력한다.<br>
</div>

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
num_list = list(map(int, input().split()))
answer = 0

for i in num_list:
    count = 0
    if i == 1:
        continue
    for j in range(2,i+1):
        if i%j == 0:
            count += 1
    if count == 1:
       answer += 1
print(answer)
  </code></pre>
</div>  


🔍 <span style="color:yellow"> 문제 분석:</span>

소수는 1과 자기 자신만을 약수로 가지는 숫자이다.<br/>


<span style="color:yellow">🔍 해결 전략:</span><br>

먼저 입력값으로 주어진 숫자 목록을 num_list에 저장한다.<br>
1은 제외하고, 2부터 그 숫자 자체까지 나누어지지 않는지 체크하여 소수인지 판별한다.<br>
소수의 개수를 세기 위해 각 숫자에 대해 나누어지는 수가 2개인 경우(자기 자신과 1)만 소수로 판단한다.<br/>  


---

#### 10773 제로 (실버Ⅳ)<br>
<span style="color:yellow">문제</span><br>

<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
나코더 기장 재민이는 동아리 회식을 준비하기 위해서 장부를 관리하는 중이다.<br>

재현이는 재민이를 도와서 돈을 관리하는 중인데, 애석하게도 항상 정신없는 재현이는 돈을 실수로 잘못 부르는 사고를 치기 일쑤였다.<br>

재현이는 잘못된 수를 부를 때마다 0을 외쳐서, 가장 최근에 재민이가 쓴 수를 지우게 시킨다.<br>

재민이는 이렇게 모든 수를 받아 적은 후 그 수의 합을 알고 싶어 한다. 재민이를 도와주자!<br/>  



<span style="color:yellow">입력</span>: 첫 번째 줄에 정수 K가 주어진다. (1 ≤ K ≤ 100,000)<br>

이후 K개의 줄에 정수가 1개씩 주어진다. 정수는 0에서 1,000,000 사이의 값을 가지며, 정수가 "0" 일 경우에는 가장 최근에 쓴 수를 지우고, 아닐 경우 해당 수를 쓴다.<br>

정수가 "0"일 경우에 지울 수 있는 수가 있음을 보장할 수 있다.<br/>  

<span style="color:yellow">출력</span>: 재민이가 최종적으로 적어 낸 수의 합을 출력한다. 최종적으로 적어낸 수의 합은 231-1보다 작거나 같은 정수이다.<br/>
</div>  


<span style="color:yellow">📝 풀이 코드 </span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
k = int(input())
number_list = []
for i in range(k):
    number = int(input())
    number_list.append(number)
    if number == 0:
        number_list.pop()
        del number_list[-1]
print(sum(number_list))
  </code></pre>
</div>  


<span style="color:yellow"> 🔍 문제 분석:</span>

0이 아닌 숫자는 number_list에 계속 추가되고, 0이 입력되면 마지막에 추가된 숫자를 제거해야 한다.<br>
0이 입력될 때마다 가장 최근에 입력된 숫자를 제거해야 한다.<br/>



<span style="color:yellow">🔍 해결 전략:</span><br>

append로 숫자를 추가하고, 0이 입력되면 pop과 del을 사용해 최근 숫자를 제거한다.<br> 
모든 숫자를 처리한 후, 리스트에 남아있는 숫자들의 합을 sum()을 사용하여 출력한다.<br>



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
