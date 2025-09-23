---
layout: single
title: "스택 & 큐 정리"
permalink: /Study/basic/stack
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

# 스택 & 큐
참고 자료

- [배열, 연결리스트, 스택, ](https://blog.naver.com/iodiness/223257378997)  

---

## 백준 관련 문제

- [9012 - 괄호](https://www.acmicpc.net/problem/9012)
- [10828 - 스택](https://www.acmicpc.net/problem/10828)
- [10773 - 제로](https://www.acmicpc.net/problem/10773)
- [1874 - 스택수열](https://www.acmicpc.net/problem/1874)

## 내 풀이 보기

- [백준 - 괄호](https://park-hoyeon.github.io/Study/algorithm/silver/9012)
- [백준 - 스택](https://park-hoyeon.github.io/Study/algorithm/silver/10828)
- [백준 - 제로](https://park-hoyeon.github.io/Study/algorithm/silver/10773)
- [백준 - 스택수열](https://park-hoyeon.github.io/Study/algorithm/silver/1874)  

---

## 스택(Stack)의 개념

- **기본 개념**: LIFO(Last In First Out), 나중에 들어온 데이터가 먼저 나가는 구조  
- **핵심 기능**
  - `push()` : 데이터 삽입  
  - `pop()` : 데이터 삭제  
  - `peek()` : 맨 위(top) 원소 반환, 데이터의 변화는 없음.
  - `isEmpty` : 스택이 비어있는지 여부 확인, 데이터 변화 없음.
- **장점**
  - 구현이 단순하고 빠름  
  - 데이터 저장 및 불러오는 속도가 빠름
- **단점**
  - 중간 원소 접근 불가능  
  - 크기 제한이 있으면 오버플로우 발생 가능
  - 데이터 최대 개수를 사전에 정해줘야 함.  
- **시간 복잡도**
  - 삽입, 삭제: `O(1)`  
  - 탐색: `O(n)`  

---

## 큐(Queue)의 개념

- **기본 개념**: FIFO(First In First Out), 먼저 들어온 데이터가 먼저 나가는 구조  
- **핵심 기능**
  - `enqueue()` : 데이터 삽입  
  - `dequeue()` : 데이터 삭제  
  - `front()` : 맨 앞 원소 확인  
  - `rear()` : 맨 뒤 원소 확인
  - `peek` : 큐의 맨 앞 데이터 조회
- **장점**
  - 순차적 데이터 처리에 적합 (버퍼, 프로세스 스케줄링)  
  - BFS 탐색, 캐시, 프린터 대기열 등 활용  
- **단점**
  - 중간 원소 접근 불가능  
  - 배열로 구현 시 메모리 낭비 발생 → **원형 큐** 또는 **링크드리스트 기반 큐** 필요  
- **시간 복잡도**
  - 삽입, 삭제: `O(1)`  
  - 탐색: `O(n)`  

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">

import queue

# 기본 Queue()
data_queue = queue.Queue()
data_queue.put(1)   # 1
data_queue.put(2)   # 1 → 2
data_queue.put(3)   # 1 → 2 → 3
print(data_queue.get())  # 1 출력
print(data_queue.get())  # 2 출력
</code></pre>
</div>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
import queue

# LifoQueue() → 나중에 들어간 데이터가 먼저 출력됨 (Stack과 동일)
data_queue = queue.LifoQueue()
data_queue.put(1)   # 1
data_queue.put(2)   # 2 → 1
data_queue.put(3)   # 3 → 2 → 1
print(data_queue.get())  # 3 출력
print(data_queue.get())  # 2 출력
</code></pre>
</div>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
import queue

# PriorityQueue() → 우선순위가 높은 순으로 출력되는 자료구조
data_queue = queue.PriorityQueue()
data_queue.put((10, 1))   # (10, 1)
data_queue.put((5, 2))    # (5, 2) → (10, 1)
data_queue.put((15, 3))   # (5, 2) → (10, 1) → (15, 3)

print(data_queue.get())   # (5, 2) 출력 (우선순위 5가 가장 높음)
print(data_queue.get())   # (10, 1) 출력
</code></pre>
</div>


---

## 연결 리스트(Linked list)의 개념

- **기본 개념**: 배열과 달리 연결되지 않고 떨어진 곳의 데이터를 경로로 지정해 관리하는 데이터 구조이다. 
- **장점**
  - 미리 데이터 공간을 할당할 필요가 없다.
  - 데이터 삭제 시 삭제할 노드와 그 이전 노드의 포인터만 수정하면 된다.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
ll = LinkedList()      # 링크드 리스트 선언
ll.add(1)              # 노드 1 추가
ll.add(2)              # 노드 2 추가
ll.add(3)              # 노드 3 추가
ll.print()             # 1 2 3 출력

ll.delete(2)           # 노드 2 삭제
ll.print()             # 1 3 출력

ll.delete(1)           # 노드 1 삭제
ll.print()             # 3 출력

ll.delete(3)           # 노드 3 삭제
print(ll.head)         # None 출력
</code></pre>
</div>

---

# 마무리

스택과 큐는 **알고리즘 기본 자료구조** 중 가장 핵심이 되는 개념이다. <br>
문제를 풀 때 **"순서"를 어떻게 처리할 것인가?** 에 따라 스택/큐 중 어떤 자료구조를 선택할지 결정하면 된다.

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
