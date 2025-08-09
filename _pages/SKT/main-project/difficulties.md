---
title: "주제 변경의 과정(미세먼지 예측 -> 음식 필터링)"
layout: category
permalink: /SKT/main-project/difficulties/
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

<!-- 본문 시작 -->

<style>
.page-wrap{margin:1rem 0}
.h1{font-size:1.4rem;color:#f5f5f5;margin:.2rem 0 1rem 0}
.lead{color:#cfcfcf;background:#1f2530;border:1px solid #2f4157;border-radius:10px;padding:.9rem;margin:0 0 1rem 0}
.section{margin:1.2rem 0}
.section h2{font-size:1.1rem;color:#eaeaea;margin:0 0 .5rem 0}
.p{color:#d8d8d8;margin:.25rem 0}
.ul{margin:.3rem 0 0 1.1rem}
.tag{display:inline-block;background:#2a2a2a;border:1px solid #555;border-radius:999px;padding:.15rem .6rem;font-size:.78rem;color:#ddd;margin-right:.3rem;margin-top:.25rem}
.tbl{width:100%;border-collapse:collapse;margin:.6rem 0;border:1px solid #3a3a3a}
.tbl th,.tbl td{border:1px solid #3a3a3a;padding:.55rem;text-align:left;color:#ddd}
.note{background:#232323;border:1px solid #3a3a3a;border-radius:10px;padding:.8rem;margin:.9rem 0;color:#d6e3ef}
.small{color:#bdbdbd;font-size:.92rem}
</style>

<div class="page-wrap">

<div class="h1">프로젝트 진행 중 겪은 어려움 ① · 주제 선정/변경</div>

<div class="lead">
<strong>결론:</strong> <em>Findust – 24시간 후 미세먼지 예측</em>에서 
<strong>시각장애인 맞춤 음식 필터링 AI 시스템</strong>으로 전환. 
핵심 사유는 <u>개인정보/정책 리스크로 인한 CCTV 데이터 접근 불가</u>와 
<u>사용자 체감형 시각화의 난이도</u>였습니다.
</div>

<div class="section">
  <h2>1) 초기 주제 개요 — Findust (24시간 후 미세먼지 예측)</h2>
  <div class="p">공공 CCTV 영상과 기상/환경 데이터를 결합해 지역별 PM10/PM2.5를 24시간 후 예측하고, 지도 기반 대시보드/앱으로 제공하는 서비스.</div>
  <div class="ul">
    <div class="tag">시계열 예측</div>
    <div class="tag">CNN‑LSTM</div>
    <div class="tag">TCN</div>
    <div class="tag">환경 데이터 융합</div>
    <div class="tag">Random Forest 보간</div>
    <div class="tag">공공 데이터 활용</div>
  </div>
  <div class="p small"><strong>ESG 기대효과:</strong> 환경(E) 선제 대응, 사회(S) 민감군 보호, 거버넌스(G) 데이터 투명 공유</div>
  <div class="p small"><strong>SKT 적용 아이디어:</strong> 에이닷 날씨/대기 API 고도화, TMAP 경로 안내, ESG 플랫폼 연계</div>
</div>

<div class="section">
  <h2>2) 문제 발생 타임라인</h2>
  <table class="tbl">
    <tr><th style="width:120px">W1–W2</th><td>데이터 파이프라인/모델 구조 설계</td></tr>
    <tr><th>W3</th><td>공공/민간(딥비전스 등) 채널에 CCTV 영상 협조 요청</td></tr>
    <tr><th>W4</th><td>회신: 개인정보/보안/정책 사유로 <strong>공유 불가</strong></td></tr>
    <tr><th>W4–W5</th><td>ROI/마스킹/저장 금지 등 완화안 제시 → 리스크 여전히 높음</td></tr>
    <tr><th>W5</th><td>시각화 프로토타입 제작 → 체감형 UX 구현 난도 높음</td></tr>
    <tr><th>W6</th><td>멘토·부장님·교수님 피드백: “기술 의미는 크나, 현 시점 서비스화 난도↑. 주제 전환 권고”</td></tr>
  </table>
</div>

<div class="section">
  <h2>3) 데이터 접근 이슈 (개인정보/정책 리스크)</h2>
  <div class="p">핵심 데이터였던 공공 CCTV 영상의 외부 공유가 정책·법률·보안 규정상 사실상 불가.</div>
  <div class="p">비식별화(ROI, 모자이크), 저장 금지, 메타 최소화 등 대안을 제시했지만, “예외 허용 시 선례” 우려로 승인 곤란.</div>
  <div class="note">결국, <strong>데이터 접근성 자체가 불확실</strong>한 상황에서 프로젝트 지속은 리스크가 과도하다고 판단.</div>
</div>

<div class="section">
  <h2>4) 시각화/UX 관점 한계</h2>
  <div class="p">예측치를 사용자 행동으로 연결하는 UX가 어려움. (예: “PM10 72 → 나에게 어떤 안내가 필요?”)</div>
  <div class="p">기존 날씨/대기 서비스 대비 차별성 전달이 약했고, 모델 불확실성/오차 커뮤니케이션 설계 난도가 높았음.</div>
</div>

<div class="section">
  <h2>5) 의사결정 로그 (핵심 질문)</h2>
  <ul class="ul">
    <li>데이터 접근성이 프로젝트의 <strong>필수 전제</strong>인가?</li>
    <li>동일 노력으로 <strong>더 높은 체감 가치</strong>를 낼 수 있는가?</li>
    <li>마감까지 <strong>서비스형 결과물</strong>을 만들 수 있는가?</li>
  </ul>
  <div class="p small">피드백 공통점: 단기 서비스화 난도↑ → <strong>명확한 사용자군</strong>과 <strong>즉시성 높은 UX</strong>를 갖춘 대안 필요.</div>
</div>

<div class="section">
  <h2>6) 대안 평가 (요약 매트릭스)</h2>
  <table class="tbl">
    <tr>
      <th>대안</th><th>데이터 접근성</th><th>구현 난이도</th><th>사용자 체감도</th><th>서비스화</th>
    </tr>
    <tr>
      <td>CCTV 기반 대기질 예측(원안)</td><td>낮음</td><td>높음</td><td>중</td><td>중</td>
    </tr>
    <tr>
      <td>일반 대기 데이터 예측(축소)</td><td>중</td><td>중</td><td>중</td><td>중</td>
    </tr>
    <tr>
      <td><strong>시각장애인 맞춤 음식 필터링(채택)</strong></td><td><strong>높음</strong></td><td>중</td><td><strong>높음</strong></td><td><strong>높음</strong></td>
    </tr>
  </table>
  <div class="note">채택 사유: <strong>데이터 접근성</strong>이 높고, <strong>음성 안내(TTS)</strong>로 직관적 가치 전달이 가능하며, 모바일 실사용까지 연결 용이.</div>
</div>

<div class="section">
  <h2>7) 변경 후 방향 — 시각장애인 맞춤 음식 필터링 AI</h2>
  <div class="p"><strong>핵심 가치</strong>: “먹어도 되는지/피해야 하는지”를 실시간 음성으로 안내.</div>
  <ul class="ul">
    <li>YOLO 기반 <strong>객체 탐지</strong>로 식탁/접시 위 항목 인식</li>
    <li><strong>비식용·비선호 필터</strong> (종이·장식·이물, 고수/오이 등 사용자 취향)</li>
    <li><strong>TTS 음성 안내</strong> (타이밍/빈도 최적화, 즉시 재청취 지원)</li>
  </ul>
</div>

<div class="section">
  <h2>8) 리스크 & 대응</h2>
  <ul class="ul">
    <li><strong>오탐/미탐</strong>: 클래스 정의·라벨링 가이드 정교화, 후처리 휴리스틱</li>
    <li><strong>온디바이스 성능</strong>: Tiny/Nano 모델, 입력 리사이즈, 배터리 고려</li>
    <li><strong>TTS UX</strong>: 알림 빈도 억제, 요약 규칙, 한/영 혼용 발음 케어</li>
  </ul>
</div>

<div class="section">
  <h2>9) 배운 점</h2>
  <div class="p">데이터/정책/서비스의 교차 지점에서 실현 가능성을 초기에 검증하는 프레임의 중요성.</div>
  <div class="p">“정확도 향상”만이 아니라, <strong>사용자 체감 가치</strong>와 <strong>접근성</strong>을 최우선으로 설계하는 관점 확보.</div>
</div>

</div>
