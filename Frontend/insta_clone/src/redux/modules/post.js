import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

import { response } from "./mockup";

//목록 리덕스에 넣어주는 애
const SET_POST = "SET_POST";
//목록 추가해주는 애
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_data) => ({
  post_data,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

//게시글 하나에 꼭 들어가야하는 것 -> post에 있던 것 복붙
const initialPost = {
  nickname: "",
  image_url:
    "https://postfiles.pstatic.net/MjAyMTAzMjZfMTEy/MDAxNjE2NzY1NTQ3OTE5.d0ZhJ52S4eu9u4T7A4i2zinM88z0eQE8EGgWZxpuy_4g.joSdh241qBCkzJVQvDobxC-2hFSm890KB4BH8rCpgoog.JPEG.xhrl0520/%EA%B1%B0%EC%8B%A4.jpg?type=w966",
  content: "",
  //   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostSV = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const res = response.POST;
    const profilepost_data = {
      name: res.author,
      content: res.content,
      image: res.file,
      createAt: res.createAt,
      comment: res.comment,
    };
    dispatch(addPost(profilepost_data));
  };
};

const getMyPostSV = (token, history) => {
  return function (dispatch, getState) {
    const res = response.POST;
    const post_data = {
      name: res.author,
      content: res.content,
      image: res.file,
      createAt: res.createAt,
    };

    dispatch(setPost(post_data));
  };
};

const getPostSV = (token, history) => {
  return function (dispatch, getState) {
    const res = response.POST;
    const post_data = {
      name: res.author,
      content: res.content,
      image: res.file,
      createAt: res.createAt,
    };

    dispatch(setPost(post_data));
    // const options = {
    //   url: "http://13.209.10.75/api/show",
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    //   data: {
    //     token: token
    //   },
    // };
    // axios(options)
    //   .then((response) => {
    //     let post_data = {
    //       name: response.data.name,
    //       content: response.data.content,
    //       image: response.data.image,
    //       createAt: response.data.createAt
    //     }

    //     setPost(post_data)
    //   })
    //   .catch((error) => {
    //     window.alert(error.response.data.errorMessage);
    //   });
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post_data);

        // draft.list = draft.list.reduce((acc,cur) => {
        //   if(acc.findIndex(a => a.id === cur.id) === -1) {
        //     return [...acc, cur]
        //   } else {
        //     acc[acc.findIndex(a => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // },[]);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.profilepost_data);
      }),
  },
  initialState
);

//우리가 만든 액션 생성자들 export해주기
const actionCreators = {
  setPost,
  addPost,
  addPostSV,
  getPostSV,
  getMyPostSV,
};

export { actionCreators };
