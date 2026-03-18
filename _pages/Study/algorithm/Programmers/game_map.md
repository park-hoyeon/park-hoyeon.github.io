---
layout: category
title: "프로그래머스 등급2 - 게임 맵 최단거리"
permalink: /Study/algorithm/Programmers/game_map
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

## [게임 맵 최단거리 문제 바로 가기](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

풀이 날짜: 2026-03-18

##### baekjoon 알고리즘 문제 풀이


<span style="color:yellow">풀이 코드</span>  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
from collections import deque

def solution(maps):
    
    n = len(maps)
    m = len(maps[0])
    
    visited = [[False] * m for _ in range(n)]
    
    q = deque()
    q.append((0,0))
    visited[0][0] = True
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    while q:
        x,y = q.popleft()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= nx < n and 0 <= ny < m:
                if maps[nx][ny] == 1 and not visited[nx][ny]:
                    visited[nx][ny] = True
                    maps[nx][ny] = maps[x][y] + 1
                    q.append((nx,ny))
    
    if maps[n-1][m-1] == 1:
        return -1
    else:
        return maps[n-1][m-1]
        
    </code></pre>
</div>


---

### 문제 핵심
이 문제는 시작점 (0, 0)에서 도착점 (n-1, m-1)까지 이동할 때 지나야 하는 칸 수의 최솟값을 구하는 문제이다. 단순히 도착할 수 있는지만 판단하는 것이 아니라, “최단거리”를 구해야 하므로 DFS보다 BFS를 사용하는 것이 적절하다.

---
### 2차원 배열에서 행과 열 구하기
입력으로 주어지는 maps는 2차원 리스트 형태이므로, 먼저 행과 열의 크기를 파악해야 한다. n = len(maps)는 전체 행의 개수를 의미하고, m = len(maps[0])는 첫 번째 행에 들어 있는 원소 개수, 즉 열의 개수를 의미한다.

---

### 방문 여부를 저장하는 visited 배열

BFS에서는 이미 방문한 칸을 다시 큐에 넣지 않도록 방문 처리가 필요하다. 이를 위해 visited = [[False] * m for _ in range(n)] 형태의 2차원 배열을 만든다. 각 칸의 기본값은 False로 두고, 한 번 방문한 위치는 True로 바꿔준다. 이렇게 해야 같은 위치를 중복 방문하지 않게 되고, 불필요한 탐색을 줄일 수 있다.

---

### BFS를 위한 큐 초기화

BFS는 큐를 이용해 현재 위치에서 이동 가능한 다음 위치를 순서대로 탐색해 나간다. 따라서 deque를 사용하여 큐를 만들고, 시작점인 (0, 0)을 먼저 넣는다. 또한 시작점은 이미 탐색을 시작한 위치이므로 visited[0][0] = True로 방문 처리도 함께 해준다. 이 시작점 설정이 BFS의 출발점이 된다.


---
### 방향 배열을 이용한 상하좌우 이동
dx = [-1,1,0,0], dy = [0,0,-1,1]로 설정하여, 각각 위, 아래, 왼쪽, 오른쪽 이동을 의미하도록 만들었다. 이후 반복문에서 nx = x + dx[i], ny = y + dy[i]처럼 계산하면 현재 위치에서 네 방향으로 이동한 다음 좌표를 쉽게 구할 수 있다.

---
### BFS 탐색 과정
큐에서 현재 좌표 (x, y)를 하나 꺼낸 뒤, 그 위치에서 갈 수 있는 네 방향을 모두 확인한다. 새 좌표 (nx, ny)가 맵 범위 안에 있고, 벽이 아닌 길(maps[nx][ny] == 1)이며, 아직 방문하지 않은 칸이라면 그 칸으로 이동할 수 있다. 이때 visited[nx][ny] = True로 방문 처리한 뒤, maps[nx][ny] = maps[x][y] + 1로 현재 칸까지의 거리에서 1을 더해 다음 칸의 거리를 저장한다. 그리고 그 좌표를 큐에 넣어 나중에 다시 탐색한다.

---
### maps 배열에 거리 누적하기
이 코드의 핵심은 별도의 거리 배열을 만들지 않고, 기존 maps 배열 자체에 최단거리를 누적해서 저장한다는 점이다. 처음 시작점 (0, 0)의 값은 1이므로, 그 다음 칸은 2, 그 다음은 3처럼 값이 증가하게 된다.

---
### 도착점 판별 방식
모든 탐색이 끝난 뒤 도착점 (n-1, m-1)의 값을 확인하면 최종 결과를 알 수 있다. 만약 도착점의 값이 여전히 1이라면, 시작점의 초기값에서 한 번도 갱신되지 않았다는 뜻이므로 도달할 수 없는 경우로 보고 -1을 반환한다. 반대로 값이 2 이상으로 바뀌어 있다면, 그것이 시작점에서 도착점까지의 최단거리이므로 해당 값을 반환하면 된다.

---
### 내가 이 문제에서 정리한 핵심 포인트

이 문제를 통해 정리한 핵심은 세 가지이다. 첫째, 2차원 배열에서 BFS를 할 때는 큐와 방문 배열을 기본으로 준비해야 한다. 둘째, 상하좌우 이동은 방향 배열 dx, dy를 사용하면 훨씬 깔끔하게 구현할 수 있다. 셋째, BFS에서는 처음 방문하는 순간의 거리가 최단거리이므로, 별도의 거리 배열 없이도 기존 맵에 값을 누적하여 답을 구할 수 있다. 이 흐름을 이해하고 나니 격자 최단거리 문제의 기본 틀이 훨씬 명확해졌다.

---

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
