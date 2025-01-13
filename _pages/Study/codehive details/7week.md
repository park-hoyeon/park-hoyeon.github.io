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


## `CodeHive Study` 7주차 진행 (2024.11.18)

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
  
괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다.<br> 
그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다.<br> 
한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. <br>
만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다.<br> 
그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다.<br> 
예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. <br>

여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다.<br/>

</div>

<div style="font-size:60%; border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
<span style="color:yellow">입력:</span>
입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다. <br>
<span style="color:yellow">출력:</span>
출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다. <br>
</div>


<span style="color:yellow"> 📝 풀이 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
n = int(input())
l = '('
r = ')'
for i in range(n):
    new = []
    ps = input()
    for j in ps:
        if j == l: new.append(l)
        elif j == r:
            if len(new) != 0: new.pop()
            else:
                print("NO")
                break
    else:
        if len(new) != 0: print("NO")
        else: print("YES")

  </code></pre>
</div>

🔍 <span style="color:yellow"> 문제 분석:</span>
<div style="font-size:60%">
예를 들어 "(())"는 유효한 괄호 문자열이지만, "(()"나 "())"는 유효하지 않다.<br>
'('는 반드시 ')'와 짝을 이루어야 한다.<br/>  

</div>  


<span style="color:yellow">🔍 해결 전략:</span><br>
<div style="font-size:60%">
- 문자열에서 여는 괄호 (를 만나면 스택에 추가하고, 닫는 괄호 )를 만나면 스택에서 가장 최근에 추가된 여는 괄호 (를 제거한다.<br>
- 만약 닫는 괄호 )가 나왔을 때 스택에 여는 괄호가 없으면 (len(new) == 0), NO를 출력하고 검사 종료한다.<br>
- 닫는 괄호가 나오는데 스택이 비어 있으면 바로 NO를 출력한다.<br/>

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
