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
      <td style="padding: 8px;"><a href="/Club/TAVE/OT"> 오리엔테이션</a><br>
      <span class="tag-box">TAVE 연합동아리란?</span>
      </td>
      <td style="padding: 8px;">2025.09.06</td>
    </tr>

    
    <tr>
      <td style="padding: 8px;">2 Week</td>
      <td style="padding: 8px;"> 전반기 만남의 장<br>
      <span class="tag-box">스터디 활동 기획</span>
      </td>
      <td style="padding: 8px;">2025.09.13</td>
    </tr>

    
    <tr>
      <td style="padding: 8px;">3 Week</td>
      <td style="padding: 8px;"><a href="/Club/TAVE/3week"> MVC + DI(스프링 빈) + JPA(Spring Data) + AOP로 구성한 회원 관리 예제 </a><br>
      <span class="tag-box">spring boot 입문</span>
      </td>
      <td style="padding: 8px;">2025.09.20</td>
    </tr>

    <tr>
      <td style="padding: 8px;">4 Week</td>
      <td style="padding: 8px;"><a href="/Club/TAVE/4week"> Spring Boot 입문 + Lombok + Thymeleaf(View) + H2 & JPA 기본 설정 + 트랜잭션/테스트 롤백 실습 </a><br>
      <span class="tag-box">spring boot 입문</span>
      <span class="tag-box">JPA</span>
      <span class="tag-box">테스트 롤백</span>
      </td>
      <td style="padding: 8px;">2025.09.27</td>
    </tr>

    <tr>
      <td style="padding: 8px;">5 Week</td>
      <td style="padding: 8px;">
        <a href="/Club/TAVE/5-1week"> 도메인 분석 설계 </a><br>
        <a href="/Club/TAVE/5-2week"> 애플리케이션 구현 준비 </a><br>
        <a href="/Club/TAVE/5-3week"> 회원 도메인 개발 </a>
      <span class="tag-box">엔티티 설계</span>
      <span class="tag-box">애플리케이션 아키텍처</span>
      <span class="tag-box">Member</span>
      </td>
      <td style="padding: 8px;">2025.10.04</td>
    </tr>

    
         
     


    
  </tbody>
</table>



<br/>
