import React from 'react';
import styled from 'styled-components';
import {Image} from '../elements';

const Story = (props) => {

    return (
        <React.Fragment>
            <StoryContainer>
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