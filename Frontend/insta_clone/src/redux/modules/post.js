import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";
import { actionCreators as likeActions } from "./like";

import { response } from "./mockup";

//목록 리덕스에 넣어주는 애
const SET_POST = "SET_POST";
const SET_FRIEND_POST = "SET_FRIEND_POST";
//목록 추가해주는 애
const ADD_POST = "ADD_POST";
const DELETE_POST = 'DELETE_POST';


const setPost = createAction(SET_POST, (post_data) => ({
  post_data,
}));
const setFriendPost = createAction(SET_FRIEND_POST, (post_data) => ({
  post_data,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const deletePost = createAction(DELETE_POST, (post) => ({post}));


const initialState = {
  list: [],
  friend_list: [],
};

//게시글 하나에 꼭 들어가야하는 것 -> post에 있던 것 복붙
const initialPost = {
  image_url:
    "https://postfiles.pstatic.net/MjAyMTAzMjZfMTEy/MDAxNjE2NzY1NTQ3OTE5.d0ZhJ52S4eu9u4T7A4i2zinM88z0eQE8EGgWZxpuy_4g.joSdh241qBCkzJVQvDobxC-2hFSm890KB4BH8rCpgoog.JPEG.xhrl0520/%EA%B1%B0%EC%8B%A4.jpg?type=w966",
  content: "",
  //   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostSV = (contents, file, token, history) => {
  return function (dispatch) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("content", contents);

    const options = {
      url: "http://13.209.10.75/upload",
      method: "POST",
      headers: {
        token: token,
      },
      data: formData,
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        let post_data = {
          post_id: response.data.post_list.post_Id,
          name: response.data.post_list.name,
          content: response.data.post_list.content,
          image: response.data.post_list.file_name,
          createAt: response.data.post_list.createAt,
          profile_image: response.data.post_list.profile_img,
          insta_id: response.data.post_list.insta_Id,
        };
        let like_data = {
          post_id: response.data.post_list.post_Id,
          like_count: response.data.post_list.like_count,
          like_user: response.data.post_list.like_user,
        };
        console.log(post_data, like_data);
        dispatch(addPost(post_data));
        dispatch(likeActions.addLike(like_data));
        window.alert("게시물 작성이 완료되었습니다.");
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const getMyPostSV = (token, history) => {
  return function (dispatch, getState) {
    const res = response.post_list;
    let post_data = [];
    for (let i = 0; i < res.length; i++) {
      post_data.push({
        image: res[i].file,
        name: res[i].name,
        createAt: res[i].createAt,
        content: res[i].content,
      });
    }

    dispatch(setPost(post_data));
  };
};

const getAllPostSV = (token, history) => {
  return function (dispatch, getState) {
    // const res = response.post_list
    // let post_data = []
    // for(let i =0; i < res.length; i++){
    //   post_data.push(
    //     {
    //       image:res[i].file,
    //       name:res[i].name,
    //       createAt:res[i].createAt,
    //       content:res[i].content
    //     }
    //   )
    // }

    // dispatch(setPost(post_data))
    // console.log(token)
    const options = {
      url: "http://13.209.10.75/api/show",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: token,
      },
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        let post_data = [];
        let like_data = [];
        for (let i = 0; i < response.data.post_list.length; i++) {
          post_data.push({
            post_id: response.data.post_list[i].post_Id,
            name: response.data.post_list[i].name,
            content: response.data.post_list[i].content,
            image: response.data.post_list[i].file_name,
            createAt: response.data.post_list[i].createAt,
            profile_image: response.data.post_list[i].profile_img,
            like_count: response.data.post_list[i].like_count,
            insta_id: response.data.post_list[i].insta_Id,
          });
          like_data.push({
            post_id: response.data.post_list[i].post_Id,
            like_user: response.data.post_list[i].like_user,
            like_count: response.data.post_list[i].like_count,
          });
        }
        dispatch(setPost(post_data));
        dispatch(likeActions.setLike(like_data));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};


const getFriendsPostSV = (token, history) => {
  return function (dispatch, getState) {
    const options = {
      url: "http://13.209.10.75/api/show_friend_feed",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: token,
      },
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        let post_data = [];
        let like_data = [];
        for (let i = 0; i < response.data.post_list.length; i++) {
          post_data.push({
            post_id: response.data.post_list[i].post_Id,
            name: response.data.post_list[i].name,
            content: response.data.post_list[i].content,
            image: response.data.post_list[i].file_name,
            createAt: response.data.post_list[i].createAt,
            profile_image: response.data.post_list[i].profile_img,
            like_count: response.data.post_list[i].like_count,
          });
          like_data.push({
            post_id: response.data.post_list[i].post_Id,
            like_user: response.data.post_list[i].like_user,
            like_count: response.data.post_list[i].like_count,
          });
        }
        dispatch(setFriendPost(post_data));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const deletePostSV = (post_id) => {
  return function(dispatch) {
    const options = {
      url: 'http://13.209.10.75/detail/delete',
      method: 'DELETE',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      data: {
        post_Id: post_id
      }
    };
    axios(options).then((response) => {
      console.log(response)
      dispatch(deletePost(post_id))
    }).catch((error) => {
      console.log(error);
      if (error.response) {
        window.alert(error.response.data.errorMessage);
      }
    })
  }
}

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_data;

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
        draft.list.unshift(action.payload.post);
      }),

      [SET_FRIEND_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.friend_list = action.payload.post_data;

        // draft.list = draft.list.reduce((acc,cur) => {
        //   if(acc.findIndex(a => a.id === cur.id) === -1) {
        //     return [...acc, cur]
        //   } else {
        //     acc[acc.findIndex(a => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // },[]);
      }),

    [DELETE_POST] : (state, action) => produce(state,(draft) => {
      let new_post_list = draft.list.filter((v) => {
        if(v.post_id !== action.payload.post){
          return v
        }
      })

      draft.list = new_post_list;
    })
  },
  initialState
);

//우리가 만든 액션 생성자들 export해주기
const actionCreators = {
  setPost,
  getFriendsPostSV,
  addPostSV,
  getAllPostSV,
  getMyPostSV,
  deletePostSV,
};

export { actionCreators };
