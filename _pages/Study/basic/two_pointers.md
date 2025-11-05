---
layout: single
title: "투 포인터"
permalink: /Study/basic/two_pointers
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

- [이것이 코딩테스트다 with Python - 투 포인터](https://www.youtube.com/watch?v=ttLRltNDiCo&list=PLVsNizTWUw7H9_of5YCB0FmsSc-K44y81&index=39)


---

## 백준 관련 문제

- [실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/two_pointers) 

---
## Two Pointers
- 투 포인터 알고리즘은 리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘이다.
- 흔히 2,3,4,5,6,7번 학생을 지목해야 할 때 간단히 '2번부터 7번까지의 학생'이라고 부른다.
- 리스트에 담긴 데이터에 순차적으로 접근해야 할 때는 시작점과 끝점 2개의 점으로 접근할 데이터의 범위를 표현한다.
- 기본 방식인 탐색(반복문)을 쓰면 시간이 오래 걸리거나 시간 초과가 걸리는 경우가 있다. 이때 투포인터를 사용하면 메모리와 시간 효율성을 높일 수 있다.

# 투 포인터의 2가지 방식
## 1. 앞에서 시작하는 포인터 끝에서 시작하는 포인터
#### 예제) 주어진 배열에서 합이 27인 경우를 찾아라.
[1,3,5,6,9,11,12,16,17,19,22,25,28]

#### 풀이
1. 시작점(start)과 끝점(end)을 정해 1, 28을 가리킨다.
2. 찾아야 하는 값(27)이 두 점의 합보다 작으면 end 포인터를 감소시킨다. (1,25)
3. 찾아야 하는 값(27)이 26보다 크면 start 포인터를 증가시킨다. (3,25)
4. 계속 진행하면서 값을 비교하고, 양쪽 포인터가 동일한 값(12,12)을 가리키면 더 이상 만족할 조건이 없으므로 종료한다.
조검: 배열의 중복 수가 없어야 하며, 수가 정렬되어 있어야 함.


#### 코드
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
arr = [3, 9, 25, 22, 1, 6, 5, 11, 19, 28, 17, 12, 16]  # 주어진 배열, 중복 수 없음
S = 27  # 목표 합계
arr.sort()
start, end = 0, len(arr) - 1

while start <= end:
    if arr[start] + arr[end] > S:
        end -= 1
    elif arr[start] + arr[end] < S:
        start += 1
    elif arr[start] + arr[end] == S:
        print(start, '번째 수 (', arr[start], ') +', end, '번째 수 (', arr[end], ')')
        end -= 1
        start += 1

</code></pre>
</div>  

## 2. 빠른 포인터가 느린 포인터보다 앞서는 형식 (토끼와 거북이)
#### 예제) 숫자가 들어가 있는 정렬된 배열에서 중복된 숫자를 제거하고, 새로운 배열의 길이를 출력해라.
- Input: [0,0,1,1,1,2,2,3,3,4]
- Output: 5

#### 풀이
1. 두 포인터 slow와 fast는 각각 인덱스 0과 1에서 시작한다.
2. fast가 인덱스 1부터 증가하게 되면서 조건(두 포인터의 숫자가 다르면)이 맞으면 slow를 앞으로 이동한 후, 그 숫자를 fast 포인터가 가리키는 숫자로 바꿔준다.

| 단계 | fast 위치 | arr[fast] | arr[slow] | 비교 결과 | slow 이동 후 배열 상태                |
| -- | ------- | --------- | --------- | ----- | ------------------------------ |
| ①  | 1       | 0         | 0         | 같음    | [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] |
| ②  | 2       | 1         | 0         | 다름    | [0, 1, 1, 1, 1, 2, 2, 3, 3, 4] |
| ③  | 3       | 1         | 1         | 같음    | 변화 없음                        |
| ④  | 5       | 2         | 1         | 다름    | [0, 1, 2, 1, 1, 2, 2, 3, 3, 4] |
| ⑤  | 7       | 3         | 2         | 다름    | [0, 1, 2, 3, 1, 2, 2, 3, 3, 4] |
| ⑥  | 9       | 4         | 3         | 다름    | [0, 1, 2, 3, 4, 2, 2, 3, 3, 4] |


#### 코드
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]  # 주어진 정렬된 배열
slow = 0  # 거북이 포인터

for fast in range(1, len(arr)):
    if arr[slow] != arr[fast]:
        slow += 1
        arr[slow] = arr[fast]

print("Output:", slow + 1)
print("중복 제거 후 배열:", arr[:slow + 1])

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
