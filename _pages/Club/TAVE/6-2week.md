---
layout: single
title: "섹션7. 주문 도메인 개발"
permalink: /Club/TAVE/6-2week
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

### 개발 순서

1. 주문 엔티티, 주문 상품 엔티티 개발
2. 주문 리포지토리 개발
3. 주문 서비스 개발
4. 주문 검색 기능 개발
5. 주문 기능 테스

# 주문, 주문상품 엔티티 개발

### 주문 엔티티(Order.java)

```java
.
.
.
//==생성 메서드==//
    public static Order createOrder(Member member, Delivery delivery, OrderItem... orderItems){
        Order order = new Order();
        order.setMember(member);
        order.setDelivery(delivery);
        for (OrderItem orderItem : orderItems){
            order.addOrderItem(orderItem);
        }
        order.setStatus(OrderStatus.ORDER);
        order.setOrderDate(LocalDateTime.now());
        return order;
    }
```

: 회원, 배송, 주문상품들을 한 번에 연결하고, 주문상태/주문시간까지 채워서 **완성된 주문 객체**를 만들어 돌려준다.

- 왜 static이고 왜 ‘생성 메서드’일까?
    - `static`이라서 **클래스 이름으로 바로 호출**하고, 내부에서만 `new Order()`를 써서 **일관된 초기화 규칙**을 지킨다.
- Order order = new Order();
    - 빈 주문서를 새로 한 장 만든다.
- order.setMember(member);
    - 주문서에 주문자를 적는다.
- order.setDelivery(delivery);
    - 주문서에 배송 정보를 붙인다.
- for ~
    - 전달 받은 주문상품들을 주문서에 한 개씩 붙인
- order.setStatus(OrderStatus.ORDER);
    - 주문서의 현재 상태를 ORDER로 표시한다.

### Order.java의 주문 취소 비즈니스 로직

```java
.
.
.
//==비즈니스 로직==//
    // 주문 취소
    public void cancel(){
        if (delivery.getStatus() == DeliveryStatus.COMP){
            throw  new IllegalStateException("이미 배송완료된 상품은 취소가 불가능합니다.");
        }
        this.setStatus(OrderStatus.CANCEL);
        for (OrderItem orderItem : orderItems) {
            orderItem.cancel();
        }
    }
   .
   .
```

orderItem.cancel()

코드 작성 후 아래와 같이 OrderItem.java에 메서드 추가한다.

### [OrderItem.java](http://OrderItem.java) 코드에 cancel 메서드 추가하기

```java
.
.
.
//==비즈니스 로직==//
    public void cancel() {
        //Add Stock에서 재고를 다시 주문 수량만큼 늘려야 한다.
        getItem().addStock(count);
    }
    
```

### [Order.java](http://Order.java) 조회 로직 추가하기

```java
//==조회 로직==//
    // 전체 주문 가격 조회
    public int getTotalPrice(){
        int totalPrice = 0;
        for (OrderItem orderItem : orderItems){
            totalPrice += orderItem.getTotalPrice();
        }
        return totalPrice;
    }
```

orderItem.getTotalPrice()로 인해 아래와 같이 OrderItem.java에 getTotalPrice 메서드를 추가한다.

### OrderItem.java

```java
		private int orderPrice; // 주문가격
    private int count;  // 주문 수량
    
   
   //==생성 메서드==//
    public static OrderItem createOrderItem(Item item, int orderPrice, int count){
        OrderItem orderItem = new OrderItem();
        orderItem.setItem(item);
        orderItem.setOrderPrice(orderPrice);
        orderItem.setCount(count);

        item.removeStock(count);
        return orderItem;
    }

    //==비즈니스 로직==//
    public void cancel() {
        //Add Stock에서 재고를 다시 주문 수량만큼 늘려야 한다.
        getItem().addStock(count);
    }

    public int getTotalPrice() {
        return getOrderPrice() * getCount();
    }
```

- 주문 취소(cancel())
    - getItem().addStock(count);를 호출해서 취소한 주문 수량만큼 상품의 재고를 증가시킨다.
- 주문 가격 조회(getTotalPrice())
    - 주문 가격에 수량을 곱한 값을 반환한다.

---

# 주문 리포지토리 개발

```java
package jpabook.jpashop.repository;

import jakarta.persistence.EntityManager;
import jpabook.jpashop.domain.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class OrderRepository {

    private final EntityManager em;

    public void save(Order order){
        em.persist(order);
    }

    // 주문 단권 조회
    public Order findOne(Long id){
        return em.find(Order.class, id);
    }
}
```

---

# 주문 서비스 개발

```java
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    // 주문 - 데이터를 변경하는 것이기 때문에 @Transactional이 있어야 한다.
    @Transactional
    public Long order(Long memberId, Long itemId, int count){

        // 엔티티 조회
        Member member = memberRepository.findOne(memberId);
        Item item = itemRepository.findOne(itemId);

        // 배송정보 생성
        Delivery delivery = new Delivery();
        delivery.setAddress(member.getAddress());

        // 주문상품 생성
        OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice(), count);

        // 주문 생성
        Order order = Order.createOrder(member, delivery, orderItem);

        // 주문 저장
        orderRepository.save(order);
        return order.getId();
    }

    // 주문 취소
    public void cancelOrder(Long orderId){
        // 주문 엔티티 조회
        Order order = orderRepository.findOne(orderId);
        // 주문 취소 
        order.cancel();
    }
```

- 주문(order( )): 주문하는 회원 식별자, 상품 식별자, 주문 수량 정보를 받아서 실제 주문 엔티티를 생성한 후 저장한다.
- 주문 취소(calcelOrder( )): 주문 식별자를 받아서 주문 엔티티를 조회한 후 주문 엔티티에 주문 취소를 요청한다.

## 참고! (도메인 모델 패턴 vs 트랜잭션 스크립트 패턴)

주문 서비스의 주문과 주문 취소 메서드를 보면 비즈니스 로직 대부분이 엔티티에 있다.

서비스 계층은 단순히 엔티티에 필요한 요청을 위임하는 역할을 한다.

이처럼 엔티티가 비즈니스 로직을 가지고 객체 지향의 특성을 적극 활용하는 것을 도메인 모델 패턴이라고 한다. 

반대로 엔티티에는 비즈니스 로직이 거의 없고 서비스 계층에서 대부분의 비즈니스 로직을 처리하는 것을 트랜잭션 스크립트 패턴이라 한다.

### 도메인 모델 패턴

- 객체 중심 설계
- 비즈니스 로직을 객체에 내포한다.
- 복잡한 로직 처리에 적합하다.
- 단점 - 객체가 많아질수록 복잡도가 증가한다.

### 트랜잭션 스크립트 패턴

- 절차 지향 설계
- 단순한 로직 처리에 적합하다
- 빠른 개발이 가능하다.
- 단점 - 로직 중복 가능성, 확장성의 한계

---

# 주문 기능 테스트

### 테스트 요구사항

- 상품 주문이 성공해야 한다.
- 상품을 주문할 때 재고 수량을 초과하면 안 된다.
- 주문 취소가 성공해야 한다.

### 상품 주문 테스트

```java
@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional

class OrderServiceTest {

    @Autowired EntityManager em;
    @Autowired OrderService orderService;
    @Autowired OrderRepository orderRepository;

    @Test
    public void 상품주문() throws Exception{
        //given
        Member member = new Member();
        member.setName("회원1");
        member.setAddress(new Address("서울","강가","123-123"));
        em.persist(member);

        Book book = new Book();
        book.setName("시골 JPA");
        book.setPrice(10000);
        book.setStockQuantity(10);
        em.persist(book);

        int orderCount = 2;

        //when
        Long orderId = orderService.order(member.getId(), book.getId(), orderCount);

        //then
        Order getOrder = orderRepository.findOne(orderId);

        assertEquals(OrderStatus.ORDER, getOrder.getStatus(), "상품 주문시 상태는 ORDER");
        assertEquals(1, getOrder.getOrderItems().size(), "주문한 상품 종류 수가 정확해야 한다.");
        assertEquals(10000 * 2, getOrder.getTotalPrice(), "주문 가격은 가격*수량이다.");
        assertEquals(8, book.getStockQuantity(), "주문 수량만큼 재고가 줄어야 한다.");

    }
  .
  .
```

### assertEquals 사용 순서

: 기대하는 값 - 실제 값 - 메시지 순서

위 코드 내용에서 Member와 Book 생성하는 메서드 따로 빼서 아래와 같이 다시 정리할 수 있다.

```java

class OrderServiceTest {

    @Autowired EntityManager em;
    @Autowired OrderService orderService;
    @Autowired OrderRepository orderRepository;

    @Test
    public void 상품주문() throws Exception{
        //given
        Member member = createMember();

        Book book = createBook("시골JPA", 10000, 10);

        int orderCount = 2;

        //when
        Long orderId = orderService.order(member.getId(), book.getId(), orderCount);

        //then
        Order getOrder = orderRepository.findOne(orderId);

        assertEquals(OrderStatus.ORDER, getOrder.getStatus(), "상품 주문시 상태는 ORDER");
        assertEquals(1, getOrder.getOrderItems().size(), "주문한 상품 종류 수가 정확해야 한다.");
        assertEquals(10000 * 2, getOrder.getTotalPrice(), "주문 가격은 가격*수량이다.");
        assertEquals(8, book.getStockQuantity(), "주문 수량만큼 재고가 줄어야 한다.");
    }

.
.
.
.
private Book createBook(String name, int price, int stockQuantity) {
        Book book = new Book();
        book.setName(name);
        book.setPrice(price);
        book.setStockQuantity(stockQuantity);
        em.persist(book);
        return book;
    }

    private Member createMember() {
        Member member = new Member();
        member.setName("회원1");
        member.setAddress(new Address("서울","강가","123-123"));
        em.persist(member);
        return member;
    }
```

### 상품주문_재고수량초과() 테스트

```java

@Test
    public void 상품주문_재고수량초과() throws Exception{
        //given
        Member member = createMember();
        Item item = createBook("시골JPA", 10000, 10);
        int orderCount = 11;

        //when
        orderService.order(member.getId(), item.getId(), orderCount);

        //then
        fail("재고 수량 부족 예외가 발생해야 한다.");
    }
```

### 주문취소 테스트

```java
@Test
    public void 주문취소() throws Exception{
        //given
        Member member = createMember();
        Book item = createBook("시골 JPA", 10000, 10);

        int orderCount = 2;

        Long orderId = orderService.order(member.getId(), item.getId(), orderCount);

        //when
        orderService.cancelOrder(orderId);

        //then
        Order getOrder = orderRepository.findOne(orderId);
        assertEquals(OrderStatus.CANCEL, getOrder.getStatus(), "상품 취소시 상태는 CANCEL이다");
        assertEquals(item.getStockQuantity(), 10, "주문이 취소된 상품은 그만큼 재고가 증가해야 한다.");

    }
```

---

# 주문 검색 기능 개발

### repository/OrderSearch.java - 검색 조건 파라미터

```java
package jpabook.jpashop.repository;

import jpabook.jpashop.domain.OrderStatus;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OrderSearch {

    private String memberName;  // 회원 이름
    private OrderStatus orderStatus;    // 주문 상태[ORDER, CANCEL)
}

```

### repository/OrderRepository.java

```java
package jpabook.jpashop.repository;

import ch.qos.logback.core.util.StringUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import jpabook.jpashop.domain.Member;
import jpabook.jpashop.domain.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class OrderRepository {

    private final EntityManager em;

    public void save(Order order){
        em.persist(order);
    }

    // 주문 단권 조회
    public Order findOne(Long id){
        return em.find(Order.class, id);
    }

    // 검색 기능
    public List<Order> findAll(OrderSearch orderSearch){
        String jpql = "select o From Order o join o.member m";
        boolean isFirstCondition = true;

        // 주문 상태 검색
        if (orderSearch.getOrderStatus() != null){
            if(isFirstCondition){
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " o.status = :status";
        }
        // 회원 이름 검색
        if (StringUtils.hasText(orderSearch.getMemberName())){
            if (isFirstCondition){
                jpql += " where";
                isFirstCondition = false;
            } else {
                jpql += " and";
            }
            jpql += " m.name like :name";
        }

        TypedQuery<Order> query = em.createQuery(jpql, Order.class)
                .setMaxResults(1000); //최대 1000건
        if (orderSearch.getOrderStatus() != null) {
            query = query.setParameter("status", orderSearch.getOrderStatus());
        }
        if (StringUtils.hasText(orderSearch.getMemberName())) {
            query = query.setParameter("name", orderSearch.getMemberName());
        }
        return query.getResultList();
    }

    //  JPA Criteria

    public List<Order> findAllByCriteria(OrderSearch orderSearch) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Order> cq = cb.createQuery(Order.class);
        Root<Order> o = cq.from(Order.class);
        Join<Order, Member> m = o.join("member", JoinType.INNER); //회원과 조인
        List<Predicate> criteria = new ArrayList<>();
        //주문 상태 검색
        if (orderSearch.getOrderStatus() != null) {
            Predicate status = cb.equal(o.get("status"),
                    orderSearch.getOrderStatus());
            criteria.add(status);
        }
        //회원 이름 검색
        if (StringUtils.hasText(orderSearch.getMemberName())) {
            Predicate name =
                    cb.like(m.<String>get("name"), "%" +
                            orderSearch.getMemberName() + "%");
            criteria.add(name);
        }
        cq.where(cb.and(criteria.toArray(new Predicate[criteria.size()])));
        TypedQuery<Order> query = em.createQuery(cq).setMaxResults(1000); //최대1000건
        return query.getResultList();
    }
}
```

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
