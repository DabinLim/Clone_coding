export const response = {
    USER : {
        "insta_Id" : 'test', //중복 안되는 값 
        "name" : '김연재',
        "password" : 12345,
        "friend_list" : ['강태진', '김연재', '임다빈', '백지은']
      },
      COMMENT : {
        "text" : '안녕 첫번째 피드',
        "createAt": '2020.04.03',
        "author" : '김연재'
      },
      //상세페이지
      post_list: [
        {
        "file": 'https://image.shutterstock.com/image-photo/source-code-html-on-screen-600w-1654738408.jpg',
        "createAt" : '2020.04.04',
        "name": '김연재', //TOKEN 검증 후 해당하는 유저 이름을 뽑아오는 방식이 되겠죠..
        "content": '이 집 맛집입니다!',
        "comment": {
          "text" : '우와 쩌네요!',
          "createAt" : '2020.04.04',
          "author": '댓글러'
        },
      },
      {
        "file": 'https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/3.jpeg?alt=media&token=324d42bf-d7eb-43bf-adfd-6d9d808375a6',
        "createAt" : '2020.04.03',
        "name": '강태진', //TOKEN 검증 후 해당하는 유저 이름을 뽑아오는 방식이 되겠죠..
        "content": '이 집 맛집입니다!',
        "comment": {
          "text" : '우와 쩌네요!',
          "createAt" : '2020.04.03',
          "author": '댓글러'
        },
      },
      {
        "file": 'https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/2.jpeg?alt=media&token=215ba17e-120f-4e98-b450-222720f3f081',
        "createAt" : '2020.04.02',
        "name": '벡지은', //TOKEN 검증 후 해당하는 유저 이름을 뽑아오는 방식이 되겠죠..
        "content": '이 집 맛집입니다!',
        "comment": {
          "text" : '우와 쩌네요!',
          "createAt" : '2020.04.02',
          "author": '댓글러'
        },
      },
      {
        "file": 'https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/1.jpeg?alt=media&token=150c48fd-bc8b-43de-92b5-c84d8c286474',
        "createAt" : '2020.04.01',
        "name": '임다빈', //TOKEN 검증 후 해당하는 유저 이름을 뽑아오는 방식이 되겠죠..
        "content": '이 집 맛집입니다!',
        "comment": {
          "text" : '우와 쩌네요!',
          "createAt" : '2020.04.01',
          "author": '댓글러'
        },
      }
    ],
      //글쓰기
      UPLOAD : {
        "file": 'https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/1.jpeg?alt=media&token=150c48fd-bc8b-43de-92b5-c84d8c286474',
        "content": '이 집 맛집입니다!',
      },
      //수정하기
      EDIT : {
        "content": '이 집 맛집입니다!',
      }
}