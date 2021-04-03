import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_USER = "SET_USER";
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login:false
};

const loginCheck = (session_info, history) => {
  return function(dispatch) {
    if(session_info){
      dispatch(setUser())
      history.push('/newpost');
    }else{
      dispatch(logOut())
    }
  }
}

const logOutSV= (history) => {
  return function (dispatch) {
    sessionStorage.removeItem('token')
    dispatch(logOut());
    history.replace('/')
  }
}

const loginSV = (data, history) => {
  return function (dispatch) {
    const login_data = {
      user_id: data[0],
      password: data[1],
    };
    // 클라이언트 시험
    const user_data = {
      insta_Id: data[0],
      name: data[1],
    }
    dispatch(setUser(user_data))
    sessionStorage.setItem("token", data.token)


    // fetch("/api/login", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     insta_Id: login_data.user_id,
    //     password: login_data.password,
    //   }),
    //   method: "POST",
    // }).then((response) => response.json())
    // .then((data) => sessionStorage.setItem("token", data.token))
    // .then(() => {
    //   console.log('로그인완료')
    //   dispatch(setUser())
    // }
    // );
    history.push('/')
  };
};

const signUpSV = (data, history) => {
  return function (dispatch) {
    console.log(history)
    const signup_data = {
      user_id: data[0],
      name: data[1],
      password:data[2]
    };

    // 클라이언트 시험
    const user_data = {
      insta_Id: data[0],
      name: data[1],
    }

    dispatch(setUser(user_data))
    sessionStorage.setItem("token", data.token)

    // fetch("/api/register", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     insta_Id: signup_data.user_id,
    //     name: signup_data.name_person,
    //     password: signup_data.password,
    //   }),
    //   method: "POST",
    // }).then(()=> console.log('회원가입 성공'))
    // history.push('/')
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

      [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  signUpSV,
  loginSV,
  loginCheck,
  logOutSV
};

export { actionCreators };
