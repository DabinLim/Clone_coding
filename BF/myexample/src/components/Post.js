import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Input } from "../elements";
import {useDispatch} from 'react-redux';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const Post = (props) => {
    const dispatch = useDispatch();
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
              <Text bold> Dabin </Text>
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
          <Grid>
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
              height="60px"
              border
            >
              <Grid flex_column width="80px" height="50px" margin="auto">
                <Text NotP bold>
                  Dabin
                </Text>
                <Text NotP size="6px">
                  10??????
                </Text>
              </Grid>
              <Grid height="auto">
                <Text>#??????????????????</Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid border flex_row height="50px">
            <Grid width="auto" height="auto" margin="auto 10px">
              <InsertEmoticonIcon fontSize="large" onClick={()=>{window.alert('?????? ??????????????????.')}} />
            </Grid>
            <Input _onChange={(e)=>{
                setComment(e.target.value)
            }} is_comment />
            <Grid width="40px" margin="auto 10px">
              <Text _onClick={commentWrite} cursor='Pointer'>??????</Text>
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
