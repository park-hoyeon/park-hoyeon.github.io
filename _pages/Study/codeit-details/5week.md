---
layout: category
title: "✨ 5 Week - Codeit Boost BE Study"
permalink: /Study/codeit-details/5week
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true
categories:
  - Blog
tags:
  - 2024-python-coding-study
  - CodeHive
  - Python
  - Coding
    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  



안녕하세요. 소시지입니다.<br>
본 포스팅은 <2024.12.26 ~ 2025.01.23> 기간의 데이터베이스 / 백엔드 스터디 5주차 학습 내용을 기록했습니다.

## Codeit Boost 백앤드 스터디 5주차 진행 (2025.01.23)

### 🗓️ 학습 주제


1. 줌 클론코딩 - 노마드 코더 <Nomad Coders> 강의 수강<br>
2. 인프런 - Node.js / DB를 이용해 웹 애플리케이션 만들기 강의 수강<br>
3. 학습한 강의의 내용을 팀원과 공유하고, 각자가 이해한 내용을 발표하며 2차 복습 진행<br>
4. 간단한 발표 및 기록<br>
 



---   



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/BE5.png">



---
### 📝 BE 스터디 내용

#### 🔍 데이터베이스란?


가장 중요한 특성은 구조화된 데이터이다.<br>
(ex. 엑셀에 정리되어 있는 정보들)<br>
방대한 양의 데이터를 체계적으로 분류하고 보관할 수 있다.

---

# **데이터베이스와 MYSQL**

### 데이터베이스의 종류

- 관계형 데이터베이스(mysql)
- nosql

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 48.png">

웹 서비스는 웹 서버가 있고 그 웹 서버에 접근하는 클라이언트가 있다.
마찬가지로 데이터베이스에도 서버가 있어서 데이터를 저장하고, 그 저장된 데이터를 수정하거나 삭제하는 등의 관리 기능을 가지고 있다.
그 데이터베이스 서버에 요청해서 여러 가지 명령을 하거나 데이터를 가져오는 것들을 하게 해주는 것이 데이터베이스 클라이언트이다.<br>

---

### 클라이언트

### **mysql-monitor**

: mysql을 설치하면 기본적으로 같이 설치되는 프로그램

### **mysql query browser**

: gui 환경으로, 기본적으로 설치가 안 되기 때문에 따로 다운 받아야 한다.

### **phpMyAdmin**

: 사용자가 서버에 직접 설치하는 웹 프로그램이다. 웹 환경에서 데이터베이스를 제어할 수 있다는 장점이 있다.

### **navicat**

: 유료

---

# **mysql monitor**

- mysql서버의 번들로 제공하는 기본 프로그램
- 명령어 기반


### 사용법

`mysql **-u**아이디 **-p**비밀번호` <br>
`mysql **-h**호스트주소 **-p**포트번호 **-u**아이디 **-p**비밀번호` <br>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 49.png">

### 데이터베이스 생성

**`CREATE`** **`DATABASE`** `music **CHARACTER**` **`SET`** `utf8 **COLLATE**` `utf8_general_ci;`

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 50.png">


### 데이터베이스 선택과 테이블 생성

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 51.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 52.png">

### 테이블에 데이터 추가

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 53.png">

<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
title = Chasing Pavements <br>
musician = 아델 <br>
duration = 3:30 <br>
album = 19

</div>


### 입력된 데이터 조회

**`select`** `* **from**` `favorite_music;`

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 54.png">

### 종료

mysql> exit;

---

# **데이터관리 - SQL**

### SQL

: **S**tructured **Q**uery **L**anguage
데이터베이스에서 데이터를 저장하거나 얻기 위해서 사용하는 표준화된 언어.

### **SQL 테이블**

SQL 테이블은 관계형 데이터베이스의 기본 요소이다. <br>
SQL 데이터베이스 테이블은 행과 열로 구성된다. <br>
데이터베이스 엔지니어는 여러 데이터베이스 테이블 간의 관계를 생성하여 데이터 스토리지 공간을 최적화한다.<br>
예를 들어, 데이터베이스 엔지니어가 스토어의 제품에 대한 SQL 테이블을 생성한다고 가정하자.<br>

| 제품 ID | 제품 이름 | 색상 ID |
| --- | --- | --- |
| 01 | 냉장고 | 색상 01 |
| 02 | 세탁기 | 색상 02 |

그런 다음 *색상 ID*를 사용하여 제품 테이블을 색상표에 연결한다.<br>

| 색상 ID | 색상 이름 |
| --- | --- |
| 색상 01 | 회색 |
| 색상 02 | 흰색 |



### **SQL과 MySQL 비교**

SQL은 데이터베이스 생성 및 조작을 위한 표준 언어이다. (국제 표준에 의해 정의된다.)<br>
MySQL은 SQL 쿼리를 사용하는 관계형 데이터베이스 프로그램이다. 

---

# **Database**

: 데이터가 실질적으로 적재되는 테이블들을 분류하는 상위 개념

### 생성

<aside>
💡

CREATE DATABASE `데이터베이스명` CHARACTER SET utf8 COLLATE utf8_general_ci;

</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 55.png">

### 열람

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 56.png">
### 삭제

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 57.png">

### 사용

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 58.png">

---

# **Table**

: 데이터가 실질적으로 저장되는 저장소

### **스키마(schema)란?**

: 테이블에 적재될 데이터의 구조와 형식을 정의 하는 것

### 테이블 생성

<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
**`CREATE`** **`TABLE`** `table_name (`

`칼럼명1 data_type,`

`칼럼명2 data_type`

`)`

</div>

<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">

**`CREATE`** **`TABLE`** ``student` (` <br>
``id`  tinyint NOT` `NULL` `,` <br>
``**name**`  **char**(4) NOT` `NULL` `,` <br>
``sex`  enum('남자','여자') NOT` `NULL` `,` <br>
``address`  **varchar**(50) NOT` `NULL` `,` <br>
``birthday`  datetime NOT` `NULL` `,` <br>
`**PRIMARY**` **`KEY`** `(`id`)` <br>
`);` <br>

</div>


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 59.png">

: null이 no이므로 모든 값을 입력해야 하는 상태이다.

### 테이블 리스트

**SHOW tables;**

---

# 삽입(insert)

### 문

1.`INSERT` `INTO` `table_name VALUES` `(value1, value2, value3,...)` <br>
**2.`INSERT`** **`INTO`** `table_name (column1, column2, column3,...) **VALUES**` `(value1, value2, value3,...)` <br>


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 60.png">


<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 61.png">

---

# 변경(update)

### 문법

<aside>
💡

UPDATE 테이블명 SET 컬럼1=컬럼1의 값, 컬럼2=컬럼2의 값 WHERE 대상이 될 컬럼명=컬럼의 값

</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 62.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 63.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 64.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 65.png">

---

# 삭제 (delete)

: 행단위로 데이터를 삭제

### 문법

<aside>
💡

**`DELETE`** **`FROM`** `테이블명 [**WHERE**` `삭제하려는 칼럼 명=값]`

</aside>
<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 66.png">

### **TRUNCATE**

- 테이블의 전체 데이터를 삭제
- 테이블에 외부키(foreign key)가 없다면 DELETE보다 훨씬 빠르게 삭제됨

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 67.png">

### **DROP TABLE**

: 테이블을 삭제한다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 68.png">

---

# 조회 (select)

문법



<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
    
💡

**`SELECT`** `칼럼명1, 칼럼명2` <br>
`[**FROM**` `테이블명 ]` <br>
`[**GROUP**` **`BY`** `칼럼명]` <br>
`[**ORDER**` **`BY`** `칼럼명 [**ASC**` `| **DESC**]]` <br>
`[LIMIT offset, 조회 할 행의 수]` <br>

</div>


<div style="border: 1px solid rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left;">
  
💡

**`SELECT`** `* **FROM**` `student;` 

</div>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 69.png">




💡

**`SELECT`** **`name**, birthday **FROM**` `student;`



<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 70.png">

<aside>
💡

`SELECT` `* FROM` `student WHERE` `id=3;`



</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 71.png">

<aside>
💡

**`SELECT`** `* **FROM**` `student **WHERE**` `sex='남자'` `AND` `address='서울';`

</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 72.png">

<aside>
💡

`SELECT` `* FROM` `student WHERE` `sex='여자'` `OR` `address='서울';`


</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 73.png">

---

# **그룹핑 (group by)**

: 특정 칼럼을 기준으로 데이터를 그룹핑함

### 문법

<aside>
💡

**`SELECT`** `* **FROM**` `테이블명 **GROUP**` **`BY`** `그룹핑 할 기준 칼럼명`

</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 74.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 75.png">

---

# **정렬 (order)**

문법

<aside>
💡

**`SELECT`** `* **FROM**` `테이블명 **ORDER**` **`BY`** `정렬의 기준으로 사용할 열 [**DESC**` `| **ASC**]`

</aside>

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 76.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 77.png">

---

# **index**

: 색인, 조회할 때 원하는 행을 빠르게 찾을 수 있게 준비해둔 데이터

### 인덱스의 종류

- primary: 중복되지 않는 유일한 키
- normal : 중복을 허용하는 인덱스
- unique : 중복을 허용하지 않는 유일한 키
- foreign : 다른 테이블과의 관계성을 부여하는 키
- full text : 자연어 검색, myisam에서만 지원
  

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 78.png">

### **primary key**

- 테이블 전체를 통틀어서 중복되지 않는 값을 지정해야 한다.
- where 문을 이용해서 데이터를 조회할 때 가장 고속으로 데이터를 가져올 수 있다.
- 테이블마다 딱 하나의 primary key를 가질 수 있다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 79.png">

여기에서는 id가 primary key

### **unique key**

- 중복을 허용한다.
- primary, unique 보다 속도가 느리다.
- 여러개의 키를 지정할 수 있다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 80.png">

### **Full Text**

- mysql의 기본설정(ft_min_word_len)이 4로 되어 있기 때문에 최소 4글자 이상을 입력하거나 이 값을 조정해야 한다.
- mysql은 전문 검색 엔진이 아니기 때문에 한글 검색이 잘 안된다.
- 스토리지 엔진 중 myisam에서만 사용가능하다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 81.png">

### **중복키**

• 하나의 키에 여러개의 칼럼을 포함

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 82.png">

### **인덱스의 정의 방법**

- 자주 조회되는 칼럼에 적용
- 조회 시 오랜시간을 소모하는 컬럼에 적용
- 데이터가 긴 경우 인덱스를 사용하지 않는다.

---

# **JOIN**

### **여러개의 테이블 사용하기**

: 데이터의 규모가 커지면서 하나의 테이블로 정보를 수용하기가 어려워지면 테이블을 분활하고 테이블 간의 관계성을 부여한다

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 83.png">

address는 distnace와 관련되어 있기 때문에 location이라는 별도의 테이블로 분할 할 수 있다.

- student 테이블과 location 테이블로 구분

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 84.png">

address와 distance 컬럼이 사라지고 location_id 컬럼이 생겼다.

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 85.png">

insert 후 결과

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 86.png">

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 87.png">

→ 이숙경은 location_id 값이 1이기 때문에 서울에 살고 집은 10km 떨어져 있다.

### **JOIN**

: 테이블간의 관계성에 따라서 복수의 테이블을 결합, 하나의 테이블인 것처럼 결과를 출력

### **JOIN의 종류**

- OUTTER JOIN : 매칭되는 행이 없어도 결과를 가져오고 매칭되는 행이 없는 경우 NULL로 표시한다.LEFT JOIN과 RIGHT JOIN이 있다.
- INNER JOIN : 조인하는 두개의 테이블 모두에 데이터가 존재하는 행에 대해서만 결과를 가져온다.

### **LEFT JOIN**

가장 많이 사용되는 조인의 형태

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Study/images/image 88.png">

---

# **사용자 관리**

### 권한이란?

사용자에 따라서 접근할 수 있는 데이터와 사용할 수 있는 기능을 제한

### 사용자의 제한

데이터베이스 서버에 접속하는 사용자를 제한한다.

---

# 프로그래밍과 연동

### **프로그래밍과 데이터베이스의 관계**

1. 프로그래밍과 데이터베이스는 무관하다.
2. 데이터베이스는 독립적인 시스템으로 프로그래밍과 상관없이 사용될 수 있다.
3. 데이터베이스를 이해하고 있다면 여기에 프로그래밍을 결합해서 더 많은 일을 할 수 있다.

---




[돌아가기: 2024 하반기 Python Coding Study](https://park-hoyeon.github.io/Study/Codeit%20Boost%20BE%20Study/)  


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
