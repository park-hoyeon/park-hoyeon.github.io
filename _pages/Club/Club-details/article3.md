---
layout: category
title: "✨ Codeit Boost 아티클 세미나 3"
permalink: /Club/Club-details/article3
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - Codeit_Boost
  - Coding
  - Club
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  



---

<div style="font-size:80%"> (2024.12.18)<br/> </div>
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/-article3.png">  

---

## 🚀 세미나 발표 주제
### : 차원 축소 - 주성분 분석(PCA) 데이터 분석
##### 고객의 소비 데이터 분석하기

---
<div style="font-size:70%">
주성분 분석(PCA)은 고차원 데이터를 저차원으로 축소하는 차원 축소 기법으로, 데이터의 분산(정보)을 최대한 보존한다.<br>
데이터 차원의 증가로 인해 발생하는 차원의 저주(dimensionality curse) 해결하며, 데이터 시각화, 특히 2D/3D 그래프를 활용하여 클러스터링 등 결과 해석할 수 있다.<br>
예: 고객의 소비 데이터를 분석하여 그룹화(클러스터링) 후, 각 그룹의 특성을 이해하여 맞춤형 마케팅 전략을 수립.
</div><br/>

##### 차원 축
<div style="font-size:70%">
데이터의 차원(특성의 수)을 줄이며 데이터의 중요한 정보를 최대한 보존하는 것
</div><br/>

##### 차원의 저주

<div style="font-size:70%">
머신 러닝에서 데이터의 차원이 증가할수록 해당 공간의 크기가 기하급수적으로 증가하며, 데이터 분석이나 모델 학습에 어려움을 초래하는 현상
</div><br/>


##### PCA
<div style="font-size:70%">
데이터의 주요 패턴을 캡처하면서 차원을 줄이는 분석 기법으로, 핵심 원리는 데이터의 분산을 최대화하는 주성분을 찾는 것이다.
</div><br/>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (32).png"> 

##### 최적의 기저
<div style="font-size:70%">
PCA를 수행할 때는 데이터의 구조를 가장 잘 반영하는 최적의 기저를 찾는 것이 중요하다.<br>
pca에서는 자동으로 분산이 최대가 되는 방향, 즉 데이터 간의 중복성이 가장 적은 방향을 최적의 기저로 찾아낸다.
</div><br/>


---


### 📌 PCA를 사용하는 이유?!

<div style="font-size:70%">
클러스터링 모델의 예측 결과에 사용한 독립변수가 너무 많으면 분류 결과를 그래프로 표현하기 어렵다.<br> 그렇다고 일부 독립 변수만 사용하여 그래프를 표현하면 정보가 왜곡된다.<br> 따라서 PCA로 변수를 압축하여 시각화에 활용한다.
</div><br/>

### 📌 주성분 분석(PCA) - 고객 소비 데이터 분석

#### ✅ 데이터 불러오기

<span style="color:yellow"> 📝 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
<aside>

import pandas as pd
import numpy as np

file_url = 'https://raw.githubusercontent.com/musthave-ML10/data_source/main/customer_pca.csv'
customer = pd.read_csv(file_url)

customer.head()

</aside>
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (33).png">  

<div style="font-size:70%">
고객별 총 지불 금액과 카테고리별 지출 금액이 스케일링 된 상태로 출력됨.<br>
산점도 그래프를 이용하여 클러스터가 잘 되었는지 확인하기!
</div><br/>

---

### 📌 그래프 표현을 위한 차원 축소 과정


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (34).png">  

<span style="color:yellow"> 📝 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
<aside>

from sklearn.decomposition import PCA

pca = PCA(n_components = 2) *#* 주성분 개수 : 몇 개의 변수로 줄일 것인가

pca.fit(customer_X) # pca의 학습에는 독립변수만을 사용한다 

*(독립변수의 수를 줄이는 것이 목적)*

customer_pca = pca.transform(customer_X) # pca의 변환에는 독립변수만을 사용한다

</aside>
  </code></pre>
</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (35).png">

<div style="font-size:70%">
PCA 결과물은 Numpy Array 형태이기 때문에 Pandas DataFrame 형태로 변환해주기!! </div><br/>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (36).png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (37).png">


---
### 📌 위 Dataframe에 종속변수(라벨) 붙이고, 산점도 그래프 그리기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/image (38).png"> 
: 산점도로 클러스터들이 얼마나 잘 나뉘었는지 대략적으로 파악한다.

### 📌 그래프 해석하기

<div style="font-size:70%">
✅ 보라색 클러스터: 대부분 왼쪽 아래에 몰려 있음 - 이 그룹의 고객은 다른 그룹과 구매 행동 패턴이 다르다. 보라색 클러스터에 속하는 고객들은 저가 상품에 관심이 많기 때문에 쿠폰을 제공해볼 수 있다.<br>
✅ 하늘색 클러스터: 오른쪽 위에 위치함 - 특정 제품 카테고리에 집중된 지출을 보여준다. <br> 
✅ 연두색 클러스터: 중앙 오른쪽에 흩어짐 - 소비 유형이 비교적 고르게 분포된 성향을 나타냄.<br>
✅ 빨간색 클러스터: 중앙 아래쪽에 위치함</div><br/>
→ 그래프를 통해 고객 그룹 간의 행동 패턴이 다르며, 일부 클러스터 간 구분이 명확함을 알 수 있었다.

---

### 📌 Cunclusion

<div style="font-size:70%">
고객 데이터를 시각화하고 클러스터링의 결과를 검증하였다.
주성분 분석(PCA)는 데이터의 주요 정보를 유지하면서도 차원을 축소해주기 때문에 효과적으로 쓰인다.
데이터의 분산을 최대한 보존하면서 차원을 줄이는 이 기법은 고차원 데이터를 다룰 때 차원 감소 기법을 적용하는 데에 활용된다.
따라서 고객 맞춤형 마케팅이나 추천 시스템 등의 데이터 기반 의사결정 과정에서 중요하다.</div><br/>



---

[돌아가기: Club / Codeit_Boost](https://park-hoyeon.github.io/Club/Codeit_Boost/)  


<div style="text-align: right; margin-top: 30px;">
  <button onclick="scrollToTop()" style="
    padding: 10px 15x; 
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
  // 맨 위로 이동하는 함수
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
