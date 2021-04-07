import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import post, { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configStore";

import Header from "../components/Header";

//프로필 포스트들에 필요한 요소들
import ProfileHeader from "../components/ProfileHeader";
import ProfilePost from "../components/ProfilePost";
import user from "../redux/modules/user";

const Profile = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user);
  const post_data = useSelector((state) => state.post.list);
  console.log(post_data);
  const token = sessionStorage.getItem("token");
  React.useEffect(() => {
    if (post_data.length == 0) {
      dispatch(postActions.getMyPostSV(token, history));
    }
  }, []);
  // console.log(post_data);
  console.log(data);

  // // 해당하는 사람 포스트만 보여주기
  // console.log(data.name);
  // console.log(post_data[1].name);

  // if (data.name = post_data[i].name) {

  // }

  return (
    <React.Fragment>
      <Container>
        <ProfileHeader />
        <PostContainer>
          {post_data.map((p, idx) => {
            if (data.name == post_data[idx].name) {
              return <ProfilePost key={idx} {...p} />;
            }
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
