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

<div style="text-align: left; margin-top: 20px; font-size: 80%; color: #cfcfcf;">
  <span>카테고리별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.</span>
</div>

### 🗂 유형별 문제

<div class="tabs">
  <input type="radio" id="tab1" name="tab" checked>
  <label for="tab1">BFS</label>
  <input type="radio" id="tab2" name="tab">
  <label for="tab2">DFS</label>
  <input type="radio" id="tab3" name="tab">
  <label for="tab3">Dijkstra</label>

  <div class="tab-content" id="content1">
    <table class="problem-table">
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <a href="/Study/algorithm/silver/virus">📝 바이러스 문제</a>
            <span class="tag-box">2606</span>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <a href="/Study/algorithm/silver/connected-components">📝 연결 요소 문제</a>
            <span class="tag-box">11724</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="tab-content" id="content2">
    <table class="problem-table">
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <a href="/Study/algorithm/silver/maze-exploration">📝 미로 탐색 문제</a>
            <span class="tag-box">2178</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="tab-content" id="content3">
    <table class="problem-table">
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <a href="/Study/algorithm/silver/shortest-path">📝 최단 경로 문제</a>
            <span class="tag-box">1753</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
body {
  background-color: #1e1e1e;
  color: #cfcfcf;
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tab-content {
  display: none;
}

input[type="radio"]:checked + label + .tab-content {
  display: block;
  background: #2a2a2a;
  padding: 10px;
  border-radius: 8px;
}

.problem-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

.problem-table td {
  padding: 8px;
  border: 1px solid #444;
}

a {
  color: #61dafb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.tag-box {
  background-color: #333;
  color: #fff;
  border-radius: 3px;
  padding: 2px 4px;
  margin-left: 5px;
}

label {
  background: #333;
  color: #cfcfcf;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
}

label:hover {
  background: #444;
}
</style>
