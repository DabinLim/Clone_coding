import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import styled from "styled-components";

import Header from "../components/Header";

//프로필 포스트들에 필요한 요소들
import ProfileHeader from "../components/ProfileHeader";
import ProfilePost from "../components/ProfilePost";

const ProfileDetail = () => {
  return (
    <React.Fragment>
      <Container>
        <ProfileHeader />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </Container>
    </React.Fragment>
  );
};
const Container = styled.section`
  box-sizing: border-box;
  padding-top: 30px;
  margin: 0 auto;
  max-width: 930px;
  position: relative;
  width: 100%;
`;

export default ProfileDetail;
