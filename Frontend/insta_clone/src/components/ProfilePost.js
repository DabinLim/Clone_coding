import React from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/index";

const ProfilePost = () => {
  return (
    <React.Fragment>
      <PostImage>
        <Image shape="square" size="250"></Image>
        <Image shape="square" size="250"></Image>
        <Image shape="square" size="250"></Image>
      </PostImage>
    </React.Fragment>
  );
};

const PostImage = styled.div`
  display: flex;
  position: relative;
  margin-top: 30px;
  margin-right: 14px;
  margin-left: 14px;
  width: auto;
  justify-content: space-between;
`;

export default ProfilePost;
