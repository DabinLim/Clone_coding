import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/index";

import { useDispatch, useSelector } from "react-redux";

const ProfilePost = (props) => {
  const { image, name } = props;
  const dispatch = useDispatch();
  const post_data = useSelector((state) => state.post.list);
  console.log(post_data);

  return (
    <React.Fragment>
      <PostImage>
        <Image shape="square" size="250" src={props.image}></Image>
      </PostImage>
    </React.Fragment>
  );
};

const PostImage = styled.div`
  size: 250;
  display: flex;
  position: relative;
  margin-top: 30px;
  margin-right: 14px;
  margin-left: 14px;
  width: auto;
  justify-content: space-between;
`;

export default ProfilePost;
