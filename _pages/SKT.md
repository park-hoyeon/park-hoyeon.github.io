---
title: "✨ SKT Fly Ai 7기"
layout: category
permalink: /SKT/
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

<style>
.project-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}
.project-card {
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #3a3a3a;
  text-align: center;
  width: 200px;
  transition: transform 0.2s;
}
.project-card:hover {
  transform: scale(1.03);
  background-color: #2c2c2c;
}
.project-card a {
  color: #f1f1f1;
  text-decoration: none;
  font-weight: bold;
}
</style>

## Projects

<div class="project-cards">
  <div class="project-card">
    <a href="/_pages/SKT/project/car">
      <img src="/_pages/SKT/image/car/슬라이드1.PNG" >
    </a>
  </div>

  <div class="project-card">
    <a href="/_pages/SKT/project/dust">
      <img src="/_pages/SKT/image/미세먼지 예측 모델 (1).png" >
      <div></div>
    </a>
  </div>

  <div class="project-card">
    <a href="/_pages/SKT/project/sam">
      <img src="/_pages/SKT/image/sam/슬라이드1.PNG" >
      <div></div>
    </a>
  </div>




  
  <div class="project-card">
    <a href="/project/food-log">🍱 d</a>
  </div>
  <div class="project-card">
    <a href="/project/study-log">📚 d</a>
  </div>
</div>

### 주차별 내용

아래는 날짜별로 진행한 SKT FLY Ai 7기 활동 내용입니다.<br>

<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
  <tbody>
    <tr>
      <td style="padding: 8px;">Day1 / Day2</td>
      <td style="padding: 8px;"><a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/titanic.ipynb" target="_blank">타이타닉 실습/ </a>
      <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_6_24_house_value.ipynb"> 집 가격 예측/ </a>
      <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_6_24_소득_수준_예측_실습.ipynb"> 소득 수준 예측 실습</a><br>


      <span class="tag-box">Numpy</span>
      <span class="tag-box">Matplotlib</span>
      <span class="tag-box">Pandas</span>
      <span class="tag-box">머신러닝 실습</span>
      </td>
      <td style="padding: 8px;">2025.06.23 ~ 2025.06.24</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Day3</td>
      <td style="padding: 8px;"><a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_6_25_model_development.ipynb" target="_blank">모델 성능 향상 / </a>
      <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_6_25_project2.ipynb"> 인구 동향 출생 사망 혼인 이혼 분석</a><br>
      <span class="tag-box">머신러닝 실습</span>
      </td>
      <td style="padding: 8px;">2025.06.25</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Day4 / Day5</td>
      <td style="padding: 8px;">SKT 워크샵<br>     
      <span class="tag-box">인재개발원 </span>
      </td>
      <td style="padding: 8px;">2025.06.26 ~ 2025.06.27</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Day6</td>
         
      <td style="padding: 8px;"><a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_6_30_ANN.ipynb"> 심층 신경망 / </a>
      <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_6_30_Mutl_class_Classification.ipynb
">  다중퍼셉트론 모델</a><br>
            
      <span class="tag-box">이진분류</span>
      <span class="tag-box">다중분류</span>
      </td>
      <td style="padding: 8px;">2025.06.30</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Day7 / Day8</td>
      <td style="padding: 8px;"><a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_01_CNN.ipynb"> CNN - 이미지 분류, Transfer Learning / </a>
      <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_02_RNN.ipynb
"> RNN, 멀티레이어 LSTM /  </a><br>
<a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_02_텍스트_전처리.ipynb
"> 텍스트 전처리   </a><br>
      <span class="tag-box">ML 프레임워크 with 파이썬</span>
      <span class="tag-box">이미지 분리</span>
      </td>
      <td style="padding: 8px;">2025.07.01 ~ 2025.07.02</td>
    </tr>

    
    <tr>
  <td style="padding: 8px;">Day9</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-3-PyTorch-2256560b6e4980c09bb6e12d3b97ca1b?source=copy_link"> PyTorch 노션 기록 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_03_pytorch_practice.ipynb"> PyTorch 실습 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_03_딥러닝"> 합성곱 신경망 </a><br>
    <span class="tag-box">AI 융합프로그래밍</span>
  </td>
  <td style="padding: 8px;">2025.07.03</td>
</tr>





    
  </tbody>
</table>

<br/>
