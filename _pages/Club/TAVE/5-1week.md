---
layout: single
title: "도메인 분석 설계"
permalink: /Club/TAVE/5-1week
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
# 섹션3. 도메인 분석 설계

# 요구사항 분석

### 기능 목록

| 회원 기능 | 상품 기능 | 주문 기능 | 기타 욕구사항 |
| --- | --- | --- | --- |
| 회원 등록 | 상품 등록 | 상품 주문 | 상품은 제고 관리 필요 |
| 회원 조회 | 상품 수정 | 주문 내역 조회 | 상품 종류: 도서, 음반, 영화 |
|  | 상품 조회 | 주문 취소 | 상품을 카테고리로 구분 |
|  |  |  | 상품 주문시 배송 정보 입력할 수 있다. |

---

# 도메인 모델과 테이블 설계

![image](/_pages/Club/images/TAVE/5week/image.png)  

### 회원, 주문, 상품의 관계

회원은 여러 상품을 주문할 수 있다. 

그리고 한 번 주문할 때 여러 상품을 선택할 수 있으므로 주문과 상품은 다대다 관계다. 

하지만 이런 다대다 관계는 관계형 데이터베이스는 물론이고 엔티티에서도 거의 사용하지 않는다. 

따라서 그림처럼 주문상품이라는 엔티티를 추가해서 다대다 관계를 일대다, 다대일 관계로 풀어냈다.

### 상품 분류

상품은 도서, 음반, 영화로 구분되는데 상품이라는 공통 속성을 사용하므로 상속 구조로 표현했다.

---

## 회원 엔티티 분석

![image](/_pages/Club/images/TAVE/5week/image 1.png)  

### 회원(Member)

이름과 임베디드 타입인 주소(  `Address`), 그리고 주문(   `orders`) 리스트를 가진다.

### 주문(Order)

한 번 주문시 여러 상품을 주문할 수 있으므로 주문과 주문상품(   `OrderItem`)은 일대다 관계다. 

주문은 상품을 주문한 회원과 배송 정보, 주문 날짜, 주문 상태(   `status`)를 가지고 있다. 

주문 상태는 열거형을 사용했는데 주문(   `ORDER`), 취소(   `CANCEL`)을 표현할 수 있다.

### 주문상품(OrderItem)

주문한 상품 정보와 주문 금액(   `orderPrice`), 주문 수량(   `count`) 정보를 가지고 있다. 

(보통   `OrderLine`,   `LineItem`으로 많이 표현한다.)

### 상품(Item)

: 이름, 가격, 재고수량(   `stockQuantity`)을 가지고 있다. 상품을 주문하면 재고수량이 줄어든다. 

상품의종류로는 도서, 음반, 영화가 있는데 각각은 사용하는 속성이 조금씩 다르다.

### 배송

: 주문시 하나의 배송 정보를 생성한다. 주문과 배송은 일대일 관계다.

### 카테고리(Category)

상품과 다대다 관계를 맺는다.   `parent`,   `child`로 부모, 자식 카테고리를 연결한다.

### 주소(Address)

: 값 타입(임베디드 타입)이다. 회원과 배송(Delivery)에서 사용한다.

---

## 회원 테이블 분석

![image](/_pages/Club/images/TAVE/5week/image 2.png)  

## 연관관계 매핑 분석

### 회원과 주문

일대다 , 다대일의 양방향 관계다. 

따라서 연관관계의 주인을 정해야 하는데, 외래 키가 있는 주문을 연관관계의 주인으로 정하는 것이 좋다. 

그러므로   `Order.member`를   `ORDERS.MEMBER_ID`외래 키와 매핑한다.

### 주문상품과 주문

다대일 양방향 관계다. 

외래 키가 주문상품에 있으므로 주문상품이 연관관계의 주인이다. 

그러므로  `OrderItem.order`를   `ORDER_ITEM.ORDER_ID`외래 키와 매핑한다.

### 주문상품과 상품

다대일 단방향 관계다.   `OrderItem.item`을   `ORDER_ITEM.ITEM_ID`외래 키와 매핑한다.

### 주문과 배송

일대일 양방향 관계다.   `Order.delivery`를   `ORDERS.DELIVERY_ID`외래 키와 매핑한다.

### 카테고리와 상품

  `@ManyToMany`를 사용해서 매핑한다.(실무에서 @ManyToMany는 사용하지 말자. 여기서는 다대
다 관계를 예제로 보여주기 위해 추가했을 뿐이다)

---

# 엔티티 클래스 개발

### 디렉토리 구조

![image](/_pages/Club/images/TAVE/5week/image 3.png)  

### /domain/Member.java

```java
@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>();
}
```

Member와 Order는 일대 다 관계이므로 @OneToMany를 붙여준다.

### /domain/Address.java

```java
@Embeddable
@Getter @Setter
public class Address {

    private String city;
    private String street;
    private String zipcode;
}
```

Address는 jpa의 어떤 내장 타입이기 때문에 @Embeddable을 붙인다.

### /domain/Order.java

```java
@Entity
@Table(name = "orders")
@Getter @Setter
public class Order {

    @Id @GeneratedValue
    @Column(name="order_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;

    private LocalDateTime orderDate;

    @Enumerated(EnumType.STRING)
    private OrderStatus status; //[ORDER, CANCEL]
}
```

Order와 Member는 다 대 일 관계이다. 따라서 @ManyToOne 을 붙인다.

또한 `@JoinColumn(name = "member_id")` 를 설정함으로써 foreign key 이름이 member_id가 된다.

### Member와 Order 엔티티에서 외래키(FK)는 어디에?!

DB에서는 항상 N 쪽에 외래키가 있다.
즉, `orders.member_id`가 `member.member_id`를 가리킵니다.
누

### 누가 관계의 주인일까?!

외래키를 가진 쪽이 **주인(owning side)** 이다.

```java
// 주인(owning side): 외래키를 직접 들고 있기 때문
@ManyToOne
@JoinColumn(name = "member_id")
private Member member;

```

반대로, 다음은 **거울(side, inverse / mappedBy)** 로 **읽기 전용 매핑이다.**

```java
// ← 주인이 아님. Order 엔티티의 member 필드를 "거울"로 본다
@OneToMany(mappedBy = "member")
private List<Order> orders = new ArrayList<>();

```

- `mappedBy = "member"` 의 의미: **“반대편(Order)에서 관계를 관리하는 필드 이름이 `member`”**
- 따라서 실제로 FK 값(`orders.member_id`)을 바꾸는 SQL은 **항상 주인(= `Order.member`)을 변경할 때** 발생한다.

### /domain/OrderItem.java

```java
@Entity
@Getter @Setter
public class OrderItem {

    @Id @GeneratedValue
    @Column(name = "order_item_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private int orderPrice;
    private int count;
}
```

### /domain/Delivery

```java
@Entity
@Getter @Setter
public class Delivery {

    @Id @GeneratedValue
    @Column(name = "delivery_id")
    private Long id;

    @OneToOne(mappedBy = "delivery")
    private Order order;

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;
}
```

---

## 상속관계

![image](/_pages/Club/images/TAVE/5week/image 4.png)  

![image](/_pages/Club/images/TAVE/5week/image 5.png)  

### item/Item.java

```java
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
}
```

@Inheritance

### item/Album

```java
@Entity
@Getter @Setter
@DiscriminatorValue("A")
public class Album extends Item{

    private String artist;
    private String etc;
}
```

### item/Movie

```java
@Entity
@DiscriminatorValue("M")
@Getter @Setter
public class Movie extends Item{

    private String director;
    private String actor;
}
```

### item/Book

```java
@Entity
@Getter @Setter
@DiscriminatorValue("B")
public class Book extends Item{

    private String author;
    private String isbn;
}
```

### domain/category.java

```java
`@Entity
@Getter @Setter
public class Category {

    @Id @GeneratedValue
    @Column(name = "category_id")
    private Long id;

    private String name;

    @ManyToMany
    @JoinTable(name = "category_item", joinColumns = @JoinColumn(name = "category_id"), inverseJoinColumns = @JoinColumn(name = "item_id"))
    private List<Item> items = new ArrayList<>();
    
    // 셀프 양방향 관계
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Category parent;

    @OneToMany(mappedBy = "parent")
    private List<Category> child = new ArrayList<>();
}
```

---

### 실행 결과 테이블 확인하기 (MySQL)

![image](/_pages/Club/images/TAVE/5week/image 6.png)  

---

# Entity 설계시 주의점

### 엔티티에는 가급적 Setter를 사용하지 말자!

Setter가 모두 열려있다. 변경 포인트가 너무 많아서, 유지보수가 어렵다. 나중에 리펙토링으로 Setter 제거

### 모든 연관관계는 지연로딩으로 설정!

- 즉시로딩(EAGER)은 예측이 어렵고, 어떤 SQL이 실행될지 추적하기 어렵다.
- 실무에서 모든 연관관계는 지연로딩(LAZY)으로 설정해야 한다.
- 연관된 엔티티를 함께 DB에서 조회해야 한다면, fetch join 또는 엔티티 그래프 기능을 사용한다.
- @XToOne(OneToOne, ManyToOne) 관계는 기본이 즉시로딩이므로 직접 지연로딩으로 설정해야 한다.

## 1) EAGER vs LAZY 한 번에 이해

- **EAGER(즉시 로딩)**
    
    엔티티를 조회하면 **연관된 것들도 자동으로** 같이 가져온다.
    
    - 장점: 당장 접근해도 NPE가 안 남.
    - 단점: **어떤 SQL이 언제 얼마나 나갈지 예측이 어려움**(JPA 구현체가 마음대로 JOIN/추가 SELECT를 섞음), 성능·N+1 문제 유발, 필요 없는 데이터까지 끌어옴.
- **LAZY(지연 로딩)**
    
    연관 엔티티는 **프록시(가짜)** 로 두었다가, 실제로 사용할 때 그 시점에 추가 쿼리로 가져온다.
    
    - 장점: **내가 원할 때만** 가져오므로 쿼리/성능을 통제하기 쉬움.
    - 단점: 트랜잭션 밖에서 접근하면 `LazyInitializationException` 가능 → **서비스 계층에서 트랜잭션을 유지**하거나, **필요 시 명시적으로 fetch join**을 써서 미리 가져오면 됨.

> 결론: 기본은 전부 LAZY로. 필요한 화면/요청마다 “무엇을 함께 가져올지”를 쿼리에서 결정해라.
> 

---

## 2) 왜 “모든 연관관계 LAZY 추천”일까?

1. **예측 가능성**:
    
    EAGER는 JPA 구현체가 JOIN/추가 SELECT를 섞어내서 로그를 보기 전까지 **무슨 SQL이 나갈지 알기 어렵다.**
    
2. **성능/트래픽 절약**:
    
    화면마다 필요한 연관만 가져오면 됨. (필요 없는 덩치 큰 컬렉션을 자동으로 끌고 오지 않음)
    
3. **N+1 문제 회피/통제**:
    
    필요한 곳은 `fetch join`이나 `@EntityGraph`, 프로젝션으로 **명시적으로** 해결한다.
    

---

## 3) 기본값 때문에 자주 낚이는 포인트

- `@ManyToOne`, `@OneToOne` **기본이 EAGER** →  **반드시 `fetch = LAZY`로 바꿔라.**
- `@OneToMany`, `@ManyToMany` 는 기본 LAZY(컬렉션은 원래 LAZY).

```java
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "member_id")
private Member member;

@OneToMany(mappedBy = "member") // 컬렉션은 기본 LAZY
private List<Order> orders = new ArrayList<>();

```

---

### 컬렉션은 필드에서 초기화 하자!

컬렉션은 필드에서 바로 초기화 하는 것이 안전하다.
 `null` 문제에서 안전하다.
하이버네이트는 엔티티를 영속화 할 때, 컬랙션을 감싸서 하이버네이트가 제공하는 내장 컬렉션으로 변경한다. 만약 `getOrders()` 처럼 임의의 메서드에서 컬력션을 잘못 생성하면 하이버네이트 내부 메커니즘에 문제가 발생할 수 있다. 따라서 필드레벨에서 생성하는 것이 가장 안전하고, 코드도 간결하다

---

### 연관관계 메서드

ex) Order.java

```java
public void setMember(Member member){
        this.member = member;
        member.getOrders().add(this);
    }
    public void addOrderItems(OrderItem orderItem){
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }
    public void setDelivery(Delivery delivery){
        this.delivery = delivery;
        delivery.setOrder(this);
    }
```

## 전제

JPA에선 **외래키(FK) 가진 쪽(=주인, owning side)** 를 바꿔야 DB에 반영된다.

하지만 **객체 그래프(컬렉션)** 도 직접 맞춰줘야 코드가 안 꼬임.

→ 그래서 “양쪽을 동시에 맞춰주는” **연관관계 편의 메서드**를 둔다.

---

## 1) `setMember(Member member)`

```java
this.member = member;           //  주인(Order)의 FK 값 설정 → DB에 반영되는 쪽
member.getOrders().add(this);   //  반대편 컬렉션도 동기화(메모리 일관성)

```

- FK는 `orders.member_id`(Order 쪽)에 있으니 **여기가 주인**.
- 두 번째 줄을 안 하면, `member.getOrders()`로 순회할 때 방금 추가한 주문이 안 보일 수 있음(새로 로드하기 전까지).

---

## 2) `addOrderItems(OrderItem orderItem)`

```java
orderItems.add(orderItem);      //  내 컬렉션에 추가(거울 쪽; DB 반영 아님)
orderItem.setOrder(this);       //  주인(OrderItem.order) 쪽 FK 설정 → DB 반영

```

- `@OneToMany(mappedBy="order")`라서 `Order.orderItems`는 **거울(주인 아님)**.
- 실제 FK는 `order_item.order_id`(OrderItem 쪽). 그래서 **마지막 줄이 핵심**.

---

## 3) `setDelivery(Delivery delivery)`

```java
this.delivery = delivery;       //  주인(Order)의 FK(delivery_id) 설정
delivery.setOrder(this);        //  반대편 참조도 동기화

```

- 여기서는 FK가 `orders.delivery_id`라 **Order가 주인**.

---

## 왜 꼭 “양쪽”을 맞춰야 하나?

- DB는 **주인만** 보면 되지만, 자바 코드에선 **양쪽을 타고 다니며 로직/뷰**를 만들기 때문에
    
    한쪽만 바꾸면 “컬렉션에 안 들어있네?” 같은 **버그**가 쉽게 남음.
    
- 이 메서드들은 그걸 **항상 안전하게** 해주는 “버튼”!



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
