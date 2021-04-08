import React, { useState } from "react";
import styled from "styled-components";
import {Grid, Text, Button, Input} from '../elements/index';
import Login from '../components/Login';
import { history } from "../redux/configStore";
import SignUp from '../components/SignUp';
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as userActions} from '../redux/modules/user';


const Main = (props) => {
  const dispatch = useDispatch();
  const is_session = sessionStorage.getItem('token')? true: false;

  // React.useEffect(()=> {
  //     dispatch(userActions.loginCheck(is_session))

  // })
    const isSignup = useSelector(state=>state.user.is_signup)
    const setIsSignup = () => {
      dispatch(userActions.is_Signup())
    }
    const notYet = () => {
        window.alert('아직 준비중입니다.')
    }
  return (
    <React.Fragment>
      <Grid flex_column  padding="2%" margin="2% auto">
        <Grid
          flex_row
          flex_detail="align-items:center; justify-contents:center;"
          padding="2%"
          margin="32px auto 0"
          max_width="935px"
          min_height="1000px"
          
        >
          <LoginImage />

          <Grid flex_column min_width='350px' max_width='350px' height="620px" margin='auto'>
            <Grid bg_color='white' border height="380px" padding="10px 0px" margin="10px 0px">
                {isSignup? <SignUp/> : <Login/>}
            </Grid>
            <Grid
            center
            bg_color='white'
              border
              height="63px"
              padding="10px 0px"
              margin="0px 0px 10px 0px"
            >
            {isSignup?<Text bold color='#0095f6' cursor='Pointer' _onClick={setIsSignup}>돌아가기</Text>:<Text bold color='#0095f6' cursor='Pointer'_onClick={setIsSignup}>가입하기</Text> }
            </Grid>
            <Grid bg_color='white' border height="102px">
              <DownloadImage onClick={notYet}/>

            </Grid>
          </Grid>
        </Grid>
        <Grid flex_column>
            <Grid margin='2% 0px 0px 0px' center>
            <Text cursor='pointer' _onClick={notYet}>
            소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 인기 계정
              해시태그 위치
                </Text>
                <Text cursor='pointer'  _onClick={notYet}>
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

const DownloadImage = styled.div`
  width:100%;
  height:100%;
  cursor:pointer;
  background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png?alt=media&token=64038a5d-ed19-4b5d-8352-46d52821a1d7');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top:5px;
`;

export default Main;
