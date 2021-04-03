import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";

//목록 리덕스에 넣어주는 애
const SET_POST = "SET_POST";
//목록 추가해주는 애
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({
  post_list,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

//게시글 하나에 꼭 들어가야하는 것 -> post에 있던 것 복붙
const initialPost = {
  user_name: "",
  insert_dt: moment(),
  image_url:
    "https://postfiles.pstatic.net/MjAyMTAzMjZfMTEy/MDAxNjE2NzY1NTQ3OTE5.d0ZhJ52S4eu9u4T7A4i2zinM88z0eQE8EGgWZxpuy_4g.joSdh241qBCkzJVQvDobxC-2hFSm890KB4BH8rCpgoog.JPEG.xhrl0520/%EA%B1%B0%EC%8B%A4.jpg?type=w966",
  contents: "",
  like_cnt: 0,
  //   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostSV = (contents = "") => {
  return function () {
    const _addpost = {
      ...initialPost,
      contents: contents,
    };
    console.log(_addpost);
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//우리가 만든 액션 생성자들 export해주기
const actionCreators = {
  setPost,
  addPost,
  addPostSV,
};

export { actionCreators };
