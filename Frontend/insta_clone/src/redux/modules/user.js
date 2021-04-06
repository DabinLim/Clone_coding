import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
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
          console.log(response.data);
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
    sessionStorage.removeItem("token");
    dispatch(logOut());
    history.replace("/");
    dispatch(setUser());
  };
};

//incoming에서 없었는데 받은 부분
const testSV = (token) => {
  console.log(token);
  return function () {
    const options = {
      url: "http://13.209.10.75/api/test",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        token: token,
      },
    };
    axios(options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        window.alert(error.response.data.errorMessage);
      });
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
        console.log(response);
        console.log(response.data);
        console.log(response["data"]);
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
    console.log("넘어왔음");

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
          name: response.data.post_list.name,
          profile_img: response.data.post_list.profile_img,
        };
        console.log(profile_data);
        dispatch(setUser(profile_data));
        // dispatch(likeActions.addLike(like_data));
        window.alert("게시물 작성이 완료되었습니다.");
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
        console.log(draft.user);
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
  logOutSV,
  testSV,
  editProfile,
};

export { actionCreators };
