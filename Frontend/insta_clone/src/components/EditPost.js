import { Modal } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {Button, Grid, Input} from '../elements';

import { useDispatch, useSelector, useSeletor } from 'react-redux';
import {actionCreators as friendActions} from '../redux/modules/friend';
import {actionCreators as postActions} from '../redux/modules/post';
import { history } from "../redux/configStore";

const EditPost = (props) => {
  const { className, visible, maskClosable, closable, onClose, post_id } = props;
  const token = sessionStorage.getItem('token');
    const [content, setContent] = React.useState(props.content);
    
    const user = useSelector(state=> state.user)
    let user_name;
    if(user.user){
      user_name=user.user.name
    }
    const dispatch = useDispatch();
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }
    
    const close = (e) => {
        if(onClose) {
            onClose(e)
        }
    }

    const editPost = () => {
        dispatch(postActions.editPostSV(content, props.post_id))
        close()
    }
    


  return (
    <React.Fragment>
      <ModalOverlay visible={visible}>
        <ModalContainer className={className} tabIndex="-1" visible={visible} onClick={maskClosable ? onMaskClick: null}>
          <ModalInner tabIndex="0">
              {closable && <CloseButton onClick={close}>x</CloseButton>}
              <Grid flex_row>
              <Input multiLine value={content}_onChange={(e)=>{setContent(e.target.value)}} placeholder='수정할 내용을 입력하세요.'/>
              <Button margin='auto 20px' height='40px' width='60px' _onClick={editPost}>수정</Button>
              </Grid>
              </ModalInner>
        </ModalContainer>
      </ModalOverlay>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  visible: false,
};

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
`;

const CloseButton = styled.button`
font-size: x-large;
position:fixed;
top:0;
right:0;
width:30px;
height:30px;
border-style: none;
border-radius:10px;
background-color: white;
`;



export default EditPost;
