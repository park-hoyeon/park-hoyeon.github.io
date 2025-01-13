---
layout: category
title: "✨ Codeit Boost 아티클 세미나 2"
permalink: /Club/Club-details/article2
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

<div style="font-size:80%"> (2024.11.20)<br/> </div>
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/-article1.png">  

---

## 🚀 세미나 발표 주제
### : KNN(K-최근접 이웃) - 와인 등급 예측 모델 생성 

---
### 📌 와인 데이터 불러오기

<span style="color:yellow"> 📝 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
<aside>
<img src="/icons/drafts_purple.svg" alt="/icons/drafts_purple.svg" width="40px" /> 
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

file_url = 'https://media.githubusercontent.com/media/musthave-ML10/data_source/main/wine.csv'
data = pd.read_csv(file_url)    # 데이터셋 읽기
data.head()

</aside>
  </code></pre>
</div>

### 📌 Head() 함수 호출
##### : 데이터 형태 일부 살펴보기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winehead.png">  

<div style="font-size:70%">
변수는 총 13개입니다.<br>
가장 우측의 class - 목표변수 1개<br> 
나머지 12개 변수(alchol, malic_acid 등) -  독립변수 12개 </div><br/>

---
### 📌 Data.info() - 변수 특징 출력하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winedata.png">  

<div style="font-size:70%">
✅ alcohol: 전체 데이터가 178개가 있어야 하는데 176개이므로 결측치가 2개<br>
✅ nonflavanoid_phenols: 전체 데이터가 178개 있어야 하는데 173이므로 결측치가 5개<br> 
 → 파이썬에서는 이러한 결측치를 Null 값으로 표현합니다. </div><br/>

---

### 📌 위 데이터값이 KNN에서 문제가 되는 이유

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/wineproblem.png">  

<div style="font-size:70%">
✅ 변수마다 값의 범위가 다르기 때문입니다.<br>
✅ malic_acid의 최솟값은 약 0.74이고 최댓값은 5.8인데, proline은 최솟값이 278이며 최댓값이 1680입니다. 즉 스케일이 다르다는 것을 의미하는 것이죠. <br> 
 → 따라서 스케일링(scaling, 독립변수의 범위를 동일한 수준으로 맞추는 작업) 필요하다는 결론을 내릴 수 있습니다! </div><br/>

---

### 📌 종속 변수 분석하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winedetail1.png">  

<div style="font-size:70%">
✅ data에서 class 변수를 인덱싱하여 unique() 함수 사용<br>
→ 어떤 값들로 구성된 변수인지 확인 가능합니다.<br>
✅ class에는 0, 1, 2라는 고윳값 3가지가 있습니다.<br> 
→ 즉 와인을 세 등급으로 나눈다는 것을 의미합니다. </div><br/>

---

### 📌 종속 변수 분석하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winedetail2.png">  

<div style="font-size:70%">
✅ class 1: 71개 / class 0: 59개 / class 2: 48개 </div><br/>

---

### 📌 데이터 전처리 - 결측치 처리하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winemean.png">  

<div style="font-size:70%">
✅ dalchol과 nonflavanoid_phenols 컬럼은 0이 아닌 값이 나왔습니다.<br>
→ Data.info()로 결측치를 살폈듯이, 이 값은 해당 컬럼이 몇 퍼센트나 결측치가 존재하는지를 보여줍니다. </div><br/>

---

### 📌 dropna( ) : 결측치가 있는 행 전체를 제거하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winedro.png">  

<div style="font-size:70%">
✅ 현재 데이터에서 결측치가 7개 있기 때문에 7줄을 지웁니다.<br>
→ 해당 7줄을 지우면 178줄에서 total 171 줄 </div><br/>

---
### 📌 스케일링

<div style="font-size:70%">
앞서 describe()를 호출해 데이터를 살펴봤을 때, 각 컬럼들마다 값들의 범위가 다양했습니다.<br>
KNN은 거리 기반의 알고리즘이기 때문에, 이러한 스케일 문제가 안 좋은 결과를 초래할 수 있어서 알고리즘이 왜곡된 예측을 할 수 있다는 문제점이 존재합니다.<br>
이러한 문제를 해결하기 위해 인위적으로 각 컬럼이 비슷한 범위를 가지도록 만드는 작업을 스케일링이라 합니다.</div><br/>

<span style="color:yellow"> 📝 코드</span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
<aside>
from sklearn.model_selection import train_test_split

*# 독립변수와 종속변수*
X = data.drop('class', axis = 1)
y = data['class']

*# 훈련셋과 시험셋*
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 100)

*# 최소-최대 스케일링 사용*
from sklearn.preprocessing import MinMaxScaler
mm_scaler = MinMaxScaler()

*# 스케일링 학습*
mm_scaler.fit(X_train)

*# 스케일링 변환*
X_train_scaled = mm_scaler.transform(X_train)
X_test_scaled = mm_scaler.transform(X_test)

</aside>
  </code></pre>
</div>

---
<span style="color:yellow"> 📝 모델링 & 평가 </span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="font-size:60%; padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="python">
<aside>
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier()

*# KNN 분류 모델 생성*
knn.fit(X_train_scaled, y_train)

*# 학습*
from sklearn.metrics import accuracy_score
accuracy_score(y_test, pred)

*# 0.8888888888888888*

</aside>
  </code></pre>
</div>  


<div style="font-size:70%">
✅ 데이터를 독립변수와 종속변수로 분리한 후, 80:20 비율로 훈련셋과 테스트셋으로 나누고, 최소-최대 스케일링을 적용했습니다.<br> 
그런 다음 KNN 모델을 학습시키고, 테스트셋에 대한 정확도를 계산합니다. <br>
최종적으로 `accuracy_score`를 통해 모델 성능을 평가하여 약 88%의 정확도를 얻었습니다. </div><br/>


---
### 📌 정리

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winelast.png">  

---
### 📌 Conclusion

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/winedro.png">  

<div style="font-size:70%">
✅ 와인에 대한 정보를 이용하여 와인의 등급을 예측하는 모델을 만들어봤습니다.<br>  

✅ 데이터의 결측치와 통계적인 정보를 살펴본 후, KNN에서는 변수의 스케일이 중요하게 작용하기 때문에, 데이터셋에서의 변수의 스케일들을 살펴봤습니다. <br>  

✅ 이 데이터값들을 전처리하고 결측치를 처리하는 과정을 통하여 KNN 알고리즘을 이용하여 와인을 3개의 등급으로 분류하는 모델을 만들었습니다 </div><br/>


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
