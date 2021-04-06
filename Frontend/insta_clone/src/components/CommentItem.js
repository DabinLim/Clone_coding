import React from "react";
import styled from "styled-components";
import { Text, Image } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentItem = (props) => {
  const dispatch = useDispatch();
    const deleteComment = () => {
        dispatch(commentActions.deleteCommentSV(props.comment_id))
    }

  return (
    <React.Fragment>
      <InfoBox>
        <Info>
          <Image src={props.profile_image} shape="circle" />
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
      </InfoBox>
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
