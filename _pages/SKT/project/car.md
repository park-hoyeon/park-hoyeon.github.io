---
title: "✨ SKT Fly Ai - 자동차 번호판 검출하기 (OCR)"
layout: category
permalink: _pages/SKT/project/car/
author_profile: true
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}

---
2020~2023년 강남구 미세먼지 데이터를 기반으로, LSTM 시계열 모델을 활용했다.<br> 
7일간의 데이터를 입력하면 다음 날 미세먼지 농도를 예측하도록 구현했다. <br>
모델은 2개의 LSTM 층과 Dense 층으로 구성되며, Huber Loss를 손실 함수로 사용하여 이상치에 대한 민감도를 줄이고 예측 안정성을 확보했다.<br>
그리고 MAE를 평가지표로 설정하며 EarlyStopping을 적용해 과적합을 방지하려 했다. <br>
검증 결과, val_loss는 0.022 수준으로 전반적인 경향 예측에 효과적임을 확인할 수 있었다. <br>




---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드1.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드2.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드3.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드4.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드5.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드6.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드7.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드8.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드9.PNG"> 
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드11.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드12.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드13.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드14.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드15.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드16.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드17.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드18.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드19.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드20.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드21.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드22.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드23.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드24.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드25.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드26.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드27.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드28.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드29.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드30.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드31.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드32.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드33.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드34.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드35.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드36.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드37.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드38.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/car/슬라이드39.PNG">


[돌아가기: SKT Fly Ai 활동](https://park-hoyeon.github.io/SKT/)  


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
