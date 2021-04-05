import React from 'react';
import {Text, Grid, Button, Input} from '../elements';
import {actionCreators as userActions} from '../redux/modules/user';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { history } from "../redux/configStore";

const SignUp = (props) => {
    const dispatch = useDispatch()
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const signUp = () => {
        if(!id || !name || !pwd) {
            window.alert('공란이 있습니다, 모든 정보를 입력하세요.')
            return
        }
        dispatch(userActions.signUpSV([id, name, pwd], history))
    }
    return (
        <React.Fragment>
      <Grid bg_color='white' flex_column padding="0 10%" max_height="380px">
        <Banner/>       
        <Grid min_height='100px' flex_column flex_detail="align-items:center;">
          <Input _onChange={(e) => {
              setId(e.target.value);
            }} placeholder="아이디를 입력하세요" margin='5px'/>
          <Input _onChange={(e) => {
              setName(e.target.value);
            }} placeholder="이름을 입력하세요" margin='5px'/>
          <Input _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd} placeholder="비밀번호를 입력하세요" margin='5px'/>
        </Grid>

        <Button _onClick={signUp}> 회원가입 </Button>

      </Grid>
    </React.Fragment>
    )
}


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