import React, { Fragment } from "react";
import { Button, Input, Text, Grid } from "../elements";
import { actionCreators as testActions } from "../redux/modules/test";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Login = (props) => {
  const dispatch = useDispatch();
  const testing = () => {
    let data = {
      user_id: "ekqls@naver.com",
      password: "ekqls1234",
    };
    dispatch(testActions.loginTest(data));
  };
  return (
    <React.Fragment>
      <Grid flex_column padding="0 10%" max_height="380px">
        <Banner/>       
        <Grid min_height='100px' flex_column flex_detail="align-items:center;">
          <Input margin='5px'/>
          <Input margin='5px'/>
        </Grid>

        <Button> 로그인 </Button>
        <Grid padding='20px'>
          <Line/>
          <Image/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


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

export default Login;
