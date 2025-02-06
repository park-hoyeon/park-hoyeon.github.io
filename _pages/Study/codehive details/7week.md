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



안녕하세요. 소시지입니다.<br>
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 7주차 학습 내용을 기록했습니다.

## `CodeHive Study` 7주차 진행 (2024.11.11)

### 🗓️ 학습 주제

1. 생활코딩 Python Django Web Framework  강의수강<br>
2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
3. 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br>
4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image07.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### 2108 통계 (실버 III)
<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.<br/>  

1. 산술평균 : N개의 수들의 합을 N으로 나눈 값<br>
2. 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값<br>
3. 최빈값 : N개의 수들 중 가장 많이 나타나는 값<br>
4. 범위 : N개의 수들 중 최댓값과 최솟값의 차이<br/>
   
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.<br/>

</div>

<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
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
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
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

평균은 소수점 첫째 자리에서 반올림하여 출력해야 한다. <br>
최빈값은 등장 빈도가 가장 높은 숫자를 출력하되, 여러 개일 경우 두 번째로 작은 값을 출력해야 한다.<br/>  




<span style="color:yellow">🔍 해결 전략:</span><br>

평균은 sum()으로 전체 합을 구한 뒤, 정수 반올림(round())을 통해 구한다.<br>
중앙값은 숫자를 정렬한 후 중간 위치의 값을 출력하여 구한다.<br>
최빈값은 딕셔너리를 사용해 빈도수를 계산하고, 최대 빈도수에 해당하는 값을 정렬해 구한다.<br>
범위는 가장 큰 값과 가장 작은 값의 차를 구해 출력한다.<br/>  



---  


#### 1764 듣보잡 (실버 IV)<br/>
<span style="color:yellow">문제</span><br>

<div style="padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.<br/>  

<span style="color:yellow">입력:</span>
첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다.<br> 
이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다.<br> 
이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다.<br> 
N, M은 500,000 이하의 자연수이다.<br>

듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.<br/>  

  
<span style="color:yellow">출력:</span>
듣보잡의 수와 그 명단을 사전순으로 출력한다.<br/>


</div>

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n,m = map(int, input().split())
listen=set(input() for _ in range(n))
see=set(input() for _ in range(m))
answer=sorted(listen&see)
print(len(answer))
for name in answer: print(name)
  </code></pre>
</div>  


🔍 <span style="color:yellow"> 문제 분석:</span>

듣도 못한 사람과 보도 못한 사람의 명단이 각각 주어지며, 이들의 교집합(듣보잡)을 찾아야 한다.<br>
교집합의 크기와 교집합에 속한 이름들을 사전 순으로 정렬해 출력하자.<br/>  





<span style="color:yellow">🔍 해결 전략:</span><br>

- 듣도 못한 사람과 보도 못한 사람을 각각 집합(set)으로 저장하여 중복을 제거하고 교집합 연산을 수행한다. <br>
- 집합의 교집합(&)을 사용한다. <br>
- 듣보잡 명단을 정렬(sorted())하여 사전 순으로 정리한다.<br/>


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
