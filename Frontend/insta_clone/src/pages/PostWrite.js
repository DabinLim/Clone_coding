import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";

import Upload from "../shared/Upload";

import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const [contents, setContents] = React.useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
  };
  console.log(contents);

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성하기
        </Text>
        <Upload />
      </Grid>
      <Grid padding="16px"></Grid>
      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            {" "}
            미리보기{" "}
          </Text>
        </Grid>
        <Image shape="rectangle" src={"http://via.placeholder.com/400x300"} />
      </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
          //   _onClick={addPost}
        />
      </Grid>

      <Grid padding="16px">
        <Button text="게시글 작성"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
