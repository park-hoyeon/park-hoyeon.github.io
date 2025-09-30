---
layout: single
title: "해시 테이블과 집합"
permalink: /Study/basic/hash
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

- [[Python] 해시(Hash)란 무엇인가(feat. Dictionary 자료구조)](https://amazelimi.tistory.com/entry/Python-%ED%95%B4%EC%8B%9CHash%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80feat-Dictionary-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0)  

---

## 백준 관련 문제

- [실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/hash) 

---

## 해시 테이의 개념

- **기본 개념**: 키(Key)를 주면 그에 해당하는 '값(Value)'을 찾아준다.  
- **핵심 기능**
  - `삽입(=)` : 키에 값을 붙여 해시 테이블에 넣는다. ex) score["A"] = 90  
  - `조회` : 키로 해시 테이블에서 값을 바로 꺼낸다.  ex) score["A]
  - `삭제(del)` : 키와 값을 함께 해시 테이블에서 없앤다.
  - `존재 확인(in)` : 특정 키가 해시 테이블에 있는지 물어본다. ex) "B" in score
- **장점**
  - 구현이 단순하고 빠름  
  - 순서 보장
- **언제 주로 사용할까?**
  - 빠른 검색이 필요할 때
  - 빈도를 세어야 할 때: 이 문자열에서 각 알파벳이 몇 번이나 등장했을까? 처럼 각 항목의 등장 횟수를 계산할 때 효과적이다.

- 코드 예시
  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
# 해시 테이블 (딕셔너리) 생성
scores = {}

# 삽입 "앨리스"는 90점, "밥"은 85점, "찰리"는 92점
scores["Alice"] = 90
scores["Bob"] = 85
scores["Charlie"] = 92
print(scores)  # {'Alice': 90, 'Bob': 85, 'Charlie': 92}

# 조회 "앨리스"의 점수는?
print(scores["Alice"])  # 90 (바로 찾아줍니다!)

# 존재 확인 "밥"이라는 학생이 있나요?
print("Bob" in scores)  # True (있습니다!)

# 삭제 "밥"의 점수 기록 지우기
del scores["Bob"]
print(scores)  # {'Alice': 90, 'Charlie': 92}

# 값 수정 "앨리스" 점수를 95점으로 변경
scores["Alice"] = 95
print(scores)  # {'Alice': 95, 'Charlie': 92}
</code></pre>
</div>

---

## 집합의 개념

- **기본 개념**: 중복된 데이터를 허용하지 않고, 오직 고유한 데이터들만 보관한다.
- **핵심 기능**
  - `삽입(add)` : set에 원소를 추가한다. ex) 참석자.add("A) 
  - `삭제(del)` : set에 특정 원소를 뺀다.  ex) 참석자.remove("B)  
  - `존재 확인(in)` : set에 특정 원소가 있는지 물어본다.  때

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
