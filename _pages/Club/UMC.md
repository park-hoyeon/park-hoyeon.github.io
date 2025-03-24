---
title: "✨ UMC"
layout: category
permalink: /Club/UMC/
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

⭐  **[What is UMC ?!](/Club/Club-details/UMC)**  

#### Node.js 워크북 수행 기록

<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
  <tbody>
    <tr>
      <td style="padding: 8px;"> 0 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/1week">📝 서버 처음 해보기</a><br>

      <span class="tag-box">인터넷 구성</span>
      <span class="tag-box">인터넷 통신</span>
      <span class="tag-box">Web Server</span>
      </td>
      <td style="padding: 8px;">2025.03.20</td>
    </tr>
    <tr>
      <td style="padding: 8px;"> 1 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/1week">📝 Database 설계</a><br>

      <span class="tag-box">DATABASE 설계</span>
      <span class="tag-box">로컬 DB 세팅</span>
      </td>
      <td style="padding: 8px;">2025.03.20</td>
    </tr>
    <tr>
      <td style="padding: 8px;">2 Week</td>
      <td style="padding: 8px;">
      <a href="/Study/codehive-details/2week">📝 실전 SQL - 어떤 Query를 작성해야 할까?</a><br>
      <span class="tag-box">Paging</span>
      </td>
      <td style="padding: 8px;">2025.03.27</td>
    </tr>
    <tr>
      <td style="padding: 8px;">3 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/3week">📝 Chapter 2. 실전 SQL - 어떤 Query를 작성해야 할까?<br></a>      
      <span class="tag-box">1138 한 줄로 서기 (실버Ⅱ)</span>
      <span class="tag-box">2525 오븐 시계 (브론즈Ⅲ)</span>
      <span class="tag-box">1037 약수 (브론즈 Ⅰ)</span>
      </td>
      <td style="padding: 8px;">2024.10.07</td>
    </tr>
    <tr>
      <td style="padding: 8px;">4 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/4week">📝 baekjoon 알고리즘 문제 풀이<br></a>
      <span class="tag-box">2750 수 정렬하기 (브론즈 Ⅱ)</span>
      <span class="tag-box">1259 팰린드롬수 (브론즈I)</span>
      <span class="tag-box">10814 나이순 정렬 (실버V)</span>
      </td>
      <td style="padding: 8px;">2024.10.14</td>
    </tr>
    <tr>
      <td style="padding: 8px;">5 Week</td>
      <td style="padding: 8px;"><a href="/Study/codehive-details/5week">⌨️ HTML 웹 프로그래밍 학습<br></a>
      <span class="tag-box">API</span>
      <span class="tag-box">HTML</span>
      </td>
      <td style="padding: 8px;">2024.10.28</td>
    </tr>
    <tr>
      <td style="padding: 8px;">6 Week</td>
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
