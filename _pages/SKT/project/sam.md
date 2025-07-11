---
title: "✨ SKT Fly Ai - Segment Anything Model"
layout: category
permalink: _pages/SKT/project/sam/ 
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
SAM은 기존 분할 모델들과는 달리, 사용자가 직접 점이나 박스 같은 프롬프트를 입력하면 원하는 객체만 분할할 수 있다. 특히, 사전에 학습된 클래스가 아니어도 분할이 가능한 제로샷 성능이 있다. 이 모델을 통해 단순히 이미지 속 모든 객체를 찾는 것이 아니라, 사용자가 원하는 것만 찾아내는 방식으로 전환한 점이 핵심이라 생각하였다. 이러한 기능을 가능하게 하는 기술 중 하나는 ViT-H 기반의 강력한 이미지 인코더라고 할 수 있다. <br>
ViT는 이미지를 조각낸 뒤, 텍스트처럼 처리하고 전체적인 문맥을 이해하는 방식이다. 따라서 이미지 속 패턴을 정교하게 파악할 수 있다. 또한 점, 박스, 텍스트 등의 프롬프트를 모두 256차원 벡터로 변환해주는 프롬프트 인코더 구조도 함께 설계되었다.


---

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드1.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드2.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드3.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드4.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드5.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드6.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드7.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드8.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드9.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드10.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드11.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드12.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드13.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드14.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드15.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드16.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드17.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드18.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드19.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드20.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드21.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드22.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드23.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드24.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드25.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드26.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드27.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드28.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드29.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드30.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드31.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드32.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드33.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드34.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드35.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드36.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드37.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드38.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드39.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드40.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드41.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드42.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드43.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드44.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드45.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드46.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드47.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드48.PNG">
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/SKT/image/sam/슬라이드49.PNG">


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
