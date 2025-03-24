# Chapter 0. 서버 처음 해보기

### 저장소 다운로드 받기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image.png"> 

### 의존성 설치하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image 1.png"> 

### Node.js 서버 실행하기

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image 2.png"> 

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image 3.png"> 
---

### IP

```jsx
- 컴퓨터를 찾을 때 필요한 주소 
- 컴퓨터 간의 네트워킹을 가능하게 하는 통신 규약
- IP 주소는 컴퓨터가 네트워크에 연결이 될 때, 그때 정해짐
	예를 들어 카페에 가서 공유기 비밀번호 입력해서 와이파이 연결 → 와이파이 공유기는 내 컴퓨터에 IP를 할당해줌
```

### PORT

```jsx
- 컴퓨터가 각종 신호, 정보 등을 주고 받을 수 있도록 해주는 통신 통로
- IP + 포트 번호 → 소켓
```

### **CIDR**

```jsx
- (Classless Inter-Domain Routing) 으로 클래스 없는 도메인간 라우팅 기법
- cidr은 네트워크 정보를 여러개로 나누어진 Sub-Network들을 모두 나타낼 수 있는 하나의 Network로 통합해서 보여주는 방법
```

### TCP/UDP

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image 4.png"> 

### **웹 서버와 WAS 서버**

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image 5.png"> 

---

## 실습 - 너디너리 홈페이지 접속 과정

1. [https://neordinary.co.kr/](https://neordinary.co.kr/) 주소 입력
2. 도메인을 IP주소로 변환

<img src="https://raw.githubusercontent.com/park-hoyeon/park-hoyeon.github.io/master/_pages/Club/UMC0_images/image 6.png"> 

1. 클라이언트는 iP주소(168.126.63.1)를 통해서 도메인 주소에 요청을 보낸다.
**라우터**를 통해 패킷이 이동하며 너디너리 서버로 전달한다.
2. 서버는 받은 요청을 분석하고, 웹사이트의 데이터를 패킷으로 만들어 다시 클라이언트에게 보낸다.
3. 클라이언트(웹 브라우저)는 응답을 받아서 홈페이지를 볼 수 있다.
