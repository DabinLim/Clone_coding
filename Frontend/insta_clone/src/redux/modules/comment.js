import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from "axios";
import { actionCreators as postActions } from "./post";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const setComment = createAction(SET_COMMENT, (list) => ({ list }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({
  comment_id,
}));

const initialState = {
  list: [],
};

const getCommentSV = (post_id) => {
  return function (dispatch) {
    const options = {
      url: "http://13.209.10.75/api/set_comment",
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        post_Id: post_id,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data)
        let comment_list = [];
        // reponse 데이터 중 필요한 데이터를 분류하여 comment_list에 저장
        for (let i = 0; i < response.data.comments.length; i++) {
          comment_list.push({
            profile_image: response.data.comments[i].profile_img,
            user_name: response.data.comments[i].name,
            content: response.data.comments[i].text,
            createAt: response.data.comments[i].createAt,
            comment_id: response.data.comments[i].comment_Id,
            insta_id: response.data.comments[i].insta_Id,
          });
        }
        // 리덕스 상태 업데이트
        dispatch(setComment(comment_list));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const addCommentSV = (post_id, comment, token) => {
  console.log(post_id, comment);
  return function (dispatch) {
    const options = {
      url: "http://13.209.10.75/api/add_comment",
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json;charset=UTF-8",
        token: token,
      },
      data: {
        post_Id: post_id,
        content: comment,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data.realTimeComment)
        let comment_list = {
          profile_image: response.data.realTimeComment.profile_img,
          user_name: response.data.realTimeComment.name,
          content: response.data.realTimeComment.text,
          createAt: response.data.realTimeComment.createAt,
          comment_id: response.data.realTimeComment.comment_Id,
          insta_id: response.data.realTimeComment.insta_Id,
        };
        // 방금 추가한 코멘트 정보를 리덕스 상태에 업데이트
        dispatch(addComment(comment_list));
        // 코멘트의 숫자를 셀때는 post정보에 포함된 comments 배열의 길이로 숫자를 세서 화면에 표현하므로 post 리덕스의 상태도 수정해주어야 한다.
        dispatch(postActions.newComment(parseInt(post_id)));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const deleteCommentSV = (post_id, comment_id) => {
  console.log(comment_id);
  return function (dispatch) {
    const options = {
      url: "http://13.209.10.75/api/delete_comment",
      method: "DELETE",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        post_Id: post_id,
        comment_Id: comment_id,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response)
        // 방금 삭제한 코멘트 정보를 리덕스 상태에 업데이트
        dispatch(deleteComment(comment_id));
        // 코멘트의 숫자를 셀때는 post정보에 포함된 comments 배열의 길이로 숫자를 세서 화면에 표현하므로 post 리덕스의 상태도 수정해주어야 한다.
        dispatch(postActions.oldComment(parseInt(post_id)));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment);
      }),

    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let new_comment_list = draft.list.filter((v) => {
          if (v.comment_id !== action.payload.comment_id) {
            return v;
          }
        });

        draft.list = new_comment_list;
      }),
  },
  initialState
);

const actionCreators = {
  getCommentSV,
  addCommentSV,
  deleteCommentSV,
};

export { actionCreators };
