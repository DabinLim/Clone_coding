import React, { useState } from "react";
import styled from "styled-components";
import {Grid, Text, Button, Input} from '../elements/index';
import Login from '../components/Login';
import { history } from "../redux/configStore";
import SignUp from '../components/SignUp';


const Main = (props) => {
    const [isSignup, setIsSignup] = React.useState(false)
    const notYet = () => {
        window.alert('아직 준비중입니다.')
    }
  return (
    <React.Fragment>
      <Grid flex_column border padding="2%" margin="2% auto">
        <Grid
          flex_row
          flex_detail="align-items:center; justify-contents:center;"
          padding="2%"
          margin="32px auto 0"
          max_width="935px"
          min_height="1000px"
          border
        >
          <LoginImage />

          <Grid flex_column min_width='350px' max_width='350px' border height="620px" margin='auto'>
            <Grid border height="380px" padding="10px 0px" margin="10px 0px">
                {isSignup? <SignUp/> : <Login/>}
            </Grid>
            <Grid
            center
              border
              height="63px"
              padding="10px 0px"
              margin="0px 0px 10px 0px"
            >
            {isSignup?<Text _onClick={()=>setIsSignup(false)}>돌아가기</Text>:<Text _onClick={()=>setIsSignup(true)}>가입하기</Text> }
            </Grid>
            <Grid border height="102px">
              앱을 다운로드 하세요.
            </Grid>
          </Grid>
        </Grid>
        <Grid flex_column>
            <Grid margin='2% 0px 0px 0px' center>
            <Text _onClick={notYet}>
            소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 인기 계정
              해시태그 위치
                </Text>
                <Text _onClick={notYet}>
                뷰티 댄스 및 공연 피트니스 식음료 집 및 정원 음악 시각 예술
                </Text>
            </Grid>
            <Grid center>
                <Text _onClick={notYet}>
                © 2021 Instagram from Facebook
                </Text>
            </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const LoginImage = styled.div`
  min-width: 454px;
  min-height: 618px;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/main.png?alt=media&token=195d5178-dd6c-4a28-a005-257dc9051fd4");
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width:850px){
    display:none;
  };
`;

export default Main;
