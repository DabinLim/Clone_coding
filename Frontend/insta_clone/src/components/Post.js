import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Input } from "../elements";
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as postActions} from '../redux/modules/post'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {history} from '../redux/configStore';
import Like from './Like';

const Post = (props) => {
    const [comment, setComment] = React.useState();
    const commentWrite = () => {
        console.log(comment)
    }
  

  return (
    <React.Fragment>
      
        <Grid flex_column>
        <DetailContainer>
          <UserInfo>
            <Grid flex_row>
              <Image shape="circle" size="36"></Image>
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
              <Grid width="auto" height="auto" margin="0px 8px">
                <Like {...props}/>
              </Grid>
              <Grid width="auto" height="auto" margin="0px 8px" _onClick={()=>{history.push('/postdetail/'+props.post_id)}}>
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
            <Input _onChange={(e)=>{
                setComment(e.target.value)
            }} is_comment />
            <Grid width="40px" margin="auto 10px">
              <Text _onClick={commentWrite} cursor='Pointer'>게시</Text>
            </Grid>
          </Grid>
        </DetailContainer>
      </Grid>
      
    </React.Fragment>
  );
};

const DetailContainer = styled.div`
  margin: 30px 0px;
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
