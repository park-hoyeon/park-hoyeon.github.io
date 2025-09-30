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

### 참고 자료

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
  - `존재 확인(in)` : set에 특정 원소가 있는지 물어본다.
  - `합집합(|)`
  - `교집합(&)`
  - `차집합()`
    
- **장점**
  - 속도가 빠르다. 평균 시간 복잡도 O(1)

- **단점**
  - 순서가 없기 때문에, 리스트처럼 인덱스 번호로 특정 데이터에 접근할 수 없다.
  - 해시 테이블처럼 '키-값'쌍으로 데이터를 저장하는 게 아니라, 데이터 값 자체만을 저장한다.

- **코드 예시**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
# 집합 생성
class_a = set()

# 추가 A반 학생들
class_a.add("Alice")
class_a.add("Bob")
class_a.add("Alice")  # "Alice"는 이미 있으므로 중복 추가되지 않음
print(class_a)  # {'Alice', 'Bob'} (순서는 다를 수 있음)

# 존재 확인 "Bob"이 A반에 있나요?
print("Bob" in class_a)  # True
# "Charlie"가 A반에 있나요?
print("Charlie" in class_a)  # False

# 제거 "Bob"을 A반 명단에서 제외
class_a.remove("Bob")
print(class_a)  # {'Alice'}

# 집합 연산 B반 학생 명단
class_b = {"Bob", "Charlie", "Dave"}

# 교집합 A반과 B반에 모두 속한 학생은?
print(class_a & class_b)  # set() (현재 A반에는 Alice만 있으므로 공통 학생 없음)
# Alice도 B반에 있다고 가정하고 다시 교집합
class_a.add("Bob") # Bob을 다시 A반에 추가
class_a.add("Charlie") # Charlie도 A반에 추가
print(class_a & class_b) # {'Bob', 'Charlie'} (순서는 다를 수 있음)

# 합집합 A반 또는 B반에 속한 모든 학생은?
print(class_a | class_b)  # {'Alice', 'Bob', 'Charlie', 'Dave'} (순서는 다를 수 있음)
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
