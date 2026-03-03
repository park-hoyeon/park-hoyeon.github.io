---
layout: category
title: "프로그래머스 등급3 - 디스크 컨트롤러"
permalink: /Study/algorithm/Programmers/disk
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

## [디스크 컨트롤러 문제 바로 가기](https://school.programmers.co.kr/learn/courses/30/lessons/42627)

풀이 날짜: 2026-03-03

##### baekjoon 알고리즘 문제 풀이


<span style="color:yellow">풀이 코드</span>  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
import heapq

def solution(jobs):
    jobs.sort()
    n = len(jobs)
    
    time = 0
    finish = 0 
    total = 0
    idx = 0
    heap = []
    
    while finish < n:
        while idx < n and jobs[idx][0] <= time:
            req,dur = jobs[idx]
            heapq.heappush(heap, (dur,req))
            idx += 1
        
        if heap:
            dur, req = heapq.heappop(heap)
            time += dur
            total += (time - req)
            finish += 1
        
        else:
            time = jobs[idx][0]
    
    return total // n
    </code></pre>
</div>


---

### 문제 핵심
각 작업이 [요청시간, 소요시간]으로 주어질 때, **요청된 순간부터 작업이 끝날 때까지 걸린 시간의 평균을 최소화하는 것이 목표이다.
한 작업의 "걸린 시간"은 단순히 실행시간이 아니라 "대기시간+실행시간"까지 포함한 값이며, (완료시각 - 요청시각)으로 계산한다.
평균을 줄이기 위해서는, 현재 시점에 실행 가능한 작업들 중에서 소요시간이 짧은 작업을 먼저 처리하는 것이다.

---
### 왜 heapq(우선순위 큐)를 쓰는가
“현재 시각(time)까지 도착한 작업들” 중에서 매번 소요시간이 가장 짧은 작업을 즉시 꺼내야 한다. 리스트에서 매번 최소값을 찾으면 느리기 때문에,
heapq를 사용해서 최소힙으로 관리해야 한다.
힙에 (dur,req) 형태로 넣으면, 힙은 첫 번째 값인 dur 기준으로 정렬되므로 heappop() 한 번으로
"소요시간이 가장 짧은 작업"을 빠르게 선택 가능하다.

---

### jobs.sort()가 필요한 이유

코드에서 jobs.sort()는 요청시간 기준으로 작업을 정렬하기 위해 사용한다. 이렇게 정렬해두면, 현재 시간 time 기준으로 “도착한 작업”을 찾을 때 앞에서부터 순서대로 쭉 확인하다가 도착하지 않은 작업이 나오면 멈출 수 있다. 즉, 매 반복마다 전체 jobs를 전부 뒤지는 대신, 포인터(인덱스) idx를 이용해 각 작업을 딱 한 번만 힙에 넣는 구조를 만들 수 있다. 이게 성능에서 굉장히 중요했다.

---

### idx 포인터의 의미: “아직 힙에 안 넣은 다음 작업”

idx는 “jobs 리스트에서 아직 heap에 넣지 않은 작업의 시작 위치”를 뜻한다. jobs가 정렬되어 있으니, idx부터 앞으로만 이동하면 된다.
따라서 같은 작업을 여러 번 heap에 넣는 실수를 막을 수 있다.

---
### 도착한 작업을 heap에 모으자!
- while idx < n and jobs[idx][0] <= time:
여기에서 jobs[idx][0]는 요청시간(req)이다.
이 조건은 "아직 남은 작업이 있고, 그 작업이 현재 시각(time)까지 도착했다면(req<=time), heap에 넣어라" 라는 뜻이다.
그리고 idx += 1로 다음 작업으로 넘어간다. 중요한 점은 jobs.sort() 덕분에 한 번 도착하지 않은 작업을 만나면 그 뒤 작업들도 도착하지 않았으니 바로 멈춰도 된다는 것이다.

---
### 작업 처리 파트: heap에서 하나 꺼내 실행하기
heap이 비지 않았다면, 지금 당장 실행 가능한 작업이 있다는 뜻이다.
- dur, req = heapq.heappop(heap) : 소요시간이 가장 짧은 작업 선택
- time += dur : 현재 시각을 “그 작업이 끝난 시각”으로 점프
- total += (time - req) : 요청~완료까지 걸린 시간(대기+실행)을 누적
- finish += 1 : 완료한 작업 개수 증가
특히 total += (time - req)는 이 문제에서 가장 핵심적이었다.
실행한 시간(dur)”만 더하는 게 아니라, 요청 이후 기다린 시간까지 포함해야 평균 대기시간을 구할 수 있다.

---
### heap이 비었을 때: time을 다음 요청 시각으로 점프하는 이유
만약 heap이 비어있다면, 현재 시각(time)까지 도착한 작업이 하나도 없다는 뜻이다. 이 경우 CPU는 할 일이 없으므로 1초씩 증가시키는 방식도 가능하지만 비효율적이다. 그래서 다음 작업의 요청시간으로 바로 이동한다.
- time = jobs[idx][0]
  : “어차피 그 시각 전까지는 할 일이 없으니, 시간만 낭비하지 말고 다음 작업이 들어오는 순간으로 이동하자”라는 의미다.

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
