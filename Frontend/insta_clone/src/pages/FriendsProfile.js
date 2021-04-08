import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import post, { actionCreators as friendActions } from "../redux/modules/user";
import { history } from "../redux/configStore";

import Header from "../components/Header";

//프로필 포스트들에 필요한 요소들
// import ProfileHeader from "../components/ProfileHeader";
// import ProfilePost from "../components/ProfilePost";
// import user from "../redux/modules/user";

import FriendsHeader from "../components/FriendsHeader";
import FriendsPost from "../components/FriendsPost";

const FriendsProfile = (props) => {
  const dispatch = useDispatch();
  //이 data는 포스트 쓴 유저들의 정보를 가져온다
  //현재 id의 정보를 가져옴
  const f_post_data = useSelector((state) => state.post.list);

  //들어온 url에 붙은 이름으로 name을 만든다 -> 한글은 좀 이상하게 나옴
  let url = document.location.href.split("/");
  let friend_id = url[url.length - 1];
  // console.log(data.name);
  const checkFriend = (e) => {
    if (e.insta_id == friend_id) {
      return true;
    }
  };

  const friendPost = f_post_data.filter(checkFriend);
  // console.log(friendPost)

  // // 해당하는 사람 포스트만 보여주기
  // console.log(data.name);
  // console.log(post_data[1].name);

  // if (data.name = post_data[i].name) {

  // }

  return (
    <React.Fragment>
      <Container>
        <FriendsHeader />
        <PostContainer>
          {friendPost &&
            friendPost.map((p, idx) => {
              return <FriendsPost key={idx} {...p} />;
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
  width: 100%;
  max-width: 800px;
  min-width: 800px;
`;

const PostContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
  width: 100%;
  max-width: 800px;
  min-width: 800px;
`;

export default FriendsProfile;
