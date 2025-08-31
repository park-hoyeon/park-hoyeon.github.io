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

  

    <a class="diff-item" href="/SKT/main-project/difficulties/data-access/">
      <span class="diff-kicker">데이터 수집</span>
      <div class="diff-title">직접 패널 이미지를 촬영</div>
      <p class="diff-desc">데이터를 증강(Augmentation) 기법으로 확대</p>
    </a>




  </div>
</div>
