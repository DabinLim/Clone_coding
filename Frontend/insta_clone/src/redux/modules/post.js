import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import {response} from './mockup';
import axios from "axios";

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
  is_loading:false,
};

//게시글 하나에 꼭 들어가야하는 것 -> post에 있던 것 복붙
const initialPost = {
  image_url:
    "https://postfiles.pstatic.net/MjAyMTAzMjZfMTEy/MDAxNjE2NzY1NTQ3OTE5.d0ZhJ52S4eu9u4T7A4i2zinM88z0eQE8EGgWZxpuy_4g.joSdh241qBCkzJVQvDobxC-2hFSm890KB4BH8rCpgoog.JPEG.xhrl0520/%EA%B1%B0%EC%8B%A4.jpg?type=w966",
  contents: "",
  //   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostSV = (contents, token, history) => {
  return function () {
    const options = {
      url: "http://13.209.10.75/upload",
      method: 'POST',
      headers: {
        token: token
      },
      data: {
        file: 'https://postfiles.pstatic.net/MjAyMTAzMjZfMTEy/MDAxNjE2NzY1NTQ3OTE5.d0ZhJ52S4eu9u4T7A4i2zinM88z0eQE8EGgWZxpuy_4g.joSdh241qBCkzJVQvDobxC-2hFSm890KB4BH8rCpgoog.JPEG.xhrl0520/%EA%B1%B0%EC%8B%A4.jpg?type=w966',
        content: contents,
      }
    };
    axios(options).then((response) => {
      window.alert('게시물 작성이 완료되었습니다.');
      console.log(response)
      history.push('/profile')
    }).catch((error) => {
      window.alert(error.response.data.errorMessage)
    })
    
  };
};

const getFriendPostSV = (token, history) => {
  return function(dispatch, getState ){
    // const res = response.POST
    // const post_data = {
    //   name: res.author,
    //   content: res.content,
    //   image: res.file,
    //   createAt: res.createAt
    // }
    
    // dispatch(setPost(post_data))
    console.log(token)
    const options = {
      url: "http://13.209.10.75/api/show",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        token: token
      },
    };
    axios(options)
      .then((response) => {
        let post_data =[]

        for(let i =0; i < response.data.post_list.length; i ++){
          post_data.push({
            post_id:response.data.post_list[i].post_Id,
            name: response.data.post_list[i].name,
          content: response.data.post_list[i].content,
          image: response.data.post_list[i].file,
          createAt: response.data.post_list[i].createAt,
          })
        }
        console.log(response.data)
        console.log(post_data)
        dispatch(setPost(post_data))
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage);
        console.log(error.reaponse)
      });
  }

}

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_data
      
      // draft.list = draft.list.reduce((acc,cur) => {
      //   if(acc.findIndex(a => a.id === cur.id) === -1) {
      //     return [...acc, cur]
      //   } else {
      //     acc[acc.findIndex(a => a.id === cur.id)] = cur;
      //     return acc;
      //   }
      // },[]);
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//우리가 만든 액션 생성자들 export해주기
const actionCreators = {
  setPost,
  addPost,
  addPostSV,
  getFriendPostSV,
};

export { actionCreators };
