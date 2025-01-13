---
title: "✨ Club / Codeit_Boost"
layout: post
permalink: /Club/Codeit_Boost/
author_profile: true
sidebar_main: true
sidebar:
  nav: "sidebar-category"
  enabled: true
types: posts
taxonomy:

---

{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}


<span style="font-size:80%">✨ 각 주차별 내용은 링크를 통해 더 자세히 살펴보실 수 있습니다.</span><br>  


### 주차별 내용

**[What is Codeit Boost ?!](/Club/Club-details/What)**  


**[Codeit Boost 중앙 & 교내 OT](/Club/Club-details/OT)**
<span style="font-size:70%">2024.09.29</span><br>  

**[Codeit Boost 아티클 세미나 1](/Club/Club-details/article1)**
<span style="font-size:70%">2024.10.30</span><br>  

**[Codeit Boost 아티클 세미나 2](/Club/Club-details/article2)**
<span style="font-size:70%">2024.11.20</span><br>  

**[Codeit Boost 아티클 세미나 3](/Club/Club-details/article3)**
<span style="font-size:70%">2024.12.18</span><br>  




<br/>
