import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from 'axios';

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const setComment = createAction(SET_COMMENT, (list) => ({ list }));
const addComment = createAction(ADD_COMMENT, (comment)=> ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (comment_id)=> ({comment_id}));

const initialState = {
  list:[]
};


const getCommentSV = (post_id) => {
  return function (dispatch) {
      const options = {
        url: 'http://13.209.10.75/api/set_comment',
        method: 'GET',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          post_id: post_id,
        }
      };
      axios(options).then((response) => {
        let comment_list =[];
        for (let i =0; i<response.data.comment.length; i++) {
          comment_list.push({
            profile_image: response.data.comment[i].profile_image,
            user_name: response.data.comment[i].user_name,
            content: response.data.comment[i].content,
            createAt: response.data.comment[i].createAt,
            comment_id: response.data.comment[i].comment_id
          })
        }
        dispatch(setComment(comment_list))
      }).catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      })
  };
};

const addCommentSV = (post_id, comment, token) => {
  return function (dispatch) {
    const options = {
      url: 'http://13.209.10.75/api/add_comment',
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json;charset=UTF-8',
        token: token
      },
      data: {
        post_id: post_id,
        content: comment,
      }
    };
    axios(options).then((response) => {
      let comment_list ={
          profile_image: response.data.comment.profile_image,
          user_name: response.data.comment.user_name,
          content: response.data.comment.content,
          createAt: response.data.comment.createAt,
          comment_id: response.data.comment.comment_id
      }
      dispatch(addComment(comment_list))
    }).catch((error) => {
      console.log(error);
      if (error.response) {
        window.alert(error.response.data.errorMessage);
      }
    })

    };

    
  };


  const deleteCommentSV = (comment_id) => {
    return function(dispatch) {
      const options = {
        url: 'http://13.209.10.75/api/delete_comment',
        method: 'DELETE',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          comment_id:comment_id
        }
      };
      axios(options).then((response) => {
        console.log(response)
        dispatch(deleteComment(comment_id))
      }).catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      })

    } 
  }


export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.list.unshift = action.payload.comment;
    }),

    [DELETE_COMMENT]: (state,action) => produce(state, (draft) => {
      let new_comment_list = draft.list.filter((v) => {
        if(v.comment_id !== action.payload.comment_id){
          return v
        }
      })

      draft.list = new_comment_list;
    })
  },
  initialState
);

const actionCreators = {
  getCommentSV,
  addCommentSV,
};

export { actionCreators };
