import React from "react";
import styled from "styled-components";

import { Button } from "../elements";

import { history } from "../redux/configStore";

import { actionCreators as editActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const EditProfile = (props) => {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState(null);
  const { className, visible, maskClosable, closable, onClose } = props;

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  //프로필 사진 업로드
  const fileInput = React.useRef();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // const editMyProfile = () => {
  //   dispatch(editProfile(file, token, history));
  // };    onClick={editMyProfile}
  const editMyProfile = () => {
    const token = sessionStorage.getItem("token");
    dispatch(editActions.editProfile(file, token, history));
  };

  return (
    <React.Fragment>
      <ModalOverlay visible={visible}>
        <ModalContainer
          className={className}
          tabIndex="-1"
          visible={visible}
          onClick={maskClosable ? onMaskClick : null}
        >
          <ModalInner tabIndex="0">
            {closable && <CloseButton onClick={close}>x</CloseButton>}
            <input type="file" ref={fileInput} onChange={selectFile} />
            <Button onClick={editMyProfile}>프로필 사진 변경하기</Button>
          </ModalInner>
        </ModalContainer>
      </ModalOverlay>
    </React.Fragment>
  );
};

EditProfile.defaultProps = {
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
  position: fixed;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-style: none;
  border-radius: 10px;
  background-color: white;
`;

export default EditProfile;
