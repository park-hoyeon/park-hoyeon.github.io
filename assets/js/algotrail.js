const problems = [
  {
    title: "배달",
    level: 2,
    platform: "Programmers",
    solvedDate: "2026-05-01",
    githubUrl: "https://github.com/park-hoyeon/Algorithm",
    type: "최단경로"
  },
  {
    title: "여행경로",
    level: 3,
    platform: "Programmers",
    solvedDate: "2026-04-28",
    githubUrl: "https://github.com/park-hoyeon/Algorithm",
    type: "DFS"
  },
  {
    title: "네트워크",
    level: 3,
    platform: "Programmers",
    solvedDate: "2026-04-24",
    githubUrl: "https://github.com/park-hoyeon/Algorithm",
    type: "BFS/DFS"
  },
  {
    title: "정수 삼각형",
    level: 3,
    platform: "Programmers",
    solvedDate: "2026-04-30",
    githubUrl: "https://github.com/park-hoyeon/Algorithm",
    type: "DP"
  },
  {
    title: "타겟 넘버",
    level: 2,
    platform: "Programmers",
    solvedDate: "2026-04-17",
    githubUrl: "https://github.com/park-hoyeon/Algorithm",
    type: "DFS"
  }
];

function formatToday() {
  const today = new Date();
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  document.getElementById("today-date").textContent = formatter.format(today);
}

function dateDiffFromToday(dateString) {
  const today = new Date();
  const target = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diff = today - target;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getReviewStage(problem) {
  const diff = dateDiffFromToday(problem.solvedDate);

  if (diff === 3) return "3일차 복습";
  if (diff === 7) return "7일차 복습";
  if (diff === 14) return "14일차 복습";

  return null;
}

function getTodayReviews() {
  return problems.filter(problem => getReviewStage(problem) !== null);
}

function renderSummary() {
  const total = problems.length;
  const reviews = getTodayReviews();
  const avgLevel =
    total === 0
      ? 0
      : (problems.reduce((sum, p) => sum + p.level, 0) / total).toFixed(1);

  document.getElementById("total-count").textContent = total;
  document.getElementById("review-count").textContent = reviews.length;
  document.getElementById("avg-level").textContent = `Lv.${avgLevel}`;

  document.getElementById("profile-total").textContent = total;
  document.getElementById("profile-review").textContent = reviews.length;
  document.getElementById("profile-streak").textContent = "1일";

  const todayGoal = 5;
  const todayDone = Math.min(reviews.length, todayGoal);
  const rate = Math.round((todayDone / todayGoal) * 100);

  document.getElementById("today-rate").textContent = `${rate}%`;
  document.getElementById("today-count").textContent = `${todayDone} / ${todayGoal} 문제`;
}

function renderTodayPlan() {
  const newList = document.getElementById("new-problem-list");
  const reviewList = document.getElementById("review-problem-list");

  newList.innerHTML = "";
  reviewList.innerHTML = "";

  const recommended = [
    { title: "DP 신규 문제 1개", tag: "DP" },
    { title: "BFS/DFS 신규 문제 1개", tag: "BFS" },
    { title: "구현 신규 문제 1개", tag: "구현" }
  ];

  recommended.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.title}</span>
      <span class="badge green">${item.tag}</span>
    `;
    newList.appendChild(li);
  });

  const reviews = getTodayReviews();

  if (reviews.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<span>오늘 복습할 문제가 없습니다</span><span class="badge green">휴식</span>`;
    reviewList.appendChild(li);
    return;
  }

  reviews.forEach(problem => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${problem.title}</span>
      <span class="badge orange">${getReviewStage(problem)}</span>
    `;
    reviewList.appendChild(li);
  });
}

function renderReviewTable() {
  const tbody = document.getElementById("today-review-table");
  tbody.innerHTML = "";

  const reviews = getTodayReviews();

  if (reviews.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4">오늘 복습 예정 문제가 없습니다.</td>
      </tr>
    `;
    return;
  }

  reviews.forEach(problem => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${problem.title}</td>
      <td>Lv.${problem.level}</td>
      <td><span class="badge orange">${getReviewStage(problem)}</span></td>
      <td><a href="${problem.githubUrl}" target="_blank">코드 보기</a></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderRecentTable(list = problems) {
  const tbody = document.getElementById("recent-table");
  tbody.innerHTML = "";

  const sorted = [...list].sort((a, b) => new Date(b.solvedDate) - new Date(a.solvedDate));

  sorted.slice(0, 8).forEach(problem => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${problem.title}</td>
      <td><span class="badge purple">Lv.${problem.level}</span></td>
      <td>${problem.solvedDate}</td>
      <td><a href="${problem.githubUrl}" target="_blank">보기</a></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderLevelChart() {
  const chart = document.getElementById("level-chart");
  chart.innerHTML = "";

  const counts = {};

  problems.forEach(problem => {
    const key = `Lv.${problem.level}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  const max = Math.max(...Object.values(counts), 1);

  Object.entries(counts)
    .sort()
    .forEach(([level, count]) => {
      const percent = Math.round((count / max) * 100);

      const row = document.createElement("div");
      row.className = "bar-row";
      row.innerHTML = `
        <strong>${level}</strong>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${percent}%"></div>
        </div>
        <span>${count}개</span>
      `;
      chart.appendChild(row);
    });
}

function bindSearch() {
  const input = document.getElementById("search-input");

  input.addEventListener("input", event => {
    const keyword = event.target.value.toLowerCase();

    const filtered = problems.filter(problem =>
      problem.title.toLowerCase().includes(keyword) ||
      problem.type.toLowerCase().includes(keyword)
    );

    renderRecentTable(filtered);
  });
}

function init() {
  formatToday();
  renderSummary();
  renderTodayPlan();
  renderReviewTable();
  renderRecentTable();
  renderLevelChart();
  bindSearch();
}

init();
