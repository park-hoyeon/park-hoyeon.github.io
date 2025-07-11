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
      <td style="padding: 8px;"><a href="/SKT/5">.<br></a>
      <span class="tag-box">ML 프레임워크 with 파이썬</span>
      <span class="tag-box">.</span>
      </td>
      <td style="padding: 8px;">2025.07.01 ~ 2025.07.02</td>
    </tr>
    
    <tr>
      <td style="padding: 8px;">AI 융합프로그래밍</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/6week">📝 baekjoon 알고리즘 문제 풀이<br></a>      
      <span class="tag-box">11650 좌표 정렬하기 (실버Ⅴ)</span>
      <span class="tag-box">1978 소수 찾기 (브론즈II)</span>
      <span class="tag-box">10773 제로 (실버Ⅳ)</span>
      </td>
      <td style="padding: 8px;">2024.11.04</td>
    </tr>
    <tr>
      <td style="padding: 8px;">⭐ 7 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/7week">📝 baekjoon 알고리즘 문제 풀이<br></a>
      <span class="tag-box">2108 통계 (실버 III)</span>
      <span class="tag-box">1764 듣보잡 (실버 IV)</span>
      </td>
      <td style="padding: 8px;">2024.11.11</td>
    </tr>
    <tr>
      <td style="padding: 8px;">8 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/8week">📝 baekjoon 알고리즘 문제 풀이<br></a>
      <span class="tag-box">2920 음계 (브론즈 II)</span>
      <span class="tag-box">1676 팩토리얼 0의 개수 (실버 V)</span>
      <span class="tag-box">1920 수 찾기 (실버Ⅳ)</span>
      </td>
      <td style="padding: 8px;">2024.11.18</td>
    </tr>
    <tr>
      <td style="padding: 8px;">9 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/9week">⌨️ HTML 웹 프로그래밍 학습<br></a>
      <span class="tag-box">웹 서버 제작</span>
      <span class="tag-box">Django</span>
      </td>
      <td style="padding: 8px;">2024.11.25</td>
    </tr>
    <tr>
      <td style="padding: 8px;">10 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/10week">⌨️ HTML 웹 프로그래밍 학습<br></a>
      <span class="tag-box">웹 서버 제작</span>
      <span class="tag-box">Django</span>
      </td>
      <td style="padding: 8px;">2024.12.02</td>
    </tr>
  </tbody>
</table>

<br/>
