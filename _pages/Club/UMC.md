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
      <td style="padding: 8px;"><a href="/Club/Club-details/UMC0">📝 서버 처음 해보기</a><br>

      <span class="tag-box">인터넷 구성</span>
      <span class="tag-box">인터넷 통신</span>
      <span class="tag-box">Web Server</span>
      </td>
      <td style="padding: 8px;">2025.03.20</td>
    </tr>
    <tr>
      <td style="padding: 8px;"> 1 Week</td>
      <td style="padding: 8px;"><a href="/Club/Club-details/UMC1"> Database 설계</a><br>

      <span class="tag-box">DATABASE 설계</span>
      <span class="tag-box">로컬 DB 세팅</span>
      </td>
      <td style="padding: 8px;">2025.03.20</td>
    </tr>
    <tr>
      <td style="padding: 8px;">2 Week</td>
      <td style="padding: 8px;">
      <a href="https://jumbled-ship-7f2.notion.site/Chapter-2-SQL-Query-1c06560b6e4980ef8f6ff27b04b1ecd4?source=copy_link"> 실전 SQL - 어떤 Query를 작성해야 할까?</a><br>
      <span class="tag-box">SQL Injection</span>
      <span class="tag-box">테이블 쿼리</span>
      </td>
      <td style="padding: 8px;">2025.03.27</td>
    </tr>
    
    <tr>
      <td style="padding: 8px;">3 Week</td>
      <td style="padding: 8px;"><a href="https://jumbled-ship-7f2.notion.site/Chapter-3-API-URL-1c76560b6e49808c8190c62c166d2835?source=copy_link"> API URL의 설계 & 프로젝트 세팅<br></a>      
      <span class="tag-box">API 정리</span>
      </td>
      <td style="padding: 8px;">2025.04.03</td>
    </tr>
    
    <tr>
      <td style="padding: 8px;">4 Week</td>
      <td style="padding: 8px;"><a href="https://jumbled-ship-7f2.notion.site/Chapter-4-ES6-1cf6560b6e49802a8d93fd509235fdc3?source=copy_link">ES6와 프로젝트 파일 구조의 이해<br></a>
      <span class="tag-box">ES Module</span>
      <span class="tag-box">MVC 패턴</span>
      <span class="tag-box">비즈니스 로직</span>
      </td>
      <td style="padding: 8px;">2025.04.10</td>
    </tr>

    
    <tr>
      <td style="padding: 8px;">5 Week</td>
      <td style="padding: 8px;"><a href="https://jumbled-ship-7f2.notion.site/Chapter-5-API-1d26560b6e4980208f58f6d6cbb2f0f0?source=copy_link">API 및 프로젝트 설정 기초<br></a>
      <span class="tag-box">GitHub 이슈</span>
      <span class="tag-box">DB 연결</span>
      </td>
      <td style="padding: 8px;">2025.04.17</td>
    </tr>
    
    <tr>
      <td style="padding: 8px;">6 Week</td>
      <td style="padding: 8px;"><a href="https://jumbled-ship-7f2.notion.site/Chapter-6-ORM-1e36560b6e4980fc8dd8ea836ba4d273?source=copy_link">ORM 사용해보기<br></a>      
      <span class="tag-box">Prisma Schema에 Model 추가하기</span>
      </td>
      <td style="padding: 8px;">2025.04.24</td>
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
