---
layout: single
title: "정렬과 이진탐색"
permalink: /Study/basic/sort
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

- [[Python] 코딩테스트 - 정렬](https://hi-hahahoho.tistory.com/140)
- [[알고리즘 / Python] 이분 탐색 / 이진 탐색 (Binary Search)](https://code-angie.tistory.com/3#google_vignette)    

---

## 백준 관련 문제

- [실버 문제 모음](https://park-hoyeon.github.io/Study/algorithm/silver/sort) 

---
## sort()
- 리스트 자체를 정렬하는 함수로, 원본 리스트를 직접적으로 변경하여 정렬된 결과를 반환한다. 즉 기존의 리스트를 수정하여 정렬된 결과를 반환한다.
- List 객체에서만 사용 가능하다.
- 리스트가 크거나 메모리가 제한된 환경에서 sort()함수를 사용하는 것이 효율적이다.

## sorted()
- 원본 데이터를 수정하지 않고 새로운 정렬된 리스트를 반환한다.
- 문법 예시: sorted(iterable, key=None, reverse=False)
- key는 정렬 기준을 설정하는 매개변수이다.
- reverse는 정렬 방향을 설정하는 매개 변수로 내림차순(True), 오름차순(False)값을 가진다.

- **sort() 코드 예시**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
lst = [3, 1, 4, 2, 5]

lst.sort() # 리스트를 오름차순으로 정렬
print(lst) # [1, 2, 3, 4, 5]

lst.sort(reverse=True) # 리스트를 내림차순으로 정렬
print(lst) # [5, 4, 3, 2, 1]
</code></pre>
</div>  


- **sorted() List 코드 예시**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
lst = [3, 1, 4, 2, 5]

new_lst1 = sorted(lst) # 리스트를 오름차순으로 정렬한 새로운 리스트를 반환
print(lst) # [3, 1, 4, 2, 5]
print(new_lst1) # [1, 2, 3, 4, 5]

new_lst2 = sorted(lst, reverse=True) # 리스트를 내림차순으로 정렬한 새로운 리스트를 반환
print(lst) # [3, 1, 4, 2, 5]
print(new_lst2) # [5, 4, 3, 2, 1]
</code></pre>
</div>

- **sorted() Tuple 코드 예시**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
tpl = tuple([3, 1, 4, 2, 5])

new_lst = sorted(tpl) # 튜플을 오름차순으로 정렬한 새로운 리스트를 반환
print(new_lst) # [1, 2, 3, 4, 5]
</code></pre>
</div>


---

## '이진탐색'의 개념

- **기본 개념**: 정렬된 정수의 리스트를 같은 크기의 두 부분 리스트로 나누고 필요한 부분에서만 탐색하도록 제한하여 원하는 원소를 찾는 알고리즘이다. 리스트 중간 부분에 찾는 원소가 있는지 확인하고, 없으면 위쪽에 있는지 아래쪽에 있는지 판단하여 맨 앞부터 검색하거나 중간부터 검색한다. 
- **동작 방식**
  1. 배열의 중간 값을 가져온다.
  2. 중간 값과 검색 값을 비교한다.
     2-1) 중간 값이 검색 값과 같으면 종료 (mid = key)<br>
     2-2) 중간 값이 검색 값보다 크다면 중간 값 기준 오른쪽 구간을 대상으로 탐색 (mid < key)<br>
     2-3) 중간 값이 검색 값보다 작으면 중간 값 기준 왼쪽 구간을 대상으로 탐색 (mid > key)<br>
     
- **시간 복잡**
  - 운이 좋다면 찾고자 하는 값이 중간값과 동일하여 탐색이 끝나지만, 최악의 경우에는 남은 데이터가 하나가 될 때 까지 반복한다.<br>
    전체 데이터 수가 N일때, 첫 번째 탐색 후 에는 N/2, 두 번째 탐색에서는 N/2 * 1/2, 세 번째 탐색에서는 N/2 * 1/2 * 1/2, K 번째 탐색에서는 ( 1/2 )^K × N 이 된다. 
  - 최악의 경우에는 남은 자료가 1개가 된다.  (1/2)^K x N = 1을 통해 계산하면 K = log2N 이 나온다.
    
- **While문으로 구현한 코드 예시**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
# 배열 arr에서 target 값의 인덱스를 이분탐색으로 찾아보자
def binary_search1(arr, target):
	target_index = 0
	arr.sort() # 배열 정렬
	start = 0 # 시작점
    end = len(arr) - 1# 종료점
    
    
    while start <= end:
    	mid = (start + end) // 2 # 중앙값
        
        if arr[mid] == target:  # 타겟값을 찾았다면
        	target_index = mid # target의 인덱스 값은 mid
            break # 반복문 종료
            
        elif arr[mid] > target: # 타겟값이 중앙값보다 크다면
        	start = mid + 1 # 시작지점을 중앙값 다음으로 옮기기
            
        elif arr[mid] < target: # 타겟값이 중앙값보다 작다면
        	end = mid - 1 # 종료지점을 중앙값 이전으로 옮기기
	
    return target_index # target의 인덱스값 반환
</code></pre>
</div>

- **재귀함수로 구현한 코드 예시**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
def binary_search2(arr, target, start, end):
	if start > end: return None # 원소가 없을 경우
    
	mid = (start + end) // 2
    
    if arr[mid] == target: return mid # 타겟값을 찾았다면 반환
    
    elif arr[mid] > target: # 중앙값이 타겟값보다 크다면
    	binary_search2(arr, target, mid + 1, end)  # 시작점을 중앙값 다음으로 옮기기
    
    elif arr[mid] < target: # 중앙값이 타겟값보다 작다면
    	binary_search2(arr, target, start, mid - 1) # 종료점을 중앙값 이전으로 옮기기
</code></pre>
</div>

---
## 다중 정렬과 익명함수 람다(lambda)
### list.sort()와 listed()
- list.sort()는 리스트에만 사용 가능하지만 sorted()는 리스트뿐만 아니라 딕셔너리, 튜플에서도 사용 가능하다.
- 정렬하기 전의 값이 필요하지 않다면 list.sort()가 더 효율적이다.

### 다중정렬
만약, 첫번째 열 값은 오름차순, 두 번째 열 값은 내림차순으로 정렬하고 싶으면?
다음과 같이 key 매개변수에 lambda 함수를 사용하면 된다.
  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
c = [[1,2],[3,9],[2,7],[2,1],[2,4],[3,1]]

c.sort(key=lambda x:(x [0],-x [1]))    #따라서 이 코드는 변수 c의 첫 번째 열 값으로 오름차순, 
print(c)				#두 번째 열 값으로 내림차순 하는 코드가 된다.

# sorted()의 이중 정렬도 방법이 동일하다.
c = [[1,2],[3,9],[2,7],[2,1],[2,4],[3,1]]
print(sorted(c, key=lambda x:(x [0],-x [1])))


# [[1, 2], [3, 9], [2, 7], [2, 1], [2, 4], [3, 1]]
# [[1, 2], [3, 9], [2, 7], [2, 1], [2, 4], [3, 1]]
</code></pre>
</div>


### 리스트 내 요소의 인덱스를 원소의 크기 순으로 정렬하기
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="python">
b = [12, 14, 23, 24, 16]
b_idx = sorted(range(len(b)), key = lambda k: b[k]) 

# 여기서 b_idx는 [0, 1, 4, 2, 3]이 된다.
</code></pre>
</div>

---




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
