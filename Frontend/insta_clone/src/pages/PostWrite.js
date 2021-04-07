import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";

import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { history } from "../redux/configStore";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const [preview, setPreview] = React.useState('http://via.placeholder.com/400x300')
  const [file, setFile] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [contents, setContents] = React.useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
  };


  const addPost = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      console.log("작성시작");
      console.log(file);
      dispatch(postActions.addPostSV(contents, file, token, history));
    } else if (!token) {
      window.alert("로그인 상태가 아닙니다.");
      return;
    } else if (!contents) {
      window.alert("내용을 입력하세요.");
      return;
    }
  };

  //사진 업로드

  const fileInput = React.useRef();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPreview(reader.result)
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Grid flex_column border padding="2%" margin="2% auto">
          <ImageContainer>
            <Grid>
              <Text margin="0px" padding="10px" size="32px" bold>
                게시글 작성하기
              </Text>
              <input type="file" ref={fileInput} onChange={selectFile} />
            </Grid>
            <Grid padding="3px">
              <Text margin="0px" size="24px" bold>
                {" "}
                미리보기{" "}
              </Text>
              <Image
                shape="rectangle"
                src={preview}
              />
            </Grid>
          </ImageContainer>
          <TextContainer>
            <Grid is_flex>
              <Input
                value={contents}
                _onChange={changeContents}
                label="게시글 내용"
                placeholder="게시글 작성"
                multiLine
              />
              <Button text="게시글 작성" _onClick={addPost}></Button>
            </Grid>
          </TextContainer>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.section`
  box-sizing: border-box;
  padding-top: 100px;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  width: 100%;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  padding: 10px 0px;
  background-size: contain;
  width: 100%;
  display: flex;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  background-size: contain;
  width: 100%;
  display: flex;
`;

export default PostWrite;
