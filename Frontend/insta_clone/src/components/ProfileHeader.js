import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";
import Story from "./Story";
import { history } from "../redux/configStore";

const ProfileHeader = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid width="291px" height="150px">
          <Image
            shape="circle"
            size="150"
            display="block"
            margin-left="auto"
            margin-right="auto"
          />
        </Grid>
        <TextContainer>
          <IdButton>
            <Text size="60" bold>
              user_id
            </Text>
            <Button _onClick={()=> {history.push('/postwrite')}} width="80px">게시글 작성</Button>
          </IdButton>
          <Text bold>user_name</Text>
          <Text bold>안녕!</Text>
        </TextContainer>
      </Container>
      <Story />
    </React.Fragment>
  );
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
  width: 613px;
  height: 150px;
  margin-bottom: 10px;
`;

const IdButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export default ProfileHeader;
