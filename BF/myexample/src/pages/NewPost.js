import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Image} from '../elements';
import Story from '../components/Story';
import Post from '../components/Post';


const NewPost = (props) => {

    return (
        <React.Fragment>
            <Container>
                <PostContainer>
                    <Story/>
                    <Post/>
                </PostContainer>
            </Container>
        </React.Fragment>
    )
}

const Container=styled.section`
    box-sizing:border-box;
    padding-top:30px;
    margin: 0 auto;
    max-width: 600px;
    position: relative;
    width: 100%;
`;


const PostContainer=styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
`;





export default NewPost;