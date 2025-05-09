<div style="text-align: left; margin-top: 20px; font-size: 80%; color: #cfcfcf;">
  <span>카테고리별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.</span>
</div>

### 🗂 유형별 문제

<div class="tab-container">
  <div class="tabs">
    <button class="tab-btn active" onclick="openTab(event, 'BFS')">BFS</button>
    <button class="tab-btn" onclick="openTab(event, 'DFS')">DFS</button>
    <button class="tab-btn" onclick="openTab(event, 'Dijkstra')">Dijkstra</button>
  </div>

  <div id="BFS" class="tab-content" style="display: block;">
    <table class="problem-table">
      <tr>
        <td>1</td>
        <td><a href="/Study/algorithm/silver/virus">📝 바이러스 문제</a> <span class="tag-box">2606</span></td>
      </tr>
      <tr>
        <td>2</td>
        <td><a href="/Study/algorithm/silver/connected-components">📝 연결 요소 문제</a> <span class="tag-box">11724</span></td>
      </tr>
    </table>
  </div>

  <div id="DFS" class="tab-content">
    <table class="problem-table">
      <tr>
        <td>1</td>
        <td><a href="/Study/algorithm/silver/maze-exploration">📝 미로 탐색 문제</a> <span class="tag-box">2178</span></td>
      </tr>
    </table>
  </div>

  <div id="Dijkstra" class="tab-content">
    <table class="problem-table">
      <tr>
        <td>1</td>
        <td><a href="/Study/algorithm/silver/shortest-path">📝 최단 경로 문제</a> <span class="tag-box">1753</span></td>
      </tr>
    </table>
  </div>
</div>

<style>
body {
  background-color: #1e1e1e;
  color: #cfcfcf;
}

.tab-container {
  margin: 20px 0;
}

.tabs {
  display: flex;
  justify-content: space-around;
}

.tab-btn {
  background: #333;
  color: #cfcfcf;
  border: 1px solid #444;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.tab-btn:hover, .tab-btn.active {
  background: #555;
  color: #fff;
}

.tab-content {
  display: none;
  margin-top: 10px;
}

.tab-content.active {
  display: block;
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
  background-color: #444;
  color: #fff;
  border-radius: 3px;
  padding: 2px 4px;
  margin-left: 5px;
}
</style>

<script>
function openTab(evt, tabName) {
  const contents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  const buttons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
</script>
