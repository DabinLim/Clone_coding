import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configStore";

import Header from "../components/Header";

//프로필 포스트들에 필요한 요소들
import ProfileHeader from "../components/ProfileHeader";
import ProfilePost from "../components/ProfilePost";

const Profile = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user);
  const post_data = useSelector((state) => state.post.list);
  const token = sessionStorage.getItem("token");
  React.useEffect(() => {
    if (post_data.length == 0) {
      dispatch(postActions.getMyPostSV(token, history));
    }
  }, []);
  console.log(post_data);

  return (
    <React.Fragment>
      <Container>
        <ProfileHeader />
        <PostContainer>
          {post_data.map((p, idx) => {
            return <ProfilePost key={idx} {...p} />;
          })}
        </PostContainer>
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  margin: 0 auto;
  max-width: 930px;
  /* position: relative; */
  width: 100vh;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-right: 3px;
  margin-left: 3px;
  justify-content: space-between;
  width: 100%;
`;

export default Profile;
