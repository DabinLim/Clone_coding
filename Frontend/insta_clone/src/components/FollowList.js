import { Modal } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {Image, Text} from '../elements';
import { useDispatch, useSelector, useSeletor } from 'react-redux';
import {actionCreators as friendActions} from '../redux/modules/friend';

const FollowList = (props) => {
  const { className, visible, maskClosable, closable, onClose } = props;

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
    const friend_list = useSelector(state => state.friend.friend_list)
    console.log(friend_list)
    React.useEffect(() => {
        const token = sessionStorage.getItem('token');
        dispatch(friendActions.getFriendListSV(token));
    },[])

  return (
    <React.Fragment>
      <ModalOverlay visible={visible}>
        <ModalContainer className={className} tabIndex="-1" visible={visible} onClick={maskClosable ? onMaskClick: null}>
          <ModalInner tabIndex="0">
              {closable && <CloseButton onClick={close}>x</CloseButton>}
              <FollowContainer>
                  <Title>
                  팔로잉
                  </Title>
                    <Follow>
                    <Info>
                    <Image shape="circle" />
                    <TextBox>
                      <Text NotP bold>
                        name
                      </Text>
                    </TextBox>
                  </Info>
                  <Info>
                    <Image shape="circle" />
                    <TextBox>
                      <Text NotP bold>
                        name
                      </Text>
                    </TextBox>
                  </Info>
                  <Info>
                    <Image shape="circle" />
                    <TextBox>
                      <Text NotP bold>
                        name
                      </Text>
                    </TextBox>
                  </Info>
                    </Follow>
              </FollowContainer>
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

const FollowContainer = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
`;

const Title = styled.div`
    box-sizing:border-box;
    padding: 0px 0px 20px 0px;
    margin:0px;
    height:auto;
    margin-bottom:10px;
    text-align:center;
    border-bottom: 1px dotted #dbdbdb;
`;

const Follow = styled.div`
 display: flex;
 flex-direction:column;
 overflow:auto;
`;

const Info = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 10px;
`;

export default FollowList;