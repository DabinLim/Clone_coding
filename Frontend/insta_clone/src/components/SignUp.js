import React from 'react';
import {Text, Grid, Button, Input} from '../elements';
import {actionCreators as userActions} from '../redux/modules/user';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { history } from "../redux/configStore";
import {idCheck, pwdCheck} from '../shared/common';

const SignUp = (props) => {
    const dispatch = useDispatch()
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const signUp = () => {
      // 공란이 있는 경우
        if(!id || !name || !pwd) {
            window.alert('공란이 있습니다, 모든 정보를 입력하세요.')
            return
        }
        // 정규 표현식에 맞지 않는 경우
        if(!idCheck(id)){
          window.alert('5~12자리의 영문과 숫자를 조합해 주세요.')
          return
        }

        if(!pwdCheck(pwd)){
          window.alert('8~16자리의 영문과 숫자를 조합해 주세요.')
          return
        }
        // 로그인과 마찬가지로 history를 인자로 추가
        dispatch(userActions.signUpSV([id, name, pwd], history))

    }
    return (
        <React.Fragment>
      <Grid bg_color='white' flex_column padding="0 10% 5% 10%" max_height="380px">
        <BannerBox> 
        <Banner/>       
        </BannerBox>
        <Grid min_height='80px' flex_column flex_detail="align-items:center;">
          <Input _onChange={(e) => {
              setId(e.target.value);
            }} placeholder="아이디를 입력하세요"/>
          <Input _onChange={(e) => {
              setName(e.target.value);
            }} placeholder="이름을 입력하세요" />
          <Input _onChange={(e) => {
              setPwd(e.target.value);
            }} type='password'
            value={pwd} placeholder="비밀번호를 입력하세요" />
        </Grid>

        <Button height='auto' _onClick={signUp}> 회원가입 </Button>

      </Grid>
    </React.Fragment>
    )
}

const BannerBox = styled.div`
  width:100%;
  min-height:100px;
  padding: 0px 20%;
`;

const Banner = styled.div`
    background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/instagram.png?alt=media&token=a53527c4-07df-4c3f-ae18-ca30c3e0aa2b');
    max-width:250px;
    min-height:100px;
    background-size:contain;
    background-repeat:no-repeat;
    
`;
const Image = styled.div`
    background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/facebook.png?alt=media&token=a400eb1a-93b7-484d-acdf-99102126b717');
    
    max-width:250px;
    height:80px;
    background-size:contain;
    background-repeat:no-repeat;
`;
const Line = styled.hr`

  margin: 10px 0px;
  border: 1px dotted #ddd;
`;

export default SignUp;