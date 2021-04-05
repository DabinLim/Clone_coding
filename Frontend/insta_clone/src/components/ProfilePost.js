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
      <Image size="250" shape="square" src={props.image}></Image>
    </React.Fragment>
  );
};

export default ProfilePost;
