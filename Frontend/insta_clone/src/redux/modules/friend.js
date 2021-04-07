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
        console.log(response.data);
        let recommended_list = [];
        for (let i = 0; i < response.data.friend_list.length; i++) {
          recommended_list.push({
            recommended_id: response.data.friend_list[i].insta_Id,
            recommended_name: response.data.friend_list[i].name,
            recommended_image: response.data.friend_list[i].profile_img,
          });
        }
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
        console.log(response.data)
        let friend_list = [];
        for (let i = 0; i < response.data.my_friend_list_show.length; i++) {
          friend_list.push({
            name: response.data.my_friend_list_show[i].name,
            profile_image: response.data.my_friend_list_show[i].profile_img,
            insta_id: response.data.my_friend_list_show[i].insta_Id,
          });
        }
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
        console.log(response.data)
        let friend_list = {
          name: response.data.new_friend.name,
          profile_image: response.data.new_friend.profile_img,
          insta_id: response.data.new_friend.insta_Id,
        };
        dispatch(addFriend(friend_list));
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
        console.log(response.data);
        let new_recommend = {
          recommended_name: response.data.delete_friend.name,
          recommended_image: response.data.delete_friend.profile_img,
        };
        dispatch(addRecommend(new_recommend));
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
        draft.friend_list.unshift(action.payload.new_friend);
      }),

    [DELETE_RECOMMEND]: (state, action) =>
      produce(state, (draft) => {
        let new_recommend = draft.list.filter((v) => {
          if (v.recommended_name !== action.payload.list.name) {
            return v;
          }
        });
        draft.list = new_recommend;
      }),

    [DELETE_FRIEND]: (state, action) =>
      produce(state, (draft) => {
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
