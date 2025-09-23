---
layout: category
title: "4 week - 스프링 부트와 JPA활용1 - 웹 애플리케이션 개발: 프로젝트 환경설정"
permalink: /Club/TAVE/4week
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
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  



---

# 프로젝트 환경설정

# 프로젝트 생성

https://start.spring.io/

![image.png](image.png)

![image.png](image%201.png)

---

### Lombok 테스트 해보기

<Hello.java>

```java
package jpabook.jpashop;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Hello {
    private String data;
}
```

<JpashopAllication.java>

```java
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
		System.out.println("data = "+data);

		SpringApplication.run(JpashopApplication.class, args);
	}

}
```

- 실행결과
    
    ![image.png](image%202.png)
    

---

# 라이브러리 살펴보기

![image.png](image%203.png)

---

# View 환경 설정

- thymeleaf 템플릿 엔진: https://www.thymeleaf.org/
- 스프링 공식 튜토리얼: https://spring.io/guides/gs/serving-web-content
- 스프링부터 메뉴얼: https://docs.spring.io/spring-boot/reference/web/servlet.html#web.servlet.spring-mvc.template-engines

<HelloController.java>

```java
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
```

<hello.html>

```java
<!DOCTYPE HTML>
 <html xmlns:th="http://www.thymeleaf.org">
 <head>
    <title>Hello</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 </head>
 <body>
 <p th:text="'안녕하세요. ' + ${data}" >안녕하세요. 손님</p>
 </body>
 </html>
```

- 실행결과
    
    ![image.png](image%204.png)
    

---

# H2 데이터베이스 설치

다운로드 및 설치: https://www.h2database.com/html/main.html

![image.png](image%205.png)

![image.png](image%206.png)

이렇게 해서 생성된 것을 확인했으면 아래와 같이 `jdbc:h2:tcp://localhost/~/jpashop`
이렇게 접속한다.

![image.png](image%207.png)

---

# JPA와 DB 설정, 동작확인

[application.properties](http://application.properties) 파일 삭제하고application.yml 파일 생성한다.

```java
spring:
  datasource:
    url: jdbc:h2:tcp://localhost/~/jpashop;MVCC=TRUE
    username: sa
    password:
      driver-class-name: org.h2.Driver

  jpa:
    hibernate:
      ddl-auto: create  # 자동으로 탭을 만들어 주는 모드
    properties:
      hibernate:
        show_sql: true
        format_sql: true

logging:
  level:
    org.hibernate.SQL: debug
```

<Member> 엔티티

```java
package jpabook.jpashop;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Member {

    @Id @GeneratedValue
    private Long id;
    private String username;

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

```

→ Lombok을 사용하니 아래와 같이 코드를 수정할 수 있다.

```java
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

```

<MemberRepository>

```java
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
```

엔티티 매니저를 `@Persistence context` 라고 함.

→ Test! <MemberRepositoryTest.java>를 아래와 같이 만든다.

<MemberRepositoryTest.java>

```java
package jpabook.jpashop;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class MemberRepositoryTest {

    @Autowired MemberRepository memberRepository;

    @Test
    public void testMember() throws Exception{
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
```

이렇게만 만들고 Test를 진행할 경우 오류가 난다.

엔티티 매니저를 통한 모든 데이터의 변경은 항상 트랜잭션 안에서 이뤄져야 하기 때문이다.

```java
package jpabook.jpashop;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class MemberRepositoryTest {

    @Autowired MemberRepository memberRepository;

    @Test
    @Transactional
    public void testMember() throws Exception{
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
```

테스트 실행 결과 다음과 같이 나타난다.

![image.png](image%208.png)

### 왜 데이터가 들어있지 않은가?!

- 스프링 테스트는 `@Transactional`인 테스트 메서드를 실행할 때
    1. **테스트 시작 전에 트랜잭션 시작**
    2. 테스트 본문에서 `save()`/`persist()`가 실행되어도 **커밋되지 않은 상태** (다른 커넥션(H2 콘솔)에서는 보이지 않음)
    3. 메서드가 끝나면 **항상 롤백(기본값)**
- 그래서 테스트 안에서는 `find()`가 잘 되고 assert도 통과하지만, **테스트가 끝난 뒤 DB에는 아무것도 남지 않음.**
- 게다가 `ddl-auto: create`라서 **컨텍스트가 뜰 때마다 스키마를 드롭 후 생성한다**. 이전에 콘솔로 넣어둔 데이터도 매번 날아간다.

따라서 다음과 같이 @Rollback(false)를 붙여준다.

```java
    @Test
    @Transactional
    @Rollback(false)
```

![image.png](image%209.png)

실행 결과 데이터가 제대로 들어간 것을 확인할 수 있다.

### 쿼리 파라미터 로그 남기기

- 외부 라이브러리 사용하기: https://github.com/gavlyukovskiy/spring-boot-data-source-decorator
    - 라이브러리 참고
        
        ![image.png](image%2010.png)
        

---

[돌아가기: 2025 하반기 TAVE 16기 활](https://park-hoyeon.github.io/Club/TAVE/)  


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
