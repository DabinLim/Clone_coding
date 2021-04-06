import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import {useSelector} from 'react-redux';
import {Image,Text} from '../elements';

const PostDetail = (props) => {
    const post_data = useSelector(state => state.post.list)

    let url = document.location.href.split("/");
    let post_id = url[url.length - 1];
 
    const checkPost = (e) => {
        if (e.post_id == post_id) {
            return true;
        }
    }

    const thisPost = post_data.filter(checkPost);
    console.log(thisPost)

    return (
        <React.Fragment>
            <DetailContainer>
                <ImageContainer>
                    <Image shape='rectangle'/>
                </ImageContainer>
                <CommentContainer>

                </CommentContainer>
            </DetailContainer>
        </React.Fragment>
    )
}


const DetailContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width: 100%;
    height:auto;
    max-width: 1000px;
    margin: 50px auto;
    @media (max-width:600px) {
        flex-direction:column;
        justify-content:space-between;
    }
`;

const ImageContainer = styled.div`
    width:100%;
    height:auto;
    max-width: 500px;
`;

const CommentContainer = styled.div`
  width:350px;
  max-width:350px;
  border: 1px solid #dbdbdb;
`;

export default PostDetail;