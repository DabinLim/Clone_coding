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
  
  const f_post_data = useSelector((state) => state.post.list);

  // 현재 url을 '/' 기준으로 나누어 url 변수에 저장
  let url = document.location.href.split("/");
  // 가장 마지막 인덱스가 친구 id이므로 friend_id라는 변수에 저장
  let friend_id = url[url.length - 1];
  // console.log(data.name);
  // 게시글 정보의 id와 친구id를 비교하여 일치하는 경우에만 true 반환
  const checkFriend = (e) => {
    if (e.insta_id == friend_id) {
      return true;
    }
  };
 // checkFriend 함수를 이용하여 친구 게시글만 friendPost 변수에 저장
  const friendPost = f_post_data.filter(checkFriend);
  

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
