---
layout: category
title: "✨ 7 Week - Python Coding Study"
permalink: /Study/codehive-details/7week
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 7주차 학습 내용을 기록했습니다.</span>


## `CodeHive Study` 7주차 진행 (2024.11.11)

### 🗓️ 학습 주제

<span style="font-size:70%">1. 생활코딩 Python Django Web Framework  강의수강<br></span>
<span style="font-size:70%">2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br></span>
<span style="font-size:70%">3. 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br></span>
<span style="font-size:70%">4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습</span>

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image07.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### `9012 괄호 (실버 Ⅳ)`
<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.<br/>  

1. 산술평균 : N개의 수들의 합을 N으로 나눈 값<br>
2. 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값<br>
3. 최빈값 : N개의 수들 중 가장 많이 나타나는 값<br>
4. 범위 : N개의 수들 중 최댓값과 최솟값의 차이<br/>
   
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.<br/>

</div>

<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
<span style="color:yellow">입력:</span>
첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다.<br> 
그 다음 N개의 줄에는 정수들이 주어진다.<br> 
입력되는 정수의 절댓값은 4,000을 넘지 않는다. <br>  
  
<span style="color:yellow">출력:</span>
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.<br>

둘째 줄에는 중앙값을 출력한다.<br>

셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.<br>

넷째 줄에는 범위를 출력한다.<br/>
</div>


<span style="color:yellow"> 📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
import sys
input = sys.stdin.readline

n = int(input())
num_list = [int(input()) for _ in range(n)]

ave = round(sum(num_list)/n)
sorted_list = sorted(num_list)

mid = sorted_list[(n-1)//2]

freq = {}
max_count = 0
most = []

for num in num_list:
    if num in freq: freq[num] += 1
    else: freq[num] = 1

    if freq[num] > max_count:
        max_count = freq[num]
        most = [num]
    elif freq[num] == max_count:
        most.append(num)

most = sorted(set(most))
if len(most) > 1:
    most = most[1]
else:
    most = most[0]

range = max(num_list) - min(num_list)

print(ave)
print(mid)
print(most)
print(range)

  </code></pre>
</div>

🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
평균은 소수점 첫째 자리에서 반올림하여 출력해야 한다. <br>
최빈값은 등장 빈도가 가장 높은 숫자를 출력하되, 여러 개일 경우 두 번째로 작은 값을 출력해야 한다.<br/>  

</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
평균은 sum()으로 전체 합을 구한 뒤, 정수 반올림(round())을 통해 구한다.<br>
중앙값은 숫자를 정렬한 후 중간 위치의 값을 출력하여 구한다.<br>
최빈값은 딕셔너리를 사용해 빈도수를 계산하고, 최대 빈도수에 해당하는 값을 정렬해 구한다.<br>
범위는 가장 큰 값과 가장 작은 값의 차를 구해 출력한다.<br/>  


</div>  


---  


#### 1075 나누기 (브론즈 Ⅱ)<br/>
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
두 정수 N과 F가 주어진다.<br>
지민이는 정수 N의 가장 뒤 두 자리를 적절히 바꿔서 N을 F로 나누어 떨어지게 만들려고 한다.<br> 
만약 가능한 것이 여러 가지이면, 뒤 두 자리를 가능하면 작게 만들려고 한다.<br/>  

예를 들어, N=275이고, F=5이면, 답은 00이다. 200이 5로 나누어 떨어지기 때문이다.<br> 
N=1021이고, F=11이면, 정답은 01인데, 1001이 11로 나누어 떨어지기 때문이다.<br/>  

<span style="color:yellow">입력:</span>
첫째 줄에 N, 둘째 줄에 F가 주어진다. N은 100보다 크거나 같고, 2,000,000,000보다 작거나 같은 자연수이다. F는 100보다 작거나 같은 자연수이다.<br/>  
  
<span style="color:yellow">출력:</span>
첫째 줄에 마지막 두 자리를 모두 출력한다. 한자리이면 앞에 0을 추가해서 두 자리로 만들어야 한다.<br/>


</div>

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n=int(input())
f=int(input())
number = (n // 100) * 100
mid = number%f
if mid == 0:
    print('00')
else:
    answer = f - mid
    if answer < 10:
        print(f'0{answer}')
    elif answer == f:
        print("00")
    else:
        print(answer)

  </code></pre>
</div>  

<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- n에서 가장 뒷 두 자리를 제거한 후 100을 곱해 100의 배수로 만든다.<br>
- number % f를 계산하여 나머지(mid)를 구한다. <br>
- 만약 mid == 0이면 추가 값이 필요 없으므로 출력값은 00<br>
- 결과값을 두 자리 형태로 출력한다.<br/>

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
