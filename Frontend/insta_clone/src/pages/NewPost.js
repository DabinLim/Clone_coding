import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Image} from '../elements';
import Story from '../components/Story';
import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as postActions} from '../redux/modules/post';
import {history} from '../redux/configStore';
import RecommendList from '../components/RecommendList';


const NewPost = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user.user);
    const post_data = useSelector(state => state.post.list);
    const token = sessionStorage.getItem('token');
    React.useEffect(()=> {
        if (post_data.length < 2) {
            dispatch(postActions.getFriendPostSV(token, history));
        }
      },[])
    
    return (
        <React.Fragment>
            <Container>
                <PostContainer>
                    <Story/>
                    {post_data.map((p, idx) => {
                        console.log(p)
                        return(
                        <Grid key={idx}
                            margin='10px 0px'>
                            <Post {...p}/>
                        </Grid>
                        )
                    })}
                </PostContainer>
                <FriendContainer>
                    <RecommendList/>
                </FriendContainer>
            </Container>
  
        </React.Fragment>
    )
}

const Container=styled.section`
    display:flex;
    flex-direction:row;
    justify-content:center;
    box-sizing:border-box;
    padding-top:30px;
    margin: 0 auto;
    max-width: 600px;
    position: relative;
    width: 100%;
`;

const FriendContainer = styled.div`
    min-width:300px;
    box-sizing: border-box;
    display:flex;
    height:100%;
    margin-left:30px;
    flex-direction:flex-start;
    @media (max-width:1000px) {
        display:none;
    }
`;


const PostContainer=styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-items: center;
    width:100%;
`;





export default NewPost;