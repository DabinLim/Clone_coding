import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";
import Story from "./Story";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";

import { actionCreators as friendActions } from "../redux/modules/user";

const FriendsHeader = (props) => {
  const dispatch = useDispatch();
  let name;
  let insta_Id;
  const post_data = useSelector((state) => state.user);
  // console.log(post_data);

  const frinedpost_data = useSelector((state) => state.user.friend);
  // console.log(frinedpost_data);

  const token = sessionStorage.getItem("token");
  let url = document.location.href.split("/");
  let friend_id = url[url.length - 1];

  React.useEffect(() => {
    dispatch(friendActions.FriendsPostSV(friend_id, token, history));
  }, []);

  if (frinedpost_data) {
    return (
      <React.Fragment>
        <Container>
          <Grid width="291px" height="150px">
            <Image
              // _onClick={openModal}
              shape="circle"
              size="150"
              display="block"
              margin-left="auto"
              margin-right="auto"
              src={frinedpost_data.profile_img}
            />
          </Grid>
          <TextContainer>
            <IdButton>
              <Text size="60" bold>
                {frinedpost_data.insta_Id}
              </Text>
              {/* <Button
                _onClick={() => {
                  history.push("/postwrite");
                }}
                width="80px"
              > */}
              {/* 게시글 작성
              </Button> */}
            </IdButton>
            <Text size="60" bold>
              {frinedpost_data.name}
            </Text>
            <Text bold>안녕!</Text>
          </TextContainer>
        </Container>
        <Story />
        {/* <EditProfile
          visible={modalVisible}
          onClose={closeModal}
          maskClosable={true}
          closable={true}
        /> */}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Container>
          <Grid width="291px" height="150px">
            <Image
              cursor="Pointer"
              shape="circle"
              size="150"
              display="block"
              margin-left="auto"
              margin-right="auto"
            />
          </Grid>
          <TextContainer>
            e
            <IdButton>
              <Text size="60" bold>
                {insta_Id}
              </Text>
              {/* <Button
                _onClick={() => {
                  history.push("/postwrite");
                }}
                width="80px"
              >
                게시글 작성
              </Button> */}
            </IdButton>
            <Text size="60" bold>
              {name}
            </Text>
            <Text bold>안녕!</Text>
          </TextContainer>
        </Container>
        <Story />
      </React.Fragment>
    );
  }

  // const user_info = useSelector((state) => state.post.list);
  // console.log(user_info);
};

const Container = styled.div`
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 44px;
  padding: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  margin-left: 100px;
  margin-bottom: 10px;
`;

const IdButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export default FriendsHeader;
