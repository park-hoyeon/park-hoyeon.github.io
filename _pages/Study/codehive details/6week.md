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



<span style="font-size:65%">안녕하세요. hoyeon입니다.<br>
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 6주차 학습 내용을 기록했습니다.</span>


## `CodeHive Study` 6주차 진행 (2024.11.04)

### 🗓️ 학습 주제

<span style="font-size:70%">1. 생활코딩 Python Django Web Framework  강의<br></span>
<span style="font-size:70%">2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br></span>
<span style="font-size:70%">3. 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br></span>
<span style="font-size:70%">4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습</span>

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image06.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### 11650 좌표 정렬하기 (실버Ⅴ)
<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
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
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
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
<div style="font-size:60%">
x좌표를 기준으로 오름차순 정렬해야 한다.<br>
만약 x좌표가 같다면, y좌표를 기준으로 오름차순 정렬해야 한다.<br>
입력값은 n개의 점으로 이루어지며, 각 점은 x, y 좌표가 공백으로 구분되어 있다.<br/>
</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- 입력받은 좌표를 리스트에 저장하며, 각 점을 [x, y] 형태로 구성한다.<br>
- 리스트의 정렬 기준을 설정하기 위해 sort 함수에서 key=lambda a: (a[0], a[1])를 사용한다.<br>
- 정렬 기준은 첫 번째로 x좌표, 두 번째로 y좌표를 오름차순으로 지정한다.<br>

</div>  


---  


#### `4153 직각삼각형 (브론즈Ⅲ)`<br>
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오.<br>
입력: 입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다. 각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 각 입력은 변의 길이를 의미한다.<br>
출력: 각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.<br>
</div>

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
