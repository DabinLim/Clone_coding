import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";

const SET_COMMENT = "SET_COMMENT";

const setComment = createAction(SET_COMMENT, (list) => ({ list }));

const initialState = {
  list: {
    post_id:'1번post',
    user_id:'ekqls2143@naver.com',
    nickname:'beenstgrm',
    insert_dt:moment(),
  },
};


const getCommentSV = () => {
  return function () {
      
  };
};

const addCommentSV = (post_id, data) => {
  return function () {
    const comment_data= {
        post_id:'1번post',
        user_id:'ekqls2143@naver.com',
        nickname:'beenstgrm',
        insert_dt:moment(),
    };

    
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.list);
      }),
  },
  initialState
);

const actionCreators = {
  getCommentSV,
  addCommentSV,
};

export { actionCreators };
