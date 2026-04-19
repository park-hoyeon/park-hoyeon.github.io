---
layout: category
title: "프로그래머스 등급2 - 피로도"
permalink: /Study/algorithm/Programmers/piro
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - 2026-python-coding-study
  - Python
  - Coding
---

## [피로도 문제 바로 가기](https://school.programmers.co.kr/learn/courses/30/lessons/87946)

풀이 날짜: 2026-04-19

##### baekjoon 알고리즘 문제 풀이


<span style="color:yellow">풀이 코드</span>  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
def solution(k, dungeons):
    
    visited = [False] * len(dungeons)
    
    def dfs(k):
        max_count = 0
        
        for i in range(len(dungeons)):
            if not visited[i] and k >= dungeons[i][0]:
                visited[i] = True
                count = 1 + dfs(k-dungeons[i][1])
                visited[i] = False
                
                max_count = max(max_count, count)
        return max_count
    
    return dfs(k)
        
        
    </code></pre>
</div>


---

### 문제 핵심
이 문제는 단순히 조건을 만족하는 던전을 순서대로 도는 문제가 아니라, 던전의 순서에 따라 탐험 가능한 개수가 달라지는 완전탐색 문제이다. 즉, 모든 가능한 순서를 고려하여 최대로 탐험할 수 있는 던전의 개수를 구해야 한다

---
### 내가 처음에 틀린 이유
처음에는 단순 반복문과 while문을 사용해서 풀려고 했다. 하지만 이 방법은 던전을 한 번만 갈 수 있다는 조건을 고려하지 못하고, 특정 던전을 여러 번 반복해서 도는 구조가 되어버린다. 또한, 던전의 순서를 바꿔가며 탐색하지 않기 때문에 최적의 경우를 찾을 수 없다. 결국 이 문제는 단순 구현이나 그리디가 아니라, 모든 경우를 탐색해야 하는 문제라는 것을 깨달았다.

---

### 핵심 아이디어 (DFS)

DFS를 사용하여 현재 피로도에서 갈 수 있는 모든 던전을 하나씩 선택해보는 방식으로 해결할 수 있다. 하나의 던전을 선택하면 피로도가 줄어들고, 그 상태에서 다시 DFS를 호출하여 다음 던전을 탐색한다. 이 과정을 통해 가능한 모든 순서를 자연스럽게 탐색할 수 있으며, 그 중에서 가장 많은 던전을 탐험한 경우를 선택하면 된다.

---

### 핵심

- count = 1 + dfs(k - dungeons[i][1])
: 이 부분이 핵심인데, 1은 현재 선택한 던전, dfs(...)는 이후에 더 갈 수 있는 던전 개수를 의미한다. 즉, “지금 던전 1개 + 앞으로 가능한 최대 개수”를 더해주는 구조이다. DFS 함수는 항상 “앞으로 가능한 개수”만 반환하기 때문에, 현재 선택을 반영하려면 반드시 +1을 해줘야 한다.

---
### visited를 사용하는 이유
각 던전은 한 번만 탐험할 수 있기 때문에, 이미 방문한 던전을 다시 선택하지 않도록 visited 배열을 사용한다. DFS 탐색 중에는 해당 던전을 True로 설정하고, 탐색이 끝난 후에는 다시 False로 되돌려서 다른 경우의 수를 탐색할 수 있도록 한다. 이 과정을 백트래킹이라고 하며, 모든 경우를 빠짐없이 탐색하기 위해 반드시 필요하다.


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
