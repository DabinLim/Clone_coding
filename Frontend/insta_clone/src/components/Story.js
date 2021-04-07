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
                        <ImageContainer>
                        <Image cursor='pointer' src={v.profile_image}shape='circle' size='80' _onClick={()=> {
                            history.push('/friends/'+v.insta_id)
                        }}></Image>
                        </ImageContainer>
                    )
                })}
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