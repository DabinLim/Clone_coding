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

const Post = (props) => {
    const [comment, setComment] = React.useState();
    const commentWrite = () => {
        console.log(comment)
    }
    console.log(props)

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
          <Grid height='auto'>
            <Image shape="rectangle"></Image>
            <Grid
              flex_row
              flex_detail="align-items:center;"
              padding="4px"
              height="60px"
              border
            >
              <Grid width="auto" height="auto" margin="0px 8px">
                <FavoriteBorderIcon fontSize="large" />
              </Grid>
              <Grid width="auto" height="auto" margin="0px 8px">
                <ChatBubbleOutlineIcon fontSize="large" />
              </Grid>
            </Grid>
            <Grid
              flex_row
              flex_detail="align-items:center;"
              padding="20px"
              height="80px"
              border
            >
              <Grid flex_column width="80px" margin="auto">
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
          <Grid border flex_row height="50px">
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
  padding: 30px 0px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 15px;
`;

export default Post;
