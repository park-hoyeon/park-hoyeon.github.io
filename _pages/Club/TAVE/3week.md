---
layout: category
title: "MVC + DI(스프링 빈) + JPA(Spring Data) + AOP로 구성한 회원 관리 예제"
permalink: /Club/TAVE/3week
author_profile: true
sidebar_main: true
types: single
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - Coding
  - Club

notion_url: "https://jumbled-ship-7f2.notion.site/MVC-DB-26f6560b6e498024855ec4af8e1d5990?source=copy_link"
---

<!-- 페이지 전용 스타일 (인라인) -->
<style>
.keyword-badges { margin: 12px 0 20px; }
.keyword-badges .badge {
  display:inline-block; padding:6px 12px; margin:6px 8px 0 0;
  border:1px solid #e5e7eb; border-radius:9999px; text-decoration:none;
  font-size: 0.95rem; line-height: 1.25rem;
}
.keyword-badges .badge:hover { background:#f5f5f5; }
.cta-center { text-align:center; margin: 20px 0 6px; }
.cta-center a {
  display:inline-block; padding:10px 16px; border:1px solid #e5e7eb;
  border-radius:8px; text-decoration:none;
}
</style>

<!-- 키워드 뱃지: 클릭하면 노션으로 이동 -->
{% include keyword-link-badges.html
   url=page.notion_url
   labels="MVC, DI, JPA, AOP" %}

<div class="cta-center">
  <a href="{{ page.notion_url }}" target="_blank" rel="noopener">노션에서 자세히 보기 →</a>
</div>

---

{%- comment -%}

{%- endcomment -%}

{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}
