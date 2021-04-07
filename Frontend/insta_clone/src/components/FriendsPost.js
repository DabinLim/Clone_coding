import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/index";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

const FriendsPost = (props) => {
  const dispatch = useDispatch();
  const freinds_data = useSelector((state) => state.user);
  console.log(freinds_data);
  const post_data = useSelector((state) => state.post.list);
  console.log(post_data);

  return (
    <React.Fragment>
      <Grid
        width="270"
        _onClick={() => {
          history.push("/postdetail/" + props.post_id);
        }}
      >
        <Image size="250" shape="square" src={props.image[0]}></Image>
      </Grid>
    </React.Fragment>
  );
};

export default FriendsPost;
