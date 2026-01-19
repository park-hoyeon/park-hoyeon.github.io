---
title: "✨ 그리디 / 구현 문제 모음"
layout: category
permalink: /Study/algorithm/silver/greedy
author_profile: true
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

<div style="text-align: left; margin-top: 20px; font-size: 80%; color: #cfcfcf;">
  그리디 / 구현 유형의 문제들을 모아서 정리하였습니다.<br/>
  <b>문제 제목을 클릭하면 해당 문제 풀이 페이지로 이동합니다.</b>
</div>

<br/>

### 문제 목록

<table class="problem-table" id="problemTable">
  <thead>
    <tr>
      <th>번호</th>
      <th>문제 이름</th>
      <th>문제 번호</th>
      <th>등급</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td><a href="/Study/algorithm/silver/1026">보물</a></td><td>1026</td><td>실버 4</td></tr>
    <tr><td>2</td><td><a href="/Study/algorithm/silver/1439">뒤집기</a></td><td>1439</td><td>실버 5</td></tr>
    <tr><td>3</td><td><a href="/Study/algorithm/silver/1966">프린터 큐</a></td><td>1966</td><td>실버 3</td></tr>
    <tr><td>4</td><td><a href="/Study/algorithm/silver/1697">숨바꼭질</a></td><td>1697</td><td>실버 1</td></tr>
    <tr><td>5</td><td><a href="/Study/algorithm/silver/11047">동전 0</a></td><td>11047</td><td>실버 4</td></tr>
    <tr><td>6</td><td><a href="/Study/algorithm/silver/11399">ATM</a></td><td>11399</td><td>실버 4</td></tr>
    <tr><td>7</td><td><a href="/Study/algorithm/silver/1931">회의실 배정</a></td><td>1931</td><td>실버 1</td></tr>
    <tr><td>8</td><td><a href="/Study/algorithm/silver/13305">주유소</a></td><td>13305</td><td>실버 3</td></tr>
    <tr><td>9</td><td><a href="/Study/algorithm/silver/2839">설탕 배달</a></td><td>2839</td><td>실버 4</td></tr>
    <tr><td>10</td><td><a href="/Study/algorithm/silver/1789">수들의 합</a></td><td>1789</td><td>실버 5</td></tr>
    <tr><td>11</td><td><a href="/Study/algorithm/silver/2941">크로아티아 알파벳</a></td><td>2941</td><td>실버 5</td></tr>
    <tr><td>12</td><td><a href="/Study/algorithm/silver/2231">분해합</a></td><td>2231</td><td>실버 5</td></tr>
    <tr><td>13</td><td><a href="/Study/algorithm/silver/1157">단어 공부</a></td><td>1157</td><td>실버 4</td></tr>
    <tr><td>14</td><td><a href="/Study/algorithm/silver/1978">소수 찾기</a></td><td>1978</td><td>실버 4</td></tr>
    <tr><td>15</td><td><a href="/Study/algorithm/silver/19941">햄버거 분배</a></td><td>19941</td><td>실버3</td></tr>
  </tbody>
</table>

<div id="tablePagination" class="table-pagination"></div>

<br/>

<style>
.problem-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.95rem;
  text-align: center;
}
.problem-table th {
  background-color: #3d3d3d;
  color: #ffffff;
  padding: 10px;
}
.problem-table td {
  background-color: #1e1e1e;
  color: #cceeff;
  padding: 12px;
  border-bottom: 1px solid #444444;
}
.problem-table tr:hover td {
  background-color: #2a2a2a;
  color: #ffffff;
  transition: 0.2s;
}
.problem-table a {
  color: #66ccff;
  font-weight: 600;
  text-decoration: none;
}
.problem-table a:hover {
  color: #00ffff;
  text-decoration: underline;
}

/* pagination */
.table-pagination {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}

.table-pagination .page-btn {
  background: #2a2a2a;
  border: 1px solid #444;
  color: #cfcfcf;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
}

.table-pagination .page-btn:hover {
  background: #3a3a3a;
  color: #ffffff;
}

.table-pagination .page-btn.active {
  background: #66ccff;
  color: #111;
  border-color: #66ccff;
  font-weight: 700;
}

.table-pagination .page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>

<script>
(function () {
  const rowsPerPage = 10;

  const table = document.getElementById("problemTable");
  if (!table) return;

  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  const pagination = document.getElementById("tablePagination");

  if (!pagination) return;

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  let currentPage = 1;

  function renderPage(page) {
    currentPage = page;

    rows.forEach((row) => (row.style.display = "none"));

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    rows.slice(start, end).forEach((row) => (row.style.display = ""));

    renderButtons();
  }

  function renderButtons() {
    pagination.innerHTML = "";
    if (totalPages <= 1) return;

    const makeBtn = (label, page, disabled = false, active = false) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.disabled = disabled;
      btn.className = "page-btn" + (active ? " active" : "");
      btn.addEventListener("click", () => renderPage(page));
      return btn;
    };

    pagination.appendChild(makeBtn("이전", Math.max(1, currentPage - 1), currentPage === 1));

    for (let p = 1; p <= totalPages; p++) {
      pagination.appendChild(makeBtn(String(p), p, false, p === currentPage));
    }

    pagination.appendChild(makeBtn("다음", Math.min(totalPages, currentPage + 1), currentPage === totalPages));
  }

  renderPage(1);
})();
</script>
