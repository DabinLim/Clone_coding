import React from "react";
import styled from "styled-components";
import { Text, Image } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import {history} from '../redux/configStore';

const CommentItem = (props) => {
  const dispatch = useDispatch();
    const deleteComment = () => {
      if(window.confirm('정말 삭제하시겠습니까?')){
        dispatch(commentActions.deleteCommentSV(props.comment_id))
      }
    }

    const user = useSelector(state=> state.user)
    let user_name;
    if(user.user){
      user_name=user.user.name
    }

  return (
    <React.Fragment>
      {user_name == props.user_name ? <InfoBox>
        <Info>
          <Image _onClick={()=> {history.push('/profile')}} src={props.profile_image} shape="circle" />
          <TextBox>
            <Text NotP bold>
              {props.user_name}
            </Text>
          </TextBox>
          <TextBox>
            <Text NotP>{props.content}</Text>
          </TextBox>
        </Info>
        <DeleteBox>
          <Text cursor="Pointer" _onClick ={deleteComment}>삭제</Text>
        </DeleteBox>
      </InfoBox>:<InfoBox>
        <Info>
          <Image _onClick={()=> {history.push('/friends/'+props.insta_id)}} src={props.profile_image} shape="circle" />
          <TextBox>
            <Text NotP bold>
              {props.user_name}
            </Text>
          </TextBox>
          <TextBox>
            <Text NotP>{props.content}</Text>
          </TextBox>
        </Info>
        <DeleteBox>
          
        </DeleteBox>
      </InfoBox>}
      </React.Fragment>
      
  );
};

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 10px;
`;

const DeleteBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60px;
  margin: auto 20px;
`;

export default CommentItem;
