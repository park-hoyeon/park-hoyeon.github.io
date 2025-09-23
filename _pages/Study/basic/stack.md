---
layout: single
title: "스택 & 큐 정리"
permalink: /Study/stack
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

Codetree 코딩테스트 지도북 3차시, 스택(Stack) 과 큐(Queue)

- [블로그 정리글](https://blog.naver.com/jodiness/232257378997)  
- [유튜브 강의 1](https://www.youtube.com/watch?v=Z4R582Bn788)  
- [유튜브 강의 2](https://www.youtube.com/watch?v=YIlPiNjn0Js)  

---

## 문제 풀이 번호 및 깃허브

- (백준) **9012, 10828, 10773, 1874, 2493 (예시)**  
- [깃허브 문제 풀이 저장소](https://github.com/leewatertrue/Algorithm.git) (예시, 꼭 퍼블릭으로)

---

## 스택(Stack)의 개념

- **기본 개념**: LIFO(Last In First Out), 나중에 들어온 데이터가 먼저 나가는 구조  
- **핵심 기능**
  - `push()` : 데이터 삽입  
  - `pop()` : 데이터 삭제  
  - `peek()` : 맨 위(top) 원소 확인  
- **장점**
  - 구현이 단순하고 빠름  
  - 재귀/백트래킹/괄호검사/DFS 등에 활용  
- **단점**
  - 중간 원소 접근 불가능  
  - 크기 제한이 있으면 오버플로우 발생 가능  
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
- **장점**
  - 순차적 데이터 처리에 적합 (버퍼, 프로세스 스케줄링)  
  - BFS 탐색, 캐시, 프린터 대기열 등 활용  
- **단점**
  - 중간 원소 접근 불가능  
  - 배열로 구현 시 메모리 낭비 발생 → **원형 큐** 또는 **링크드리스트 기반 큐** 필요  
- **시간 복잡도**
  - 삽입, 삭제: `O(1)`  
  - 탐색: `O(n)`  

---

## 스택과 큐, 어떤 것을 사용해야 할까?

- **스택**
  - 괄호 짝 검사, DFS, 재귀 함수 처리, 되돌리기(Undo) 기능 등에 적합  
- **큐**
  - BFS 탐색, CPU 작업 스케줄링, 대기열 관리 등에 적합  
- **비교**
  - 스택: LIFO 구조 → 가장 마지막 작업을 빠르게 처리  
  - 큐: FIFO 구조 → 순서대로 공정하게 처리  
- **나에게 더 편한 것?**
  - 순서대로 처리해야 한다면 → 큐  
  - 최근 데이터 우선 처리해야 한다면 → 스택  

---

# 마무리

스택과 큐는 **알고리즘 기본 자료구조** 중 가장 핵심이 되는 개념입니다.  
문제를 풀 때 **"순서"를 어떻게 처리할 것인가?** 에 따라 스택/큐 중 어떤 자료구조를 선택할지 결정하면 됩니다.

---

[돌아가기:  알고리즘 - 기초 내용 보기](https://park-hoyeon.github.io/Study/basic/)   

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
