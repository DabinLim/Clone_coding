import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Image} from '../elements';
import Story from '../components/Story';
import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as postActions} from '../redux/modules/post';
import {history} from '../redux/configStore';


const NewPost = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user.user);
    const post_data = useSelector(state => state.post.list);
    const token = sessionStorage.getItem('token');
    React.useEffect(()=> {
        if (post_data.length < 2) {
            dispatch(postActions.getPostSV(token, history));
        }
      },[])
    console.log(post_data)
    return (
        <React.Fragment>
            <Container>
                <PostContainer>
                    <Story/>
                    {post_data.map((p, idx) => {
                        return(
                        <Grid key={idx}
                            margin='10px 0px'>
                            <Post {...p}/>
                        </Grid>
                        )
                    })}
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