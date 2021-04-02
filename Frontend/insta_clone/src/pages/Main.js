import React from 'react';
import styled from 'styled-components';


const Main = (props) => {

    return (
        <React.Fragment>
            <Container>
                <Grid>

                    <Image/>

                    <LoginBox>
                    <Login> 로그인 박스</Login>
                    <Signup>계정이 없으신가여?</Signup>
                    <Download>앱을 다운로드 하세요.</Download>
                    </LoginBox>
                </Grid>
            </Container>
        </React.Fragment>
    )
}


const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
    min-height:1000px;
    box-sizing: border-box;
    vertical-align:baseline;
    padding: 2%;
    margin:5% auto;
    max-width: 1000px;
    border: 1px solid black;
`;

const Grid = styled.div`
    width:100%;
    height:100%;
    flex-direction: row;
    max-width:935px;
    flex-grow: 1;
    margin-top:12px;
    vertical-align: baseline;
    margin: 32px auto 0;
    min-height:1000px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:2%;
    border: 1px solid black;
`;

const LoginBox = styled.div`
    display:flex;
    flex-direction: column;
    /* justify-content:space-evenly; */

    min-width:380px;
    height:100%;;
    max-width: 350px;
    border:1px solid black;
`;

const Login = styled.div`
    width:100%;
    height:380px;
    padding: 10px 0px;
    margin: 10px 0px;
    box-sizing: border-box;
    border: 1px solid black;
`;

const Signup = styled.div`
    padding: 10px 0px;
    margin: 0px 0px 10px 0px;
    width:100%;
    height:63px;
    border: 1px solid black;
`;

const Download = styled.div`
    width:100%;
    height:102px;
    border: 1px solid black;
`;

// const ImageBox = styled.div`
//     width:454px;
//     height:618px;
// `;
const Image = styled.div`
    min-width:454px;
    min-height:618px;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/main.png?alt=media&token=195d5178-dd6c-4a28-a005-257dc9051fd4');
    background-size:contain;
    background-repeat:no-repeat;
`;


export default Main;