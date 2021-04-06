import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import {useSelector, useDispatch} from 'react-redux';
import CommentItem from './CommentItem';


const PostDetail = (props) => {
    const post_data = useSelector(state => state.post.list);
    const comment_list = useSelector(state => state.comment.list);
    let url = document.location.href.split("/");
    let post_id = url[url.length - 1];
    
    const dispatch = useDispatch();

    const checkPost = (e) => {
        if (e.post_id == post_id) {
            return true;
        }
    }


    const thisPost = post_data.filter(checkPost);
    console.log(thisPost)

    React.useEffect(() => {
        // dispatch(commentActions.getCommentSV(post_id));
      }, []);

    return (
        <React.Fragment>
            <DetailContainer>
            {thisPost.map((v)=> {
                return(
                    <Post key={v.post_id} {...v}/>
                )
            })
            }
            <CommentContainer>
                {comment_list.map((v) =>{
                    return(
                        <CommentItem key={v.comment_id} {...v}/>
                    )
                })}
            </CommentContainer>
            </DetailContainer>
        </React.Fragment>
    )
}


const DetailContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 100%;
    height:auto;
    max-width: 800px;
    margin: 50px auto;
    @media (max-width:600px) {
        flex-direction:column;
        justify-content:space-between;
    }
`;

const CommentContainer = styled.div`
    width:100%;
    margin-top: -30px;
    border:1px solid black;
    height: auto;
`;





export default PostDetail;