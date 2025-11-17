---
layout: single
title: "DFS & BFS"
permalink: /Study/basic/graph
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

- [깊이우선탐색 vs 너비우선탐색](https://velog.io/@gusdh2/DFS-vs-BFS-%EA%B9%8A%EC%9D%B4%EC%9A%B0%EC%84%A0%ED%83%90%EC%83%89-vs-%EB%84%88%EB%B9%84%EC%9A%B0%EC%84%A0%ED%83%90%EC%83%89)


---

## 백준 관련 문제

- [BFS 실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/bfs)
- [DFS 실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/dfs) 

---
## '깊이 우선 탐색(DFS)'이란
: 루트 노드에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식이다.
- 모든 노드를 방문하고자 하는 경우에 이 방법을 선택한다.
- DFS가 BFS보다 조금 더 간단하다.
- 검색 속도 자체는 BFS에 비해서 느리다.
- 스택 또는 재귀함수로 구현 가능하다.

#### DFS 코드 형태
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
def dfs(graph, v, visited):
  visited[v] = True
  print(v, end = '')

  for i in graph[v]:
    if not visited[i]:
      dfs(graph, i, visited)

graph = [] # 그래프를 표현하는 인접 리스트(2차원 리스트)
visited = [] # 각 노드가 방문된 정보를 표현하는 1차원 리스트

dfs(graph, 1, visited) # dfs 함수 호출
</code></pre>
</div>  

## '너비 우선 탐색(BFS)'이란
: 루트 노드에서 시작해서 인접한 노드를 먼저 탐색하는 방법으로, 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법이다.
- 큐를 이용해서 구현 가능하다.

#### BFS 코드 형태
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
from collections import deque
# BFS 메소드 정의

def bfs(graph, start, visited):
  queue = deque([start])
  visited[start] = True

  # 큐가 빌 때까지 반복
  while queue:
    v = queue.popleft()
    print(v, end = '')

    for i in graph[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True

graph = [] # 그래프를 표현하는 인접 리스트(2차원 리스트)
visited = [] # 각 노드가 방문된 정보를 표현하는 1차원 리스트

bfs(graph, 1, visited) # bfs 함수 호출
</code></pre>
</div>  
  
## DFS와 BFS 문제 유형/응용
1. 그래프의 모든 정점을 방문하는 것이 주요한 문제
   - DFS, BFS 두 가지 다 사용 가능
2. 경로의 특징을 저장해둬야 하는 문제
   - ex) 각 정점에 숫자가 적혀 있고 a부터 b까지 가는 경로를 구하는데 경로가 같은 숫자가 있으면 안 된다.
   - DFS를 사용한다. (BFS는 경로의 특징을 가지지 못하기 때문)
3. 최단거리를 구해야 하는 문제
   - 미로 찾기 등 최단거리를 구해야 하는 경우, BFS가 더 유리하다.
   - 너비 우선 탐색으로 현재 노드에서 가까운 곳부터 찾기 때문에 경로를 탐색할 때 먼저 찾아지는 해답이 곧 최단거리이기 때문이다.



---


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
