import React from 'react';
import styled from 'styled-components';
import {Image, Text} from '../elements';

const FriendList = (props) => {

    return (
        <React.Fragment>
            <Container>
                <MyProfileContainer>
                    <MyInfo>
                    <Image shape='circle' size='60'/>
                    <TextBox>
                    <Text NotP bold> beenstgrm </Text>
                    <Text NotP>임다빈</Text>
                    </TextBox>
                    </MyInfo>
                    <Text>전환</Text>
                </MyProfileContainer>
                <RecommendContainer>
                    <RecommendTextBox>
                        <Text NotP bold>회원님을 위한 추천</Text>
                    </RecommendTextBox>
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

`;


export default FriendList;