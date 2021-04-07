import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/index";

import { useDispatch, useSelector } from "react-redux";

const FriendsPost = (props) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.user);
  console.log(user_data);
  const post_data = useSelector((state) => state.post.list);
  console.log(post_data);

  return (
    <React.Fragment>
      <Image size="250" shape="square" src={props.image[0]}></Image>
      <text>친구 개인 포스트 </text>
    </React.Fragment>
  );
};

export default FriendsPost;
