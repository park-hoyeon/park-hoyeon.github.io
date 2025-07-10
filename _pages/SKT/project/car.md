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
Model 1에서는 OpenCV를 기반으로 이미지 전처리를 수행하여 그레이스케일 변환과 노이즈 제거, Canny 에지 검출했다. 
후보 중 가장 번호판에 가까운 영역을 선택하고, 기울어진 번호판에 대해 Perspective Transform을 적용해 정렬했다.
그리고 OCR을 위해서 이진화를 한 후 문자를 추출했다. <br>
하지만 이 과정을 진행하며 다양한 자동차 번호판 이미지에 이 모델을 진행할 때 bounding box가 잘못 인식되거나, 경계선이 끊기는 등의 문제가 발생했다. 이로 인해 box 결정 기준의 불명확성으로 확인됐고, morphology 연산을 추가하여 edge를 보완하며 개선했다. <br>

Model 2에서는 pipeline의 구조는 유지하면서도 전처리 단계의 이진화 시점을 앞당겼다.  이 과정에서 이진화를 후보 추출 전에 적용하는 방식이 OCR 성능에 미치는 영향을 테스트해보았다. 또한 번호판 추출 이후 해상도가 낮은 이미지에서도 인식 성능이 떨어지는 문제를 해결하기 위해 adaptive threshold, morphology, bilateral filter, 또는 skeleton 을 활용해봤다.<br>




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
