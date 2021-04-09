# Clone Coding (인스타그램)


> ### 인스타그램의 사진 공유와 개인피드, 팔로우 기능, 좋아요와 댓글, 개인프로필 기능을 구현
>
> <br>


## [최종 결과물 시연 영상](https://www.youtube.com/watch?v=MlNSApJvKfc)


### [Front-end 깃헙](https://github.com/DabinLim/Clone_coding/tree/main/Frontend/insta_clone)

### [Back-end 깃헙](https://github.com/danaisboss/instaClone)


## Team

- **임다빈** : Front-end
  - `React.js`
  - `Client axios management`
  - `AWS - S3 deploy`

- **백지은** : Front-end
  - `React.js`
  - `Client axios management`

- **강태진** : Back-end
  - `Node.js `
  - `MongoDB management `
  - `AWS - EC2 deploy`

- **김연재** : Back-end
  - `Node.js `
  - `MongoDB management `



## Environment

- **React.js**
- **React-redux**
- **Node.js**
- **MongoDB**
- **JavaScript**
- **JWT**




## Description

- 모든 페이지는 반응형으로 모바일, 태블릿, 웹에서 화면이 깨지지 않도록 구현하였다.





### 1. 시작 페이지

 <img src="https://user-images.githubusercontent.com/77574867/114160798-43e72a80-9962-11eb-8594-5bf67b57d15c.png" width="600" height="400">

- 로그인과 회원가입 기능
- 클라이언트에서 정규식을 활용하여 아이디와 비밀번호 형식 체크
- 서버에서 DB를 조회하여 중복 체크
- 로그인과 회원가입 컴포넌트를 따로 만들어 갈아끼우는 방식 사용
- 로그인상태를 체크해 이미 로그인된 경우 메인페이지로 이동

<br>

### 2. 메인 페이지

 <img src="https://user-images.githubusercontent.com/77574867/114160808-477ab180-9962-11eb-9788-7bd48b2f33fa.png" width="600" height="450">

- 모든 게시물 또는 친구(팔로잉) 게시물만 표시 가능
- 팔로우
    - 팔로우를 하지 않은 유저들은 추천리스트에 나열
    - 팔로우를 한 유저들은 나의 팔로우(모달창)에 나열
    - 팔로우를 하면 추천리스트에서 삭제되고 언팔로우를 하면 추천리스트에도 업데이트 됨
    - 팔로우 하면 스토리에도 업데이트


- 본인 게시물의 경우 수정,삭제 버튼 
- 모든 프로필 사진은 클릭하면 해당 유저의 개인피드로 이동
- 좋아요, 댓글 기능
- 로그아웃 기능(Header에 포함)

<br>

### 3. 게시물 상세 페이지

 <img src="https://user-images.githubusercontent.com/77574867/114160811-48abde80-9962-11eb-8d84-76dbb05c06f2.png" width="600" height="450">

- 좋아요, 댓글 기능
- 댓글 조회 기능
- 댓글 삭제(본인 댓글만) 기능

<br>

### 4. 개인 피드

 <img src="https://user-images.githubusercontent.com/77574867/114160813-49447500-9962-11eb-8d62-5ef05cc88021.png" width="600" height="450">

- 개인 프로필 사진 변경 기능
- 게시물 작성 기능 (본인 피드에서만 가능)
- 개인 게시물 조회 가능 (클릭시 상세페이지 이동)

<br>





