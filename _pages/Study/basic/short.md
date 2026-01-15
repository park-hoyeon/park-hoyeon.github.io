---
layout: single
title: "DP"
permalink: /Study/basic/short
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

## 백준 관련 문제

- [실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/short) 

---
# 벨만–포드 vs 플로이드–워셜
- 벨만–포드(Bellman–Ford): “단일 시작점 최단거리 + 음수 간선/음수 사이클 판정”
- 플로이드–워셜(Floyd–Warshall): “모든 정점 쌍 최단거리(All-Pairs) 한 번에”

---

## 가장 중요한 차이: “시작점 개수”

#### 벨만–포드
- 시작점이 하나(혹은 소수)일 때 최적
- 예: “1번에서 모든 도시까지”, “S에서 모든 정점까지” 같은 문제.

#### 플로이드-워셜
- 시작점이 모든 정점인 문제에 적합
- 예: “모든 i→j 최단거리”, “i에서 j로 가는 최단거리 질문이 여러 번” 같은 문제.

---

## 데이터 구조 관점: “간선 리스트 vs 행렬”

#### 벨만-포드
- 입력 형태가 보통 간선 리스트: (a,b,c)
- dist 배열 하나로 충분.

#### 플로이드-워셜
- N×N 거리 행렬이 기본.
- dist[i][j] 초기화가 중요:
  - dist[i][i] = 0
  - 간선 있으면 dist[a][b] = min(dist[a][b], c)
  - 없으면 INF

---
## 음수 간선 / 음수 사이클 처리 능력

#### 벨만-포드
음수 사이클 판별 가능
- 핵심: n-1번 완화 후에도 더 줄어들면 음수 사이클
- 단, “시작점에서 도달 가능한 사이클”만 체크하려면 dist[a] != INF 조건 필요


---

#### 코드 형태 (벨만–포드)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
import sys
input = sys.stdin.readline

INF = 10**18

n, m = map(int, input().split())
edges = []
for _ in range(m):
    a, b, c = map(int, input().split())
    edges.append((a, b, c))

dist = [INF] * (n + 1)
dist[1] = 0   # 시작점

# 1️⃣ n-1번 완화 (최단거리 계산)
for _ in range(n - 1):
    updated = False
    for a, b, c in edges:
        if dist[a] != INF and dist[b] > dist[a] + c:
            dist[b] = dist[a] + c
            updated = True
    if not updated:   # 더 이상 정보 전달 없음
        break

# 2️⃣ 음수 사이클 검사
has_neg_cycle = False
for a, b, c in edges:
    if dist[a] != INF and dist[b] > dist[a] + c:
        has_neg_cycle = True
        break

# 3️⃣ 출력
if has_neg_cycle:
    print(-1)
else:
    for i in range(2, n + 1):
        print(dist[i] if dist[i] != INF else -1)


</code></pre>
</div>  

---

#### 코드 형태 (플로이드–워셜)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
import sys
input = sys.stdin.readline

INF = 10**18

n, m = map(int, input().split())

# 거리 행렬 초기화
dist = [[INF] * (n + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    dist[i][i] = 0

# 간선 입력
for _ in range(m):
    a, b, c = map(int, input().split())
    dist[a][b] = min(dist[a][b], c)  # 중복 간선 처리

# 플로이드–워셜
for k in range(1, n + 1):
    for i in range(1, n + 1):
        if dist[i][k] == INF:
            continue
        for j in range(1, n + 1):
            if dist[k][j] == INF:
                continue
            if dist[i][j] > dist[i][k] + dist[k][j]:
                dist[i][j] = dist[i][k] + dist[k][j]

# 결과 출력 예시 (i → j)
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(dist[i][j] if dist[i][j] != INF else 0, end=" ")
    print()

</code></pre>
</div>  

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
