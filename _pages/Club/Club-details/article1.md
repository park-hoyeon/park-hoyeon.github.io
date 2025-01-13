---
layout: category
title: "✨ Codeit Boost 아티클 세미나 1"
permalink: /Club/Club-details/article1
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - Codeit_Boost
  - Coding
  - Club
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  



---

<div style="font-size:80%"> (2024.10.30)<br/> </div>
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/article1.png">  

---

## 🚀 세미나 발표 주제
##    : Transaction Processing & Automation System

---
### 📌 데이터 관리의 필요

<div style="font-size:70%">
우리 생활 속 다양한 분야에서는 대규모 데이터를 안정적으로 처리해야 하는 상황이 발생합니다.<br> 
예를 들어, 은행의 거래 시스템은 하루에도 수백만 건의 입출금 내역을 정확하게 처리해야 하며, 보안 문제에도 철저히 대비해야 합니다.<br> 
여러명에게 동시에 이메일을 전송하거나 고객별 맞춤 메시지를 발송하는 대규모 작업이 필요할 뿐 아니라 온라인 쇼핑몰에서는 주문 접수부터 결제, 배송까지 수많은 고객 주문을 효율적으로 관리하는 시스템이 필수적입니다.<br> 
이러한 대규모 데이터 작업을 자동화하는 기술은 기업의 생산성과 서비스 품질을 높이는 중요한 요소가 됩니다.
</div>  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/Transaction1.png">  

---
### 📌 Transaction Processing이란?

<div style="font-size:70%">
✅ 다양한 데이터 작업을 안전하게 처리하는 프로세스를 의미합니다.<br>
✅ 하나의 작업을 위해 더이상 분할될 수 없는 명령어들의 모음, 즉 한번에 수행되어야 하는 일련의 연산 모음입니다.<br>
✅ 데이터베이스 내에서 하나의 그룹으로 처리되어야 하는 명령문들을 모아 놓은 논리적인 작업 단위로, 여러 개의 명령어 집합이 정상적으로 처리되면 제대로 종료됩니다.<br> 
✅ 하나의 명령어라도 잘못되면 전체 취소되는 특성이 있습니다.<br/>  
  
</div>  


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/Processing.png">  

---


### 📌 트랜잭션 처리는 왜 필요할까?

<div style="font-size:70%">
✅ 데이터의 일관성을 유지하면서 안정적으로 데이터를 복구하기 위해서 트랜잭션 처리가 필요합니다.<br>
✅ 데이터베이스에는 테이블에서 데이터를 읽어 온 후 다른 테이블에 데이터를 입력하거나 갱신하고 삭제하는데 처리 도중 오류가 발생하면 모든 작업을 원상태로 되돌리는 역할을 합니다.<br>
✅ 처리 과정이 모두 성공했을 때만 최종적으로 데이터베이스에 반영됩니다.<br/>  
</div>

---

#### 🔍 상황을 가정해봅시다!

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/Texample.png">  


<div style="font-size:70%">
1. 고객이 결제를 시도하면 시스템은 고객의 결제 승인 요청을 확인한다.<br>
2. 결제가 승인되면 주문 상태를 ‘처리 중’으로 업데이트한다.<br>
3. 동시에 재고에서 해당 상품을 차감한다.<br/>  
</div>  

.<br>
.<br>
.<br>

    
<span style="font-size:70%">
✅ 이 과정에서 만약 결제 승인에는 성공했지만 재고 차감에서 오류가 발생한다면?!</span><br/>  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/Texample2.png">  

<div style="font-size:70%">
1. 고객은 돈을 지불했음에도 불구하고 상품을 받을 수 없게 됩니다.<br>
2. 이를 방지하기 위해서 결제 승인과 재고 차감을 하나의 트랜잭션으로 묶어서 처리하는 것!!!<br/>  
  
</div>




<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/Texample3.png">  



<div style="font-size:70%">  
두 과정이 모두 성공해야만 결제가 성공적으로 완료되고, 만약 하나라도 실패한다면 결제와 재고 차감 모두 취소되어 오류를 방지할 수 있습니다. <br/>  
</div>


---
### 📌 Transaction Processing의 특성 4가지

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/images/Transaction4.png"> <br/> 

<div style="font-size:70%">  
✅ 원자성: 분해가 불가능한 최소의 단위로서 연산 전체가 처리되거나 전체가 처리되지 않아야 함 <br>
✅ 일관성: 실행을 성공적으로 완료하면 언제나 모순 없이 일관성 있는 데이터베이스 상태를 보존함<br>
✅ 고립성: 실행 중에 생성하는 연산의 중간 결과를 다른 트랜잭션이 접근할 수 없음<br>
✅ 영속성: 성공이 완료된 트랜잭션의 결과는 영속적으로 데이터베이스에 저장됨<br/>
</div>

---
### 📌 Transaction Processing의 중요성

<div style="font-size:70%">  
트랜잭션 관리 시스템은 자동화, 템플릿, 체크리스트 등 다양한 수준의 최적화를 제공하는 여러 데이터베이스 기술과 소프트웨어에 의존합니다.<br> 
또한 Microsoft와 같은 공급업체는 다양한 트랜잭션 관리 솔루션을 경쟁력 있는 가격으로 제공합니다.<br/></div>

---
### 📌 자동화 시스템과의 연관성

<div style="font-size:70%">  
자동화 시스템은 **트랜잭션 처리**와 밀접하게 연결되어 있습니다. 쿠팡과 같은 쇼핑몰 플랫폼에서는 매일 수만 건의 주문과 거래가 이뤄지기 때문에 자동화 시스템과 트랜잭션 처리를 통해 데이터를 실시간으로 다룬다.<br>  

예를 들어, **쿠팡**의 주문 처리 시스템에서는 자동화 시스템이 결제 단계에서부터 재고 관리, 배송 준비까지의 모든 과정을 트랜잭션으로 묶어 처리합니다. 고객이 결제를 시도하면 시스템은 자동으로 결제 승인과 재고 차감 작업을 동시에 수행하고, 문제가 발생하면 자동으로 오류를 감지하고 모든 과정을 원상태로 되돌립니다. 트랜잭션 처리와 자동화 시스템이 함께 작동하여 고객의 결제, 주문 확인, 재고 차감, 배송 준비를 **안정적이고 효율적으로 수행**할 수 있게 되는 것입니다!<br/></div>

---
### 📌 결론

<div style="font-size:70%">  
트랜잭션 처리는 데이터의 안정성과 일관성을 보장하고, 자동화 시스템은 이를 실시간으로 처리하여 대규모 데이터 작업을 최적화합니다.<br>
특히 쿠팡과 같은 시스템에서는 트랜잭션 처리와 자동화 시스템이 결합하여 데이터의 정확성을 높이고, 오류가 발생하면 빠르게 복구할 수 있는 기능을 제공함으로써, 고객 만족과 시스템 신뢰성을 동시에 유지할 수 있습니다. <br/></div>


---

[돌아가기: Club / Codeit_Boost](https://park-hoyeon.github.io/Club/Codeit_Boost/)  


<div style="text-align: right; margin-top: 30px;">
  <button onclick="scrollToTop()" style="
    padding: 10px 15x; 
    background-color: #FFEB46; 
    color: black; 
    border: 2px solid #FFEB46; 
    border-radius: 5px; 
    cursor: pointer; 
    font-size: 10px;">
    맨 위로 이동
  </button>
</div>

<script>
  // 맨 위로 이동하는 함수
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
