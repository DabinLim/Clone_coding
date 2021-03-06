import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_RECOMMEND = "SET_RECOMMEND";
const SET_FRIEND = "SET_FRIEND";
const ADD_FRIEND = "ADD_FRIEND";
const ADD_RECOMMEND = "ADD_RECOMMEND";
const DELETE_RECOMMEND = "DELETE_RECOMMEND";
const DELETE_FRIEND = "DELETE_FRIEND";

const setRecommend = createAction(SET_RECOMMEND, (list) => ({ list }));
const setFriendList = createAction(SET_FRIEND, (list) => ({ list }));
const addFriend = createAction(ADD_FRIEND, (new_friend) => ({ new_friend }));
const deleteRecommend = createAction(DELETE_RECOMMEND, (list) => ({ list }));
const addRecommend = createAction(ADD_RECOMMEND, (list) => ({ list }));

const deleteFriend = createAction(DELETE_FRIEND, (list) => ({ list }));

const initialState = {
  list: [],
  friend_list: [],
};

const setRecommendSV = (token) => {
  return function (dispatch) {
    const options = {
      url: "http://13.209.10.75/api/friend_list",
      method: "POST",
      headers: {
        token: token,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data);
        let recommended_list = [];
        // 받아온 데이터를 필요한 데이터만 분류하여 recommended_list에 저장
        for (let i = 0; i < response.data.friend_list.length; i++) {
          recommended_list.push({
            recommended_id: response.data.friend_list[i].insta_Id,
            recommended_name: response.data.friend_list[i].name,
            recommended_image: response.data.friend_list[i].profile_img,
          });
        }
        // 분류한 데이터를 리덕스 상태에 업데이트
        dispatch(setRecommend(recommended_list));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const getFriendListSV = (token) => {
  return function (dispatch) {
    const options = {
      url: "http://13.209.10.75/api/my_friend_list_show",
      method: "GET",
      headers: {
        token: token,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data)
        let friend_list = [];
        // 받아온 데이터를 필요한 데이터만 분류하여 friend_list에 저장
        for (let i = 0; i < response.data.my_friend_list_show.length; i++) {
          friend_list.push({
            name: response.data.my_friend_list_show[i].name,
            profile_image: response.data.my_friend_list_show[i].profile_img,
            insta_id: response.data.my_friend_list_show[i].insta_Id,
          });
        }
        // 분류한 데이터를 리덕스 상태에 업데이트
        dispatch(setFriendList(friend_list));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data);
        }
      });
  };
};

const addFriendSV = (token, name) => {
  return function (dispatch) {
    const options = {
      url: "http://13.209.10.75/api/add_friend",
      method: "POST",
      headers: {
        token: token,
      },
      data: {
        name: name,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data)
        // 방금 추가한 친구의 데이터를 response로 받아 그 중 필요한 데이터만 friend_list에 정리
        let friend_list = {
          name: response.data.new_friend.name,
          profile_image: response.data.new_friend.profile_img,
          insta_id: response.data.new_friend.insta_Id,
        };
        // 리덕스 업데이트
        dispatch(addFriend(friend_list));
        // 친구리스트에 추가된 친구는 추천리스트에서 지워져야 하므로 리덕스의 추천리스트도 업데이트
        dispatch(deleteRecommend(friend_list));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data);
        }
      });
  };
};

const deleteFriendSV = (name, token) => {
  return function (dispatch) {
    console.log("삭제시작");
    const options = {
      url: "http://13.209.10.75/api/delete_friend",
      method: "POST",
      headers: {
        token: token,
      },
      data: {
        name: name,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data);
        
        let new_recommend = {
          recommended_name: response.data.delete_friend.name,
          recommended_image: response.data.delete_friend.profile_img,
        };
        // 친구 삭제를 하면 추천리스트에 다시 생기게 하기 위해 리덕스의 추천리스트 업데이트
        dispatch(addRecommend(new_recommend));
        // 리덕스의 친구리스트에서는 삭제
        dispatch(deleteFriend(name));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data);
        }
      });
  };
};

export default handleActions(
  {
    [SET_RECOMMEND]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),

    [SET_FRIEND]: (state, action) =>
      produce(state, (draft) => {
        draft.friend_list = action.payload.list;
      }),

    [ADD_FRIEND]: (state, action) =>
      produce(state, (draft) => {
        // 추가한 친구를 가장 위에 위치하기 위해 unshift사용
        draft.friend_list.unshift(action.payload.new_friend);
      }),

    [DELETE_RECOMMEND]: (state, action) =>
      produce(state, (draft) => {
        // 리덕스의 추천리스트 데이터중에 방금 친구로 추가한 이름과 같은 데이터 빼고 나머지를 리턴
        let new_recommend = draft.list.filter((v) => {
          if (v.recommended_name !== action.payload.list.name) {
            return v;
          }
        });
        draft.list = new_recommend;
      }),

    [DELETE_FRIEND]: (state, action) =>
      produce(state, (draft) => {
        // 리덕스의 친구리스트 데이터중에 방금 삭제한 친구의 이름과 같은 데이터 빼고 나머지 리턴
        let new_friend_list = draft.friend_list.filter((v) => {
          if (v.name !== action.payload.list) {
            return v;
          }
        });

        draft.friend_list = new_friend_list;
      }),

    [ADD_RECOMMEND]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.list);
      }),
  },
  initialState
);

const actionCreators = {
  setRecommendSV,
  getFriendListSV,
  addFriendSV,
  deleteFriendSV,
};

export { actionCreators };
