---
layout: single
title: "회원 도메인 개발"
permalink: /Club/TAVE/5-3week
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



## 개발 순서

1. 회원 엔티티 코드 다시 보기
2. 회원 리포지토리 개발
3. 회원 서비스 개발
4. 회원 기능 테스트

---

# 회원 리포지토리 개발

### 회원 엔티티

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

### 회원 리포지토리

```java
@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;

    // 회원 등록
    public void save(Member member){
        em.persist(member);
    }

    // 회원 단 조회
    public Member findOne(Long id){
        return em.find(Member.class, id);
    }

    // 회원 리스트 조회
    public List<Member> findAll(){
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    // 회원 검색
    public List<Member> findByName(String name){
        return em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
    }
}
```

- `@PersistenceContextprivate`  와 `EntityManager em;`
    - 스프링이  entity manager를 만들어서 그것을 em에 주입해 준다.
    - 회원(member)을 em.persist 해서 member를 딱 집어 넣으면 JPA가 저장하게 된다.
- 멤버 단건 조회
    - em.find 해서 JPA가 제공하는 find 메서드를 이용해서 Member.class 하고, 이 id 값을 넘기면 멤버를 찾아서 반환하게 해준다.
- 멤버 리스트 조회
- 회원 검색

---

# 회원 서비스 개발

```java
package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    // 회원 가입
    @Transactional
    public Long join(Member member){
        validateDuplicateMember(member);    // 중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        // 같은 이름이 있는지 찾아보기
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if(!findMembers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    // 전체 회원 조회
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Member findOne(Long memberId){
        return memberRepository.findOne(memberId);
    }
}
```

`@Transactional(readOnly = true)` 

: JPA가 조회하는 곳에서 성능을 최적화 한다. (단, 읽기가 아닌 쓰기에는 무조건 read-only를 넣으면 안 된다!)

- @RequiredArgsConstructor(생성자 주입)
    - 불변성 보장: final 필드는 중간에 바뀌지 않으므로 더 안전한 코드가 완성된다.
    - 테스트 편함: 단위 테스트에서 `new MemberService(mockRepository)`로 직접 주입 가능
    - 순환참조 잡기 쉬움
    - @Autowired 안 써도 되고, 더 깔끔하고 안전한 코드가 된다.
    ㅎ

---

# 회원 기능 테스트

### 테스트 요구사항

- 회원가입 성공해야 한다.
- 회원가입 할 때 같은 이름이 있으면 예외가 발생한다.

### 테스트 코드 기본 세팅

```java
@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
```

### 회원가입 테스트

```java
@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional

public class MemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

    @Test
	  @Rollback(value = false)
    public void 회원가입() throws Exception{
        //given
        Member member = new Member();
        member.setName("hoyeon");

        //when
        Long savedId = memberService.join(member);

        //then
        assertEquals(member, memberRepository.findOne(savedId));     // 멤버가 멤버 리파지토리에서 멤버를 새로 찾음.
    }
    .
    .
    .
```

실행결과는 아래와 같다.

![image](/_pages/Club/images/TAVE/5week/image 8.png) 

### 중복 회원 검증 테스트

```java
@Test
    public void 중복_회원_예외() throws Exception{
        //given
        Member member1 = new Member();
        member1.setName("kim");

        Member member2 = new Member();
        member2.setName("kim");

        //when
        memberService.join(member1);

        //then
        assertThrows(IllegalStateException.class, () ->
                memberService.join(member2));
    }
```

---

# 테스트 케이스를 위한 설정

- test/resources/application.yml

```java
spring:
#  datasource:
#    url: jdbc:mysql://127.0.0.1:3306/jpashop?serverTimezone=Asia/Seoul&useSSL=false&characterEncoding=utf8&allowPublicKeyRetrieval=true
#    username: root
#    password: "suji1004!"
#    driver-class-name: com.mysql.cj.jdbc.Driver
#  jpa:
#    hibernate:
#      ddl-auto: create     # ← 추천 (create 말고 update 권장)
#    properties:
#      hibernate:
#        globally_quoted_identifiers: true
#        show_sql: true
#        format_sql: true
#        dialect: org.hibernate.dialect.MySQL8Dialect
logging:
  level:
    org.hibernate.SQL: debug
#    org.hibernate.type.descriptor.sql: trace

```

테스트는 케이스 격리된 환경에서 실행하고, 끝나면 데이터를 초기화하는 것이 좋다.

따라서 메모리 DB를 사용하는 것이 이상적이다.

테스트 케이스를 위한 스프링 환경과, 일반적으로 애플리케이션을 실행하는 환경은 다르므로 설정 파일을 다르게 사용하자.

테스트에서 스프링을 실행하면 이 위치에 있는 설정 파일을 읽는다.

만약 이 위치에 없다면 src/resources/application.yml을 읽는다.



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
