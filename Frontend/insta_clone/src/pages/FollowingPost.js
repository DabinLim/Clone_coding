import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Image} from '../elements';
import Story from '../components/Story';
import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as postActions} from '../redux/modules/post';
import {history} from '../redux/configStore';
import RecommendList from '../components/RecommendList';


const FollowingPost = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user.user);
    const post_data = useSelector(state => state.post.list);
    const friend_list = useSelector(state => state.friend.friend_list)

    const checkFriendPost = (e) => {
        let num = 0;
        for(let i =0; i<friend_list.length; i++){
            // console.log(e.name)
            if(e.name == friend_list[i].name){
                num +=1
            }
        }
        if(num >= 1){
            return true
        }else{
            return false
        }
    }

    const friend_post = post_data.filter(checkFriendPost);

    const token = sessionStorage.getItem('token');
    React.useEffect(()=> {
        if (post_data.length < 2) {
            dispatch(postActions.getFriendsPostSV(token, history));
        }
      },[])
    
    return (
        <React.Fragment>
            <Container>
                <PostContainer>
                    <Story/>
                    <TextBox>
                    <Text bold color='#8e8e8e' cursor='pointer' _onClick={()=> {history.push('/newpost')}}>모든 게시물 보기</Text>
                    </TextBox>
                    {friend_post.map((p, idx) => {
                        return(
                        <Grid key={idx}
                            margin='0px'>
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

const TextBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin-right: 10px;
`;





export default FollowingPost;