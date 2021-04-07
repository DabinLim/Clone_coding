import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Input } from "../elements";
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as postActions} from '../redux/modules/post'
import {actionCreators as commentActions} from '../redux/modules/comment'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {history} from '../redux/configStore';
import Like from './Like';

const Post = (props) => {
  console.log(props)
    const [comment, setComment] = React.useState();
    const dispatch = useDispatch()
    const token = sessionStorage.getItem('token')
    const commentWrite = () => {
      setComment('')
      if(!comment){
        window.alert('댓글 내용을 입력하세요')
        return
      }
      console.log(comment)
        dispatch(commentActions.addCommentSV(props.post_id, comment, token))
    }
    const user = useSelector(state=> state.user)
    let user_name;
    if(user.user){
      user_name=user.user.name
    }

    const deletePost = () => {
      dispatch(postActions.deletePostSV(props.post_id))
    }

  

  return (
    <React.Fragment>
      {user_name == props.name ? <Grid flex_column margin='0px'>
        <DetailContainer>
          <UserInfo>
            <Grid flex_row>
              <Image _onClick={()=>{history.push('/friends/'+props.insta_id)}}src={props.profile_image}shape="circle" size="36"></Image>
              <Text bold>{props.name}</Text>
            </Grid>
            <Grid
              width="100px"
              padding="0px 10px"
              margin="auto"
              flex_row
              flex_detail="justify-content:space-between;"
            >
              <Text>수정</Text><Text cursor='pointer'_onClick={deletePost}>삭제</Text>
            </Grid>
          </UserInfo>
          <Grid bg_color='white' height='auto'>
            <Image src={props.image[0]} shape="rectangle"></Image>
            <Grid
              flex_row
              flex_detail="align-items:center;"
              padding="4px"
              height="60px"
              
            >
              <Grid flex_row flex_detail='justify-content:center; align-items:center;' width="auto" height="auto" margin="0px 8px">
                <Like {...props}/>
              </Grid>
              <Grid flex_row flex_detail='justify-content:center; align-items:center;' width="auto" height="auto" margin="0px 8px" _onClick={()=>{history.push('/postdetail/'+props.post_id)}}>
                <ChatBubbleOutlineIcon fontSize="large"/>
              </Grid>
            </Grid>
            <Grid
              flex_row
              flex_detail="align-items:center;"
              padding="20px"
              height="60px"
              
            >
              <Grid flex_column width="80px" height="50px" margin="auto">
                <Text NotP bold>
                  {props.name}
                </Text>
                <Text NotP size="6px">
                  {props.createAt}
                </Text>
              </Grid>
              <Grid height="auto">
                <Text>{props.content}</Text>
              </Grid>
            </Grid>
          </Grid>
          <Line/>
          <Grid bg_color='white' flex_row height="50px">
            <Grid width="auto" height="auto" margin="auto 10px">
              <InsertEmoticonIcon fontSize="large" onClick={()=>{window.alert('아직 준비중입니다.')}} />
            </Grid>
            <Input value={comment} _onChange={(e)=>{
                setComment(e.target.value)
            }} is_comment />
            <Grid width="40px" margin="auto 10px">
              <Text _onClick={commentWrite} cursor='Pointer'>게시</Text>
            </Grid>
          </Grid>
        </DetailContainer>
      </Grid> : <Grid flex_column margin='0px'>
        <DetailContainer>
          <UserInfo>
            <Grid flex_row>
              <Image _onClick={()=>{history.push('/friends/'+props.insta_id)}}src={props.profile_image}shape="circle" size="36"></Image>
              <Text bold>{props.name}</Text>
            </Grid>
            <Grid
              width="auto"
              padding="0px 10px"
              margin="auto"
              flex_row
              flex_detail="justify-contents:center;"
            >
              <MoreHorizIcon />
            </Grid>
          </UserInfo>
          <Grid bg_color='white' height='auto'>
            <Image src={props.image[0]} shape="rectangle"></Image>
            <Grid
              flex_row
              flex_detail="align-items:center;"
              padding="4px"
              height="60px"
              
            >
              <Grid flex_row flex_detail='justify-content:center; align-items:center;' width="auto" height="auto" margin="0px 8px">
                <Like {...props}/>
              </Grid>
              <Grid flex_row flex_detail='justify-content:center; align-items:center;' width="auto" height="auto" margin="0px 8px" _onClick={()=>{history.push('/postdetail/'+props.post_id)}}>
                <ChatBubbleOutlineIcon fontSize="large"/>
              </Grid>
            </Grid>
            <Grid
              flex_row
              flex_detail="align-items:center;"
              padding="20px"
              height="60px"
              
            >
              <Grid flex_column width="80px" height="50px" margin="auto">
                <Text NotP bold>
                  {props.name}
                </Text>
                <Text NotP size="6px">
                  {props.createAt}
                </Text>
              </Grid>
              <Grid height="auto">
                <Text>{props.content}</Text>
              </Grid>
            </Grid>
          </Grid>
          <Line/>
          <Grid bg_color='white' flex_row height="50px">
            <Grid width="auto" height="auto" margin="auto 10px">
              <InsertEmoticonIcon fontSize="large" onClick={()=>{window.alert('아직 준비중입니다.')}} />
            </Grid>
            <Input value={comment} _onChange={(e)=>{
                setComment(e.target.value)
            }} is_comment />
            <Grid width="40px" margin="auto 10px">
              <Text _onClick={commentWrite} cursor='Pointer'>게시</Text>
            </Grid>
          </Grid>
        </DetailContainer>
      </Grid>}
      
    </React.Fragment>
  );
};

const DetailContainer = styled.div`
  margin: 0px 0px 40px 0px;
  border: 1px solid #dbdbdb;
  width:100%;
  background-color:white;
`;

const UserInfo = styled.div`
background-color:white;
  display: flex;
  flex-direction: row;
  
  padding: 15px;
`;

const Line = styled.hr`
  border: 1px dotted #dbdbdb;

`;

export default Post;
