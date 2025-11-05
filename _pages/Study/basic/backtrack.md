---
layout: single
title: "백트래킹"
permalink: /Study/basic/backtrack
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

- [백트래킹 알고리즘](https://dev-ssongu1.tistory.com/37)


---

## 백준 관련 문제

- [실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/backtrack) 

---
## '백트래킹'이란
- 한정 조건을 가진 문제를 푸는 전략으로 모든 경우의 수를 시도해 문제의 정답을 찾아감
- 원리
  1. 각 단계에서 해결책 후보근 중 하나를 선택하고 이 선택이 조건을 만족하는지 검사
  2. 조건을 만족하지 않으면 이전 단계로 돌아가 다른 후보군 선택
  3. 1,2 과정을 반복하면서 최종적으로 해결책을 찾아가는 것이 백트래킹의 기본적인 원리
     


#### 코드 형
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
def 재귀함수(n):
	if 정답 :
		출력 or 저장
	else : # 정답이 아니면
		for 모든 자식 노드에 대해서:
			if 정답 가능성이 있으면:
				자식노드로 이동
				재귀함수(n+1)
				부모노드로 이동

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
