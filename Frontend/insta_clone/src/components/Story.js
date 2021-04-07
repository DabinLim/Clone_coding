import React from 'react';
import styled from 'styled-components';
import {Image} from '../elements';
import {useSelector} from 'react-redux'

const Story = (props) => {
    const friend_list = useSelector(state => state.friend.friend_list)
    console.log(friend_list);
    return (
        <React.Fragment>
            <StoryContainer>
                {friend_list.map((v) => {
                    return(
                        <ImageContainer>
                        <Image src={v.profile_image}shape='circle' size='80'></Image>
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
    cursor:pointer;
`;


export default Story;