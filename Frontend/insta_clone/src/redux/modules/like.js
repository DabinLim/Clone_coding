import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import axios from 'axios';

const SET_LIKE = 'SET_LIKE';
const ADD_LIKE = 'ADD_LIKE';

const setLike = createAction(SET_LIKE, (like_user) => ({like_user}));

const addLike = createAction(ADD_LIKE, (like_user) => ({like_user}));

const initialState = {
    like:[],
}

const changeLikeSV = (postid,token) => {
    return function(dispatch){
    
    const options = {
      url: "http://13.209.10.75/api/like",
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json;charset=UTF-8",
        token: token
      },
      data: {
        post_Id:postid
      }
    };
    axios(options)
      .then((response) => {
        console.log(response.data)
        let like_data = [];
        for(let i =0; i< response.data.post_list.length; i++){
            like_data.push({
                post_id:response.data.post_list[i].post_Id,
                like_user:response.data.post_list[i].like_user,
                like_count:response.data.post_list[i].like_count,
            })
        }
        console.log(like_data)
        dispatch(setLike(like_data))
    })
      .catch((error) => {
        console.log(error);
      });
    }
  }


  export default handleActions(
    {
      [SET_LIKE]: (state, action) => produce(state, (draft) => {
        draft.like = action.payload.like_user
      
    }),

      [ADD_LIKE]: (state, action) => produce(state, (draft) => {
        draft.like.unshift(action.payload.like_user)
      }),

    },
    

    initialState
  );

  
  //우리가 만든 액션 생성자들 export해주기
  const actionCreators = {
    setLike,
    addLike,
    changeLikeSV
  };
  
  export { actionCreators };