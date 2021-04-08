import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/index";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

const ProfilePost = (props) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.user);
  // console.log(user_data);
  const post_data = useSelector((state) => state.post.list);
  // console.log(post_data);

  // console.log(props.post_id);

  return (
    <React.Fragment>
      <Grid
        width="270"
        _onClick={() => {
          history.push("/postdetail/" + props.post_id);
        }}
      >
        <Imageitem>
          <Image size="250" shape="square" src={props.image[0]}></Image>
        </Imageitem>
      </Grid>
    </React.Fragment>
  );
};

const Imageitem = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export default ProfilePost;
