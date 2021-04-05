import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import axios from 'axios';


const SET_RECOMMEND = 'SET_RECOMMEND';
const SET_FRIEND = 'SET_FRIEND';
const ADD_FRIEND = 'ADD_FRIEND';
const UPDATE_RECOMMEND = 'UPDATE_RECOMMEND';

const setRecommend = createAction(SET_RECOMMEND, (list) => ({list}));
const setFriendList = createAction(SET_FRIEND, (list) => ({list}));
const addFriend = createAction(ADD_FRIEND, (new_friend) => ({new_friend}));
const updateRecommend = createAction(UPDATE_RECOMMEND, (list) => ({list}));

const initialState = {
    list:[],
    friend_list:[],
}

const setRecommendSV = (token) => {
    return function(dispatch) {

        const options = {
            url: "http://13.209.10.75/api/friend_list",
            method: 'POST',
            headers:{
                token: token
            },
        };
        axios(options).then((response) => {
            let recommended_list = []
            for(let i = 0; i< response.data.friend_list.length; i++){
                recommended_list.push({
                    recommended_id: response.data.friend_list[i].insta_Id,
                    recommended_name: response.data.friend_list[i].name,
                })
            }
            dispatch(setRecommend(recommended_list))
        }).catch((error)=> {
            console.log(error)
            if(error.response){
                window.alert(error.response.data.errorMessage);
            }
        })
    }
}

const getFriendListSV = (token) => {
    return function(dispatch) {

        const options = {
            url: "http://13.209.10.75/api/my_friend_list_show",
            method: 'POST',
            headers:{
                token: token
            },
        };
        axios(options).then((response) => {
            console.log(response.data)
            dispatch(setFriendList(response.data.my_friend_list_show))
            
        }).catch((error)=> {
            console.log(error)
            if(error.response){
                window.alert(error.response.data);
            }
        })
    }
}

const addFriendSV = (token, name) => {
    return function(dispatch) {
        
        const options = {
            url: "http://13.209.10.75/api/friend_list_show",
            method: 'POST',
            headers:{
                token: token
            },
            data: {
                name: name,
            }
        };
        axios(options).then((response) => {
            console.log(response.data)
            dispatch(addFriend(name))
            
        }).catch((error)=> {
            console.log(error)
            if(error.response){
                window.alert(error.response.data);
            }
        })
    }
}



export default handleActions(
    {
      [SET_RECOMMEND]: (state, action) => produce(state, (draft) => {
          draft.list = action.payload.list
      }),

      [SET_FRIEND] : (state, action) => produce(state, (draft) => {
          draft.friend_list = action.payload.list
      }),

      [ADD_FRIEND] : (state, action) => produce(state, (draft) => {
            draft.friend_list.unshift(action.payload.new_friend) 
      }),

      [UPDATE_RECOMMEND] : (state, action) => produce(state, (draft) => {
          let new_recommend = draft.list.filter((v) => {
              if(v.name !== actionCreators.payload.list.name){
                  return v;
              }
          })
          draft.list = new_recommend;
      })

    },
    initialState
  );

  const actionCreators = {
      setRecommendSV,
      getFriendListSV,
      addFriendSV,
  };

  export { actionCreators };