---
layout: single
title: "섹션6. 상품 도메인 개발"
permalink: /Club/TAVE/6-1week
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - Coding
  - Club
toc: true
toc_sticky: true
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

---

## 상품 엔티티 개발(비즈니스 로직 추가)

### 예외 추가(exceptioin/NotEnoughStockException)

```java
package jpabook.jpashop.exception;

public class NotEnoughStockException extends RuntimeException{

    public NotEnoughStockException() {
        super();
    }

    public NotEnoughStockException(String message) {
        super(message);
    }

    public NotEnoughStockException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotEnoughStockException(Throwable cause) {
        super(cause);
    }
}
```

### item 엔티티 코드

```java
package jpabook.jpashop.domain.item;

import jakarta.persistence.*;
import jpabook.jpashop.domain.Category;
import jpabook.jpashop.exception.NotEnoughStockException;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "dtype")
@Getter @Setter
public class Item {

    @Id @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private int price;
    private int stockQuantity;

    @ManyToMany(mappedBy = "items")
    private List<Category> categories = new ArrayList<>();

    //==비즈니스 로직==//
    // stock 증가
    public void addStock(int quantity){
        this.stockQuantity += quantity;
    }

    // stock 감소
    public void removeStock(int quantity){
        int restStock = this.stockQuantity - quantity;
        if (restStock < 0){
            throw new NotEnoughStockException("need more stock");
        }
        this.stockQuantity = restStock;
    }
}
```

- addStock( ): 파라미터로 넘어온 수만큼 재고를 늘린다. 이 매서드는 재고가 증가하거나 상품 주문을 취소해서 재고를 다시 늘려야 할 때 사용한다.
- remove( ): 파라미터로 넘어온 수만큼 재고를 줄인다. 만약 재고가 부족하면 예외가 발생한다. 주로 상품을 주문할 때 사용한다.

---

# 상품 리포지토리 개발

```java
package jpabook.jpashop.repository;

import jakarta.persistence.EntityManager;
import jpabook.jpashop.domain.item.Item;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    // 상품 저장
    public void save(Item item){
        if (item.getId() == null) {
            em.persist(item);
        } else{
            em.merge(item);
        }
    }

    // 아이템 하나 조회
    public Item findOne(Long id){
        return em.find(Item.class, id);
    }

    // 전체 아이템 조회
    public List<Item> findAll(){
        return em.createQuery("select i from Item i", Item.class)
                .getResultList();
    }
}
```

- 상품 저장 (public void save( ) 세부 내용)
    - item은 JPA에 저장하기 전까지는(처음에는) id가 없다.  그래서 데이터를 저장할 때는 JPA가 제공하는 persist를 사용한다.
    - item이 없다 = 완전히 새로 생성한 객체이다.
    - 만약 그게 아니라면 em.merge를 사용한다.

---

# 상품 서비스 개발

```java
package jpabook.jpashop.service;

import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.repository.ItemRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    // 상품 저장
    @Transactional
    public void saveItem(Item item){
        itemRepository.save(item);
    }

    // 상품 조회
    public List<Item> findItems() {
        return itemRepository.findAll();
    }

    public Item findOne(Long itemId){
        return itemRepository.findOne(itemId);
    }
}
```

- 상품 저장 (public void saveItem( )에 @Transactional 하는 이유
    - 위의 @Transactional (readOnly = true) 때문에 다시 @Transactional 을 사용함으로써 오버라이드 함.


---

[돌아가기: 2025 하반기 TAVE 16기 활동](https://park-hoyeon.github.io/Club/TAVE/)  

<div style="text-align: right; margin-top: 30px;">
  <button onclick="scrollToTop()" style="
    padding: 10px 15px; 
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
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
