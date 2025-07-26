---
title: " [2025 하반기] 🎭 Myot - 뮤지컬 커뮤니티 플랫폼"
layout: category
permalink: /Project/myot/
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





<img src="/_pages/Project/myot/image/MyOT.png" >


---

##  세부 내용 보기

-  [백엔드 개발 세부 내용](/project-musical/backend-details/)
-  [기획 및 설계](/project-musical/planning/)
-  [고찰 및 회고](/project-musical/reflection/)
-  [시연 이미지 및 영상](/project-musical/demo/)
-  [GitHub & 배포 링크](/project-musical/github/)
