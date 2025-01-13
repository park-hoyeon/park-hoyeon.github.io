---
layout: category
title: "✨ 3 Week - Python Coding Study"
permalink: /Study/codehive-details/3week
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 3주차 학습 내용을 기록했습니다.</span>


## `CodeHive Study` 3주차 진행 (2024.10.07)

### 🗓️ 학습 주제

<span style="font-size:70%">1. K-MOOC의 '파이썬 프로그래밍' 강의 수강<br></span>
<span style="font-size:70%">2. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br></span>
<span style="font-size:70%">3. 반복문 & 함수 관련 백준(Baekjoon) 알고리즘 문제 풀이 및 코드 공유<br></span>
<span style="font-size:70%">4. 간단한 발표 보고서 작성 & 팀원의 알고리즘 문제 풀이법 학습</span>

---

<div style="display: inline-block; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 5px; background-color: rgba(255, 255, 255, 0.1); color: #f1f1f1; margin: 0 auto; text-align: left;">
    <img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image03.png" 
         style="width: 100%; height: auto; display: block; max-width: 400px;">
</div>



---
### 📝 baekjoon 알고리즘 문제 풀이

#### 1138 한 줄로 서기 (실버Ⅱ)
<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
<b>문제:</b><br>
N명의 사람들은 매일 아침 한 줄로 선다.<br> 
이 사람들은 자리를 마음대로 서지 못하고 오민식의 지시대로 선다.<br>
어느 날 사람들은 오민식이 사람들이 줄 서는 위치를 기록해 놓는다는 것을 알았다.<br> 
그리고 아침에 자기가 기록해 놓은 것과 사람들이 줄을 선 위치가 맞는지 확인한다.<br>  
사람들은 자기보다 큰 사람이 왼쪽에 몇 명 있었는지만을 기억한다.<br> 
N명의 사람이 있고, 사람들의 키는 1부터 N까지 모두 다르다.<br>
각 사람들이 기억하는 정보가 주어질 때, 줄을 어떻게 서야 하는지 출력하는 프로그램을 작성하시오.<br/>  

<span style="color:yellow">입력</span>
첫째 줄에 사람의 수 N이 주어진다. N은 10보다 작거나 같은 자연수이다. 둘째 줄에는 키가 1인 사람부터 차례대로 자기보다 키가 큰 사람이 왼쪽에 몇 명이 있었는지 주어진다. i번째 수는 0보다 크거나 같고, N-i보다 작거나 같다. i는 0부터 시작한다.<br/>

<span style="color:yellow">출력</span>
첫째 줄에 줄을 선 순서대로 키를 출력한다.<br/>


</div>  


<span style="color:yellow"> 📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
N = int(input())
N_list = list(map(int, input().split()))
people = [0] * N
result_list = []
for i, num in enumerate(N_list):
    tmp = num
    person = 0
    for j in range(N):
        if person == tmp and people[j] == 0:
            people[j] = i+1
            break
        elif people[j] == 0:
            person += 1
print(*people)

  </code></pre>
</div>

🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
사람이 줄을 설 때 자신의 앞에 키가 더 큰 사람이 몇 명 있는지를 나타낸다.<br>
각 사람을 줄에 세우고, 최종적으로 줄을 선 사람들의 순서를 출력해야 한다.<br/>

</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- people 배열을 초기화하여 0으로 세팅.<br>
- 각 사람(i번 사람)이 자신 앞에 원하는 num만큼의 빈 자리가 있어야만 자신의 자리를 선택할 수 있다.<br>
- 변수 tmp는 num(자신 앞에 더 큰 사람 수)을 카운트하며, 조건에 맞는 자리에 i+1을 배치한다.<br/>
</div>  


---  


#### 2525 오븐 시계 (브론즈Ⅲ)
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; padding:15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.<br>

또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.<br/>

훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.<br/>

</div>

<span style="color:yellow">📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
a,b=map(int, input().split())
c=int(input())
total_minutes = b + c
print((a+total_minutes//60)%24, total_minutes%60)

  </code></pre>
</div>  


🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
현재 시간과 조리 시간을 입력받아, 24시간 형식으로 조리가 끝나는 시각을 계산한다.<br>
시간을 계산할 때, 60분 = 1시간, 24시간 = 하루의 관계를 유지해야 하므로, <br>
현재 분 b와 조리 시간 c를 합산한 결과가 60분 이상일 경우, 초과된 분만큼 시간을 추가해야 한다.<br>
최종 시각은 24시간 형식이므로 a가 24 이상일 경우 24로 나눈 나머지를 계산한다.<br/>

</div>  

<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- 총 분 계산: 현재 분 b와 조리 시간 c를 합산해 total_minutes를 구한다.<br>
- 시간과 분 분리: total_minutes를 나눠 추가된 시간(total_minutes // 60)과 남은 분(total_minutes % 60)을 구한다.<br>
- 24시간 형식 조정: 현재 시간 a에 추가 시간을 더한 뒤, (a + 추가 시간) % 24로 24시간 형식에 맞춘다.<br/>

</div>  

---

#### 1037 약수 (브론즈 Ⅰ)
<span style="color:yellow">문제</span><br>

<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.<br/>  

<span style="color:yellow">입력</span>: 첫째 줄에 N의 진짜 약수의 개수가 주어진다. 이 개수는 50보다 작거나 같은 자연수이다. 둘째 줄에는 N의 진짜 약수가 주어진다. 1,000,000보다 작거나 같고, 2보다 크거나 같은 자연수이고, 중복되지 않는다.<br/>  

<span style="color:yellow">출력</span>: 첫째 줄에 N을 출력한다. N은 항상 32비트 부호있는 정수로 표현할 수 있다.<br/>
</div>  


<span style="color:yellow">📝 풀이 코드 </span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n=int(input())
answer=list(map(int, input().split()))
print(min(answer)*max(answer))

  </code></pre>
</div>  


<span style="color:yellow"> 🔍 문제 분석:</span>
<div style="font-size:60%">
- 약수의 개수 n과 약수 리스트를 기반으로 **원래 수 N**을 계산해야 한다.<br> 
- 약수의 특징: 가장 작은 약수와 가장 큰 약수를 곱해 원래 수 N을 구한다.<br/>
</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- 약수 중 가장 작은 값과 가장 큰 값을 찾는다.<br> 
- 원래 수 계산: 최소값과 최대값을 곱하면 원래 수 N이 된다.<br>
- min()과 max()를 사용해 간결하게 계산하자.<br/>

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
