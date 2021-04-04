import React from 'react';
import styled from 'styled-components';
import {Image, Text} from '../elements';
import {history} from '../redux/configStore';

const RecommendList = (props) => {

    return (
        <React.Fragment>
            <Container>
                <MyProfileContainer>
                    <MyInfo>
                    <Image shape='circle' size='60'/>
                    <TextBox>
                    <Text cursor='Pointer' _onClick={()=>{history.push('/profile')}} NotP bold> beenstgrm </Text>
                    <Text NotP>임다빈</Text>
                    </TextBox>
                    </MyInfo>
                    <Text cursor='Pointer' _onClick={()=>{window.alert('아직 준비중 입니다.')}}>전환</Text>
                </MyProfileContainer>
                <RecommendContainer>
                    <RecommendTextBox>
                        <Text NotP bold>회원님을 위한 추천</Text>
                        <Text NotP bold>모두 보기</Text>
                    </RecommendTextBox>
                    <Recommended>

                    </Recommended>
                </RecommendContainer>
            </Container>
        </React.Fragment>
    )
}

const Container = styled.div`
    min-width:300px;
    height: 100%;
    position:fixed;
    top: 120;
    right:20;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    @media (max-width:1000px) {
        display:none;
    }
`;

const MyProfileContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
`;

const MyInfo = styled.div`
    display:flex;
`;

const TextBox = styled.div`
    display:flex;
    flex-direction:column;
    margin: auto 10px;

`;

const RecommendContainer = styled.div`
    display:flex;
    margin-top: 20px;
`;

const RecommendTextBox = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:space-between;
`;

const Recommended = styled.div`
    
`;


export default RecommendList;