import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const IS_SIGNUP = "IS_SIGNUP";
const FRIEND_POST = "FRIEND_POST";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const is_Signup = createAction(IS_SIGNUP, (user) => ({ user }));
const friendPost = createAction(FRIEND_POST, (friend) => ({ friend }));

const initialState = {
  user: null,
  is_login: false,
  is_signup: false,
  friend: null,
};

const loginCheck = (session_info, token) => {
  return function (dispatch) {
    if (session_info) {
      const options = {
        url: "http://13.209.10.75/api/check",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: token,
        },
      };
      axios(options)
        .then((response) => {
          // 로그인 상태라면 현재 로그인한 유저정보 리덕스에 업데이트
          dispatch(setUser(response.data));
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            window.alert(error.response.data.errorMessage);
          }
        });
    } else {
      dispatch(logOut());
    }
  };
};

const logOutSV = (history) => {
  return function (dispatch) {
    // session에 token 삭제 후
    sessionStorage.removeItem("token");
    // is_login을 false로 바꿔주고
    dispatch(logOut());
    history.replace("/");
    // 리덕스 상태 업데이트
    dispatch(setUser());
  };
};

const loginSV = (data, history) => {
  return function (dispatch) {
    const login_data = {
      user_id: data[0],
      password: data[1],
    };

    // //클라이언트 시험
    // const user_data = {
    //   insta_Id: data[0],
    //   name: data[1],
    // }
    // dispatch(setUser(user_data))
    // sessionStorage.setItem("token", data.token)

    const options = {
      url: "http://13.209.10.75/api/login",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        insta_Id: login_data.user_id,
        password: login_data.password,
      },
    };
    axios(options)
      .then((response) => {
        // 받은 토근을 sessionStoreage에 저장
        sessionStorage.setItem("token", response.data.token);
        window.alert("로그인 완료");
        dispatch(setUser(login_data.user_id));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });

    //밑에 주석단 부분
    // const options = {
    //   url: "http://13.209.10.75/api/login",
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    //   data: {
    //     insta_Id: login_data.user_id,
    //     password: login_data.password,
    //   },
    // };
    // axios(options)
    //   .then((response) => {
    //     sessionStorage.setItem("token", response.data.token);
    //     window.alert("로그인 완료");
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     window.alert(error.response.data.errorMessage);
    //   });
  };
};

const signUpSV = (data, history) => {
  return function (dispatch) {
    // console.log(history);
    const signup_data = {
      user_id: data[0],
      name: data[1],
      password: data[2],
    };

    // 클라이언트 시험
    // const user_data = {
    //   insta_Id: data[0],
    //   name: data[1],
    // }

    // dispatch(setUser(user_data))
    // sessionStorage.setItem("token", data.token)

    // fetch("http://13.209.10.75/api/register", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     insta_Id: signup_data.user_id,
    //     name: signup_data.name_person,
    //     password: signup_data.password,
    //   }),
    //   method: "POST",
    // })
    //   .then((response) => console.log(response))
    //   .catch((error) => {
    //     window.alert(error);
    //     console.log(error.errorMessage);
    //   });
    const options = {
      url: "http://13.209.10.75/api/register",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        insta_Id: signup_data.user_id,
        name: signup_data.name,
        password: signup_data.password,
      },
    };
    axios(options)
      .then((response) => {
        // 현재 화면을 로그인창으로 바꿔주기 위함
        dispatch(is_Signup())
        // console.log(response);
        // console.log(response.data);
        // console.log(response["data"]);
      })
      .catch((error) => {
        window.alert(error.response.data.errorMessage);
      });
    //   $.ajax({
    //     type: "POST",
    //     url: "http://13.209.10.75/api/register",
    //     data: {
    //         "insta_Id": signup_data.user_id ,
    //         "name": signup_data.name_person,
    //         "password": signup_data.password
    //     },
    //     success: function (response) {
    //         alert("안녕 회원가입 성공!")
    //     },
    //     error: function (error) {
    //         alert(error.responseJSON.errorMessage)
    //         // customAlert(error.responseJSON.errorMessage);
    //     },
    // });
    history.push("/");
  };
};

const editProfile = (file, token, history) => {
  return function (dispatch) {
    let formData = new FormData();
    formData.append("file", file);
    // console.log("넘어왔음");

    const options = {
      url: "http://13.209.10.75/api/profile_img_save",
      method: "POST",
      headers: {
        token: token,
      },
      data: formData,
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        let profile_data = {
          insta_Id: response.data.insta_Id,
          name: response.data.name,
          profile_img: response.data.profile_img,
        };
        // console.log(profile_data);
        // 새로운 유저 정보로 리덕스 상태 업데이트
        dispatch(setUser(profile_data));
        // dispatch(likeActions.addLike(like_data));
        window.alert("프로필 변경이 완료되었습니다.");
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

//친구 개인 상세 페이지
const FriendsPostSV = (friend_id, token, history) => {
  return function (dispatch) {
    
    const options = {
      url: "http://13.209.10.75/api/personal_feed",
      method: "POST",
      headers: {
        token: token,
      },
      data: {
        insta_Id: friend_id,
      },
    };
    axios(options)
      .then((response) => {
        // console.log(response.data);
        let friendsprofile_data = {
          insta_Id: response.data.insta_Id,
          name: response.data.name,
          profile_img: response.data.profile_img,
        };
        // console.log(friendsprofile_data);
        dispatch(friendPost(friendsprofile_data));
        // dispatch(likeActions.addLike(like_data));
        // window.alert("프로필 변경이 완료되었습니다.");
        // history.push("/profile");
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
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
        // console.log(draft.user);
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),

    [IS_SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        if (draft.is_signup) {
          draft.is_signup = false;
        } else {
          draft.is_signup = true;
        }
      }),
    [FRIEND_POST]: (state, action) => 
      produce(state, (draft) => {
        draft.friend = action.payload.friend;
      })
    
  },
  initialState
);

const actionCreators = {
  signUpSV,
  loginSV,
  loginCheck,
  logOutSV,
  editProfile,
  is_Signup,
  FriendsPostSV,
};

export { actionCreators };
