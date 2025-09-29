---
layout: single
title: "도메인 설계"
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

# 프로젝트 환경설정

## 프로젝트 생성

https://start.spring.io/

![image](/_pages/Club/images/TAVE/4week/image.png)  
![image](/_pages/Club/images/TAVE/4week/image%201.png)

---

## Lombok 테스트 해보기

**Hello.java**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Hello {
    private String data;
}
</code></pre></div>

**JpashopApplication.java**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JpashopApplication {

    public static void main(String[] args) {
        // Hello 객체 생성하기
        Hello hello = new Hello();
        hello.setData("hello");
        String data = hello.getData();
        System.out.println("data = " + data);

        SpringApplication.run(JpashopApplication.class, args);
    }
}
</code></pre></div>

- 실행결과  
![image](/_pages/Club/images/TAVE/4week/image%202.png)

---

# 라이브러리 살펴보기

![image](/_pages/Club/images/TAVE/4week/image%203.png)

---

# View 환경 설정

- thymeleaf 템플릿 엔진: https://www.thymeleaf.org/  
- 스프링 공식 튜토리얼: https://spring.io/guides/gs/serving-web-content  
- 스프링 부트 매뉴얼: https://docs.spring.io/spring-boot/reference/web/servlet.html#web.servlet.spring-mvc.template-engines  

**HelloController.java**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data", "hello!!!");
        return "hello";
    }
}
</code></pre></div>

**hello.html**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>Hello</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
  <p th:text="'안녕하세요. ' + ${data}">안녕하세요. 손님</p>
</body>
</html>
</code></pre></div>

- 실행결과  
![image](/_pages/Club/images/TAVE/4week/image%204.png)

---

# H2 데이터베이스 설치

다운로드 및 설치: https://www.h2database.com/html/main.html  

![image](/_pages/Club/images/TAVE/4week/image%205.png)  
![image](/_pages/Club/images/TAVE/4week/image%206.png)  

생성된 것을 확인했으면 아래와 같이 접속한다:  
`jdbc:h2:tcp://localhost/~/jpashop`  

![image](/_pages/Club/images/TAVE/4week/image%207.png)

---

# JPA와 DB 설정, 동작확인

`application.properties` 삭제 후 `application.yml` 생성  

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
spring:
  datasource:
    url: jdbc:h2:tcp://localhost/~/jpashop
    username: sa
    password:
    driver-class-name: org.h2.Driver

  jpa:
    hibernate:
      ddl-auto: create
    properties:
      hibernate:
        show_sql: true
        format_sql: true

logging:
  level:
    org.hibernate.SQL: debug
</code></pre></div>

**Member.java**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Member {

    @Id @GeneratedValue
    private Long id;
    private String username;

    public Long getId() { return id; }
    public String getUsername() { return username; }
    public void setId(Long id) { this.id = id; }
    public void setUsername(String username) { this.username = username; }
}
</code></pre></div>

**Member (Lombok 버전)**  
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    private Long id;
    private String username;
}
</code></pre></div>

**MemberRepository.java**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;

    public Long save(Member member){
        em.persist(member);
        return member.getId();
    }

    public Member find(Long id){
        return em.find(Member.class, id);
    }
}
</code></pre></div>

**MemberRepositoryTest.java**
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
package jpabook.jpashop;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class MemberRepositoryTest {

    @Autowired MemberRepository memberRepository;

    @Test
    @Transactional
    public void testMember() throws Exception {
        //given
        Member member = new Member();
        member.setUsername("memberA");

        //when
        Long savedId = memberRepository.save(member);
        Member findMember = memberRepository.find(savedId);

        //then
        assertEquals(member.getId(), findMember.getId());
        assertEquals(member.getUsername(), findMember.getUsername());
    }
}
</code></pre></div>

- 실행결과  
![image](/_pages/Club/images/TAVE/4week/image%208.png)

---

## 왜 데이터가 안 남는가?

- `@Transactional` 테스트는 실행 시 항상 롤백이 기본값이다.  
- 테스트 안에서는 조회가 되지만, DB에는 남지 않는다.  
- `ddl-auto: create` 설정으로 컨텍스트 뜰 때마다 스키마가 재생성된다.  

→ 따라서 `@Rollback(false)`를 추가해야 한다.

<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; font-family: monospace;">
<pre><code class="java">
@Test
@Transactional
@Rollback(false)
</code></pre></div>

- 실행결과  
![image](/_pages/Club/images/TAVE/4week/image%209.png)

---

## 쿼리 파라미터 로그 남기기

외부 라이브러리: https://github.com/gavlyukovskiy/spring-boot-data-source-decorator  



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
