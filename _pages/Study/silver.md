---
title: "✨ Study / 백준 알고리즘 실버 문제해결"
layout: category
permalink: /Study/silver
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
  <span>✨ 카테고리별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.</span>
</div>

<br/>


### 유형별 문제

<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
  <tbody>
    <tr>
  <td style="padding: 8px;">1</td>
  <td style="padding: 8px;">
    <a href="/Study/algorithm/silver">📝 BFS(너비우선탐색)</a>
    <span class="tag-box" style="margin-left: 10px; display: inline-block; background-color: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">2606 바이러스 외...</span>
  </td>
</tr>
      <td style="padding: 8px;">2 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/2week">📝 Node.js를 이용한 웹 제작</a><br>
      <span class="tag-box">템플릿 엔진</span>
      <span class="tag-box">Express</span>
      <span class="tag-box">GET vs POST</span>
      </td>
      <td style="padding: 8px;">2025.01.02</td>
    </tr>
    <tr>
      <td style="padding: 8px;">⭐ 3 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/3week">📝 Node.js를 이용한 WebSocket Messages 구현 <br></a>
      <span class="tag-box">SocketIO</span>
      <span class="tag-box">WebSockets</span>
      <span class="tag-box">socketIO Room</span>
      </td>
      <td style="padding: 8px;">2025.01.09</td>
    </tr>
    <tr>
      <td style="padding: 8px;">4 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/4week">📝 Node.js 백엔드 구현 <br></a>
      <span class="tag-box">Rooms</span>
      <span class="tag-box">메시지 전송 기능</span>
      <span class="tag-box">Room Messages</span>
      <span class="tag-box">Adapter</span>
      </td>
      <td style="padding: 8px;">2025.01.16</td>
    </tr>
    <tr>
      <td style="padding: 8px;">5 Week</td>
      <td style="padding: 8px;"><a href="/Study/codeit-details/5week">📝 데이터베이스와 MYSQL</a><br>
      <span class="tag-box">데이터관리 - SQL</span>
      <span class="tag-box">schema</span>
      <span class="tag-box">index</span>
      </td>  
      <td style="padding: 8px;">2025.01.23</td>
    </tr>
  </tbody>
</table>

<br/>
