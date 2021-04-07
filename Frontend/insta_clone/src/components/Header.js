import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements/index";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderContents>
          <BannerContainer>
            <Banner
              onClick={() => {
                history.push("/newpost");
              }}
            ></Banner>
          </BannerContainer>
          <TextContainer>
            <Text bold>검색은 못만들겠다 진짜</Text>
          </TextContainer>
          <IconContainer>
            <HomeIcon
              onClick={() => {
                dispatch(userActions.logOutSV(history));
              }}
              fontSize="large"
            />
            <ExploreIcon
              onClick={() => {
                dispatch(userActions.testSV(token));
              }}
              fontSize="large"
            />
            <FavoriteBorderIcon fontSize="large" />
            <Image
              _onClick={() => {
                history.push("/profile");
              }}
              shape="circle"
              size="24"
            />
          </IconContainer>
        </HeaderContents>
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  border: 1px solid #dbdbdb;
  width: 100%;
  height: 55px;
  position: fixed;
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeaderContents = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex_start;
`;

const Banner = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/instagram.png?alt=media&token=a53527c4-07df-4c3f-ae18-ca30c3e0aa2b");
  min-width: 150px;
  min-height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const IconContainer = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
