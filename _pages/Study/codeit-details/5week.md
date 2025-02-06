---
title: "✨ Study / Codeit_Boost BE Study"
layout: category
permalink: /Study/Codeit%20Boost%20BE%20Study/
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

<div style="text-align: center; margin-top: 20px; font-size: 80%;">
  <span>✨ 각 주차별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.</span>
</div>

<br/>


### 주차별 내용

<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
  <tbody>
    <tr>
      <td style="padding: 8px;">1 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/1week">활동 보기</a></td>
      <td style="padding: 8px;">2024.12.26</td>
    </tr>
    <tr>
      <td style="padding: 8px;">2 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/2week">활동 보기</a></td>
      <td style="padding: 8px;">2025.01.02</td>
    </tr>
    <tr>
      <td style="padding: 8px;">⭐ 3 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/3week">활동 보기</a></td>
      <td style="padding: 8px;">2025.01.09</td>
    </tr>
    <tr>
      <td style="padding: 8px;">4 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/4week">활동 보기</a></td>
      <td style="padding: 8px;">2025.01.16</td>
    </tr>
    <tr>
      <td style="padding: 8px;">5 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/5week">활동 보기</a></td>
      <td style="padding: 8px;">2025.01.23</td>
    </tr>
  </tbody>
</table>

<br/>
