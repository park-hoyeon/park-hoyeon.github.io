---
title: "✨ TAVE 16기"
layout: category
permalink: /Club/TAVE/
author_profile: true
sidebar_main: true
sidebar:
  nav: "sidebar-category"
  enabled: true
types: posts
taxonomy:

---

{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}


✨ 각 주차별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.<br>  


### 주차별 내용

⭐  **[What is TAVE ?!](/Club/TAVE/OT)**  

---

<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
  <tbody>
    <tr>
      <td style="padding: 8px;">1 Week</td>
      <td style="padding: 8px;"><a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/Club/TAVE/OT" target="_blank">오리엔테이션 </a><br>
      <span class="tag-box">TAVE 연합동아리란?</span>
      </td>
      <td style="padding: 8px;">2025.09.06</td>
    </tr>

    
    <tr>
      <td style="padding: 8px;">2 Week</td>
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
    <a href="https://jumbled-ship-7f2.notion.site/7-3-PyTorch-2256560b6e4980c09bb6e12d3b97ca1b?source=copy_link"> PyTorch 기록 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_03_pytorch_practice.ipynb"> PyTorch 실습 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_03_딥러닝"> 합성곱 신경망 </a><br>
    <span class="tag-box">AI 융합프로그래밍</span>
  </td>
  <td style="padding: 8px;">2025.07.03</td>
</tr>


<tr>
  <td style="padding: 8px;">Day10</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-4-CNN-YOLO-Seq2Seq-2266560b6e4980338addde87f4a644f2?source=copy_link"> CNN, YOLO, Seq2Seq, 자연어처리 기록 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_04_pytorch5.ipynb"> PyTorch5 실습 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_03_딥러닝"> 합성곱 신경망 </a><br>
    <span class="tag-box">AI 융합프로그래밍</span>
  </td>
  <td style="padding: 8px;">2025.07.04</td>
</tr>

<tr>
  <td style="padding: 8px;">Day11</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-5-Transformer-2276560b6e4980e7a245c4c410b451a9?source=copy_link"> Transformer 기록 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_05_Transformer.ipynb"> Transformer 실습  </a><br>
    <span class="tag-box">AI 융합프로그래밍</span>
  </td>
  <td style="padding: 8px;">2025.07.05</td>
</tr>

<tr>
  <td style="padding: 8px;">Day12</td>
  <td style="padding: 8px;">
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_07_OpenCV.ipynb"> 특정 색상 추출하기, 이미지  연산 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_07_OpenCV2.ipynb"> 보간법 /  </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_07_OpenCV(3).ipynb
"> Contours 처리  </a><br>
    <span class="tag-box">OpenCV 프로그래밍</span>
  </td>
  <td style="padding: 8px;">2025.07.07</td>
</tr>


<tr>
  <td style="padding: 8px;">Day13</td>
  <td style="padding: 8px;">
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_08_OpenCV.ipynb"> 모폴로지 영상처리, Skeletionzation / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_08_OpenCV2.ipynb"> OpenCV와 KNN을 활용한 이미지 분류 /  </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_08_Haar_Cascade얼굴인식_연결요소분석.ipynb
"> Connected Component Analysis  </a><br>
    <span class="tag-box">OpenCV 프로그래밍</span>
    <span class="tag-box">Trp-hat & Black-hat</span>
  </td>
  <td style="padding: 8px;">2025.07.08</td>
</tr>


<tr>
  <td style="padding: 8px;">Day14</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-9-openCV-OCR-22b6560b6e498030b41ac05e6133aed9?source=copy_link"> 차량 번호판 검출 및 OCR 문자 인식 / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_09_.ipynb"> MOG, KCF, Hough Line Transform  </a><br>
    <span class="tag-box">OpenCV 프로그래밍</span>
  </td>
  <td style="padding: 8px;">2025.07.09</td>
</tr>

<tr>
  <td style="padding: 8px;">Day15 / Day16</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-10-22c6560b6e4980aca332e273cceecde3?source=copy_link"> ResNet-50, Activity Learning, Diffusion Model  / </a>
    <a href="https://github.com/park-hoyeon/park-hoyeon.github.io/blob/master/_pages/SKT/skt_7_10_딥러닝.ipynb"> Bottleneck 블록 구현, UNet Model  </a><br>
    <span class="tag-box">딥러닝 </span>
  </td>
  <td style="padding: 8px;">2025.07.10 ~ 2025.07.11</td>
</tr>

<tr>
  <td style="padding: 8px;">Day17 ~ Day21</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-14-7-18-Cloud-Service-2306560b6e4980ab967cd1ef1b212d73?source=copy_link"> Cloud Service 개발 (애저) </a>
    <br>
    <span class="tag-box">가상 네트워크 </span>
    <span class="tag-box">가상머신 </span>
  </td>
  <td style="padding: 8px;">2025.07.14 ~ 2025.07.18</td>
</tr>

<tr>
  <td style="padding: 8px;">Day22 ~ Day26</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-21-7-23-2376560b6e49803b8403ee7a115c7770?source=copy_link"> 컨테이너 인프라 환경 구축 / </a>
    <a href="https://jumbled-ship-7f2.notion.site/7-24-Azure-23a6560b6e4980be9412c02ca303e78a?source=copy_link"> Azure 컨테이너 서비스</a>
    <br>
    <span class="tag-box">DevOps실습 </span>
    
  </td>
  <td style="padding: 8px;">2025.07.21 ~ 2025.07.25</td>
</tr>

<tr>
  <td style="padding: 8px;">Day27 ~ Day29</td>
  <td style="padding: 8px;">
    <a href="https://jumbled-ship-7f2.notion.site/7-21-7-23-2376560b6e49803b8403ee7a115c7770?source=copy_link"> 컨테이너 인프라 환경 구축 / </a>
    <br>
    <span class="tag-box">DevOps실습 </span>
    
  </td>
  <td style="padding: 8px;">2025.07.28 ~ 2025.07.30</td>
</tr>


    
  </tbody>
</table>



<br/>
