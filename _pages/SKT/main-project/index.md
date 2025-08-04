---
title: "✨ SKT Fly Ai - 미세먼지 예측 기반 IoT 시스템"
layout: category
permalink: _pages/SKT/main-project/
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

---

## 개발 과정 기록

- [ 프로젝트 진행 중 겪은 어려움](/SKT/main-project/difficulties/)
- [ AI 모델링 ](/SKT/main-project/difficulties/)  
- [ IoT 센서 구성 및 코드](/SKT/main-project/iot-tech)
- [ 웹앱 개발 과정](/SKT/main-project/webapp)
- [ 회고 및 개선점](/SKT/main-project/reflection)
