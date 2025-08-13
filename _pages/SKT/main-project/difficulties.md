---
title: "프로젝트 진행 중 겪은 어려움"
layout: single
permalink: /SKT/main-project/difficulties/
author_profile: true
sidebar:
  nav: "sidebar-category"
  enabled: true
---

<style>
.diff-wrap{margin:6px 0 18px}
.diff-grid{display:grid;gap:14px;grid-template-columns:1fr}
@media(min-width:860px){.diff-grid{grid-template-columns:1fr 1fr}}
.diff-item{
  display:block;text-decoration:none !important;color:inherit;
  background:#1f242d;border:1px solid #3c4556;border-radius:14px;
  padding:16px 18px;box-shadow:0 8px 22px rgba(0,0,0,.28);
  transition:transform .12s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;
}
.diff-item:hover{transform:translateY(-2px);border-color:#55607a;background:#242b36;box-shadow:0 12px 28px rgba(0,0,0,.38)}
.diff-kicker{display:inline-block;font:800 11px/1 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;letter-spacing:.03em;padding:4px 8px;border-radius:999px;background:#8cc8ff;color:#0b1020;margin-bottom:8px}
.diff-title{margin:0 0 4px;font-weight:800;font-size:1.05rem;color:#f4f7fb}
.diff-desc{margin:0;color:#c9d7ff;font-size:.93rem}
@media(prefers-color-scheme: light){
  .diff-item{background:#fff;border-color:#e5e7eb;box-shadow:0 6px 18px rgba(0,0,0,.08)}
  .diff-item:hover{background:#fff;border-color:#cfd5e1;box-shadow:0 10px 24px rgba(0,0,0,.12)}
  .diff-title{color:#0f172a}.diff-desc{color:#314e9b}
}
</style>

> 프로젝트를 진행하며 겪은 이슈들을 주제별로 정리했습니다. 카드를 클릭하면 **세부 기록**으로 이동합니다.

<div class="diff-wrap">
  <div class="diff-grid">

    <a class="diff-item" href="/SKT/main-project/difficulties/topic-change-1/">
      <span class="diff-kicker">주제 변경 #1</span>
      <div class="diff-title">미세먼지 예측 → 시각장애인 맞춤 음식 필터링</div>
      <p class="diff-desc">CCTV 데이터 접근 제한과 서비스 확장의 어려움</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/topic-change-2/">
      <span class="diff-kicker">주제 변경 #2</span>
      <div class="diff-title">음식 필터링 → 가전 터치패널 실시간 인터페이스 안내</div>
      <p class="diff-desc">사용자 인터뷰 결과: 실제 불편은 터치패드 사용. 목표·시나리오·변경 근거.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/data-access/">
      <span class="diff-kicker">데이터·정책</span>
      <div class="diff-title">공공/민간 CCTV 접근 불가 & 개인정보 리스크</div>
      <p class="diff-desc">비식별화·저장 금지 제안에도 불가. 대안 데이터 탐색과 정책 검토 기록.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/visual-ux/">
      <span class="diff-kicker">시각화·UX</span>
      <div class="diff-title">예측값/탐지결과 → 행동 안내로 번역하기</div>
      <p class="diff-desc">불확실성 전달, 우선순위 규칙, 접근성(저시력/무시각) 고려.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/modeling/">
      <span class="diff-kicker">모델링</span>
      <div class="diff-title">라벨/도메인 이슈와 성능 검증</div>
      <p class="diff-desc">미세먼지 예측(CNN‑LSTM/TCN)과 UI 인식(YOLO+OCR)에서의 공통 과제.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/ondevice/">
      <span class="diff-kicker">온디바이스</span>
      <div class="diff-title">모바일 추론 속도·발열·배터리</div>
      <p class="diff-desc">경량화, 입력 리사이즈, 캐싱/스케줄링, Fallback 설계.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/voice-ux/">
      <span class="diff-kicker">음성 안내</span>
      <div class="diff-title">TTS 빈도/타이밍/재청취 UX</div>
      <p class="diff-desc">피로도 최소화, 멀티 이벤트 요약, 안전 경고 우선순위.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/scope-time/">
      <span class="diff-kicker">범위·일정</span>
      <div class="diff-title">MVP 재정의와 마일스톤 리셋</div>
      <p class="diff-desc">리스크 기반 WBS 수정 히스토리, 데모 스코프.</p>
    </a>

    <a class="diff-item" href="/SKT/main-project/difficulties/collab/">
      <span class="diff-kicker">협업</span>
      <div class="diff-title">브랜치 전략·PR 템플릿·릴리즈 노트</div>
      <p class="diff-desc">데이터/모델/웹 3축 협업 규칙과 회고.</p>
    </a>

  </div>
</div>
