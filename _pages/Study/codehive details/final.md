
---
layout: category
title: "✨ Codehive 스터디 최종 활동 결과 페이지 제작"
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
본 포스팅은 <2024.09.23 ~ 2024.12.09> 기간의 코딩 스터디 최종 활동 정리본 내용을 기록했습니다.</span>



### 🗓️ 학습 주제

<span style="font-size:70%">
K-MOOC 강의를 통해 파이썬을 체계적으로 학습하고, 최종적으로 파이썬을 활용한 웹 서버를 제작할 수 있는 수준까지 실력을 끌어올리는 것이 투게더를 통해 이루고자 하는 학습 주제이다. 단순히 파이썬 기초 문법을 익히는 것에서 그치지 않고, 협업 및 실무에서 쓰일 수 있는 모듈과 Python Django를 함께 학습한다. 궁극적으로 학습한 내용을 기반으로, 공부한 내용을 정리할 수 있는 웹 페이지를 구현하는 것이 최종 목표이다.<br>  

##### <span style="color:yellow">Ⅰ. 강의 수강 </span><br>
대학 강좌 K-MOOC의 ‘파이썬 프로그래밍’ 강의를 활용해 파이썬의 전반적인 내용을 복습하고 학습한다. 기초 연산자부터 시작해 다양한 모듈과 라이브러리까지의 내용을 다룰 예정이다. 강의가 끝난 후에는 기재된 퀴즈를 푼다. 또한 팀원들과 학습 내용을 공유하고, 각자가 이해한 내용을 발표하며 2차 복습을 진행한다.<br>  


##### <span style="color:yellow">Ⅱ. 기반 다지기 </span><br>
강의 학습이 끝나면 습득한 학습 자료를 기반으로 백준(Baekjoon) 알고리즘 문제 풀이를 진행한다. 공통 문제와 개인 문제로, 총 두 개 이상의 문제를 매일 푸는 것을 원칙으로 한다. 개인 문제는 수업한 내용과 관련된 알고리즘 문제 중 본인의 수준에 맞는 문제를 선택하여 매일 하나씩 풀고 디스코드(discord)에 공유하는 것으로 한다. 모임에서 각자가 풀었던 문제와 코드를 공유하며, 팀원들끼리 질문을 주고받는 방식으로 추가 학습을 실시한다. 이때, 서로의 코드를 비교하여 공통점과 차이점을 분석하며, 본인만의 코딩 스타일을 찾고 보다 더 효율적인 문제 해결 방법을 배워본다.<br>


##### <span style="color:yellow"> Ⅲ. 심화 공부 </span><br>
이후 협업이나 실무에서 쓰이는 파이썬 관련 도구들을 심화 학습한다. 이를 통해 프로젝트 협업이나 실무 환경에서 활용할 수 있는 기술을 익힌다. 공부 방식은 다음과 같다.<br>  

- API와 HTML 개념 공부<br>
: 명품 웹 프로그래밍 책을 활용하여 웹 페이지를 제작하기 위한 최소한의 기능 익히기<br>

- Python Django Web Framework 공부<br>
: 생활코딩 opentutorial django를 활용하여 포트, 홈페이지, 생성 및 수정 기능 익히기<br>


##### <span style="color:yellow"> Ⅳ. 결과물 정리 </span><br>
Ⅰ~Ⅲ 단계 학습 과정에서 얻은 모든 자료를 데이터화 시킨다. 이 데이터 자료를 저장하고 이용할 수 있는 간단한 웹 페이지(Django)를 만들어본다. 학습한 모든 내용을 바탕으로 공부한 내용을 데이터로 만들어 저장할 수 있는 웹 페이지를 만드는 것이 최종 목표이다. <br>

</span>

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
