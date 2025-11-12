---
layout: single
title: "DP"
permalink: /Study/basic/dp
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Study
tags:
  - Algorithm
  - DataStructure
toc: true
toc_sticky: true
---

### 참고 자료

- [DP 알고리즘](https://velog.io/@boyeon_jeong/%EB%8F%99%EC%A0%81%EA%B3%84%ED%9A%8D%EB%B2%95Dynamic-Programming)


---

## 백준 관련 문제

- [실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/dp) 

---
## 'DP(다이나믹 프로그래밍)'이란
- 문제를 크게 세 단계로 나눠서 해결한다.
  1. 먼저 입력 크기가 작은 부분 문제들을 모두 해결해 그 값을 저장한다.
  2. 그 해들을 이용해 보다 큰 크기의 부분 문제를 해결한다.
  3. 최종적으로 원래 주어진 입력의 문제를 해결한다.
- DP 알고리즘에는 부분 문제들 사이에 의존적 관계가 존재한다.

## Top vs Bottom 접근
- 재귀적 호출은 주로 하향식(top-down) 접근 방식을 사용한다. 즉, 큰 문제를 작은 하위 문제로 나누어 해결하는 방식
- 동적 계획법은 주로 상향식(bottom-up) 접근 방식을 사용한다. 작은 하위 문제들부터 시작하여 그 결과를 저장하고, 이를 이용하여 점진적으로 큰 문제의 해를 구해나간다.

## DP 기법을 적용시킬 수 있는 조건
1. 중복되는 부분 문제
2. 최적 부분 구

## 메모이제이션(Memoization)
- 다이나믹 프로그래밍을 구현하는 방법 중 하나이다.
- 한 번 계산한 결과를 메모리 공간에 메모하는 기법이다.
- 메모이제이션은 한 번 구한 정보를 리스트에 저장하는 형태로 구현한다. = DP 테이블
  

#### 코드 형태 (ex. 피보나치)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
# DP테이블 초기화
d = [0] * 100


# 첫 번째 피보나치 수와 두 번째 피보나치 수는 1
d[1] = 1
d[2] = 1
n = 99


# 피보나치 함수 반복문으로 구현
for i in range(3, n + 1):
    d[i] = d[i - 1] + d[i - 2]


print(d[n])

</code></pre>
</div>  



[돌아가기:  알고리즘 - 기초 내용 보기](https://park-hoyeon.github.io/Study/basic)   

<div style="text-align: right; margin-top: 30px;">
  <button onclick="scrollToTop()" style="
    padding: 10px 15px; 
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
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
