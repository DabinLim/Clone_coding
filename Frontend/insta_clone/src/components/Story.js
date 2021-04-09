import React from 'react';
import styled from 'styled-components';
import {Image} from '../elements';
import {useSelector} from 'react-redux'
import { history } from "../redux/configStore";

const Story = (props) => {
    const user = useSelector(state=> state.user)
    let user_name;
    if(user.user){
      user_name=user.user.name
    }
    const friend_list = useSelector(state => state.friend.friend_list)

    // 친구 게시물만 보기를 선택한 경우에도 자기 자신의 게시물은 보이게 하기 위해 친구리스트에는 자기 자신의 id도 포함되어 있음
    // 자기 자신의 id를 제외하기 위한 함수
    const checkFriend = (e) => {
        if (e.name !== user_name) {
            return true;
        }
    }
  
  
    const friends = friend_list.filter(checkFriend);
    return (
        <React.Fragment>
            <StoryContainer>
                {friends.map((v) => {
                    return(
                        <ImageContainer key={v.insta_id}>
                        <Image cursor='pointer' src={v.profile_image}shape='circle' size='80' _onClick={()=> {
                            history.push('/friends/'+v.insta_id)
                        }}></Image>
                        </ImageContainer>
                    )
                })}
                {/* 스토리에 내용물이 없을 경우 width가 짧아져 화면이 깨져서 하얀 그림을 넣은 이미지를 Default로 채워주었다. */}
                <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                        <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                        <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                        <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                        <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                        <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                        <ImageContainer>
                        <Image shape='circle' size='80'></Image>
                        </ImageContainer>
                    </StoryContainer>
        </React.Fragment>
    )
}


const StoryContainer = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    border: 1px solid #dbdbdb;
    background-color: white;
    padding: 10px;
    overflow: auto;
`;

const ImageContainer = styled.div`
    
`;


export default Story;