import React from "react";
import styled from "styled-components";
import { Image, Text } from "../elements";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as friendActions } from "../redux/modules/friend";
import FollowList from './FollowList';

const RecommendList = (props) => {

  // 나의 팔로우(FriendList) 정보들을 담은 모달창
    const [modalVisible, setModalVisible] = React.useState(false)

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }


  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

    const token = sessionStorage.getItem('token')
  const addFriend = (name, id) => {
    // 현재 로그인한 사람의 친구 정보 리덕스 상태에 업데이트
    dispatch(friendActions.addFriendSV(token, name))
  }

  let user_name;
  let user_id;
  let user_profile;
  if (user.user) {
    user_name = user.user.name;
    user_id = user.user.insta_Id;
    user_profile = user.user.profile_img;
  }
  // 친구가 아닌 유저는 추천리스트
  const recommended_list = useSelector((state) => state.friend.list);

  React.useEffect(() => {
    const token = sessionStorage.getItem("token");
    // 친구 리스트에 없는 유저는 추천 리스트에 업데이트
    dispatch(friendActions.setRecommendSV(token));
  }, []);

  return (
    <React.Fragment>
      <Container>
        <MyProfileContainer>
          <MyInfo>
            <Image cursor='pointer'_onClick={()=>{history.push('/profile')}}src={user_profile} shape="circle" size="60" />
            <TextBox>
              <Text
                cursor="Pointer"
                _onClick={() => {
                  history.push("/profile");
                }}
                NotP
                bold
              >
                {user_id}
              </Text>
              <Text NotP>{user_name}</Text>
            </TextBox>
          </MyInfo>
          <Text
            cursor="Pointer"
            color='#0095f6'
            bold
            _onClick={() => {
              window.alert("아직 준비중 입니다.");
            }}
          >
            전환
          </Text>
        </MyProfileContainer>
        <RecommendContainer>
          <RecommendTextBox>
            <Text NotP bold color='#8e8e8e'>
              회원님을 위한 추천
            </Text>
            <Text cursor='Pointer' _onClick={openModal} NotP bold>
                나의 팔로우
            </Text>
          </RecommendTextBox>
          <Recommended>
            {recommended_list.map((v) => {
              return (
                <RecommendedUser key={v.recommended_id}>
                  <MyInfo>
                    <Image cursor='pointer'_onClick={()=>{history.push('/friends/'+v.recommended_id)}} src={v.recommended_image} shape="circle" />
                    <TextBox>
                      <Text NotP bold>
                        {v.recommended_name}
                      </Text>
                      <Text NotP size="10px">
                        회원님을 위한 추천
                      </Text>
                    </TextBox>
                  </MyInfo>
                  <Text cursor="Pointer" color='#0095f6' bold _onClick={()=>{addFriend(v.recommended_name)}}>팔로우</Text>
                </RecommendedUser>
              );
            })}
            {/* <RecommendedUser>
              <MyInfo>
                <Image shape="circle" />
                <TextBox>
                  <Text NotP bold>
                    {" "}
                    Taegin
                  </Text>
                  <Text NotP size="10px">
                    회원님을 위한 추천
                  </Text>
                </TextBox>
              </MyInfo>
              <Text cursor="Pointer">팔로우</Text>
            </RecommendedUser> */}
          </Recommended>
        </RecommendContainer>
      </Container>
            <FollowList visible={modalVisible} onClose={closeModal} maskClosable={true} closable={true}/>
    </React.Fragment>
  );
};

const Container = styled.div`
  min-width: 300px;
  height: 100%;
  position: fixed;
  top: 120;
  right: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MyInfo = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 10px;
`;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 400px;
  overflow:auto;
`;

const RecommendTextBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Recommended = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const RecommendedUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default RecommendList;
