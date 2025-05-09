<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>BFS 문제 모음 | 백준 알고리즘</title>
    <style>
        body {
            background-color: #1e1e1e;
            color: #cfcfcf;
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        h1 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 20px;
            color: #61dafb;
        }

        .problem-card {
            background-color: #333;
            padding: 12px;
            margin: 8px 0;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .problem-card a {
            color: #61dafb;
            text-decoration: none;
        }

        .problem-card a:hover {
            text-decoration: underline;
        }

        .tag-box {
            background-color: #444;
            padding: 3px 6px;
            border-radius: 4px;
            font-size: 12px;
            color: #fff;
        }

        .problem-list {
            max-width: 600px;
            margin: auto;
        }
    </style>
</head>
<body>
    <h1>📝 BFS 문제 모음</h1>
    <div class="problem-list" id="problemList"></div>

    <script>
        // 문제 데이터
        const problems = [
            { number: "2606", title: "바이러스", link: "https://www.acmicpc.net/problem/2606" },
            { number: "11724", title: "연결 요소의 개수", link: "https://www.acmicpc.net/problem/11724" },
            { number: "1260", title: "DFS와 BFS", link: "https://www.acmicpc.net/problem/1260" },
            { number: "1697", title: "숨바꼭질", link: "https://www.acmicpc.net/problem/1697" }
        ];

        // 문제 리스트 동적 생성
        const problemList = document.getElementById("problemList");
        problems.forEach(problem => {
            const problemCard = document.createElement("div");
            problemCard.className = "problem-card";

            const problemLink = document.createElement("a");
            problemLink.href = problem.link;
            problemLink.textContent = `문제 ${problem.number}: ${problem.title}`;

            const problemTag = document.createElement("span");
            problemTag.className = "tag-box";
            problemTag.textContent = `번호: ${problem.number}`;

            problemCard.appendChild(problemLink);
            problemCard.appendChild(problemTag);
            problemList.appendChild(problemCard);
        });
    </script>
</body>
</html>
