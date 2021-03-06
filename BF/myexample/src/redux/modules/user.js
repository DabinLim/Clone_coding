import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (list) => ({ list }));

const initialState = {
  list: [
    {
      user_id: "ekqls2143@naver.com",
      name_person: "임다빈",
      nickname: "beenstgrm",
      password: "ekqls1234",
    },
  ],
};

const loginSV = (data) => {
  return function () {
    const login_data = {
      user_id: data[0],
      password: data[1],
    };
    console.log(login_data);
  };
};

const signUpSV = (data) => {
  return function () {
    const signup_data = {
      user_id: data[0],
      name_person: data[1],
      nickname: data[2],
      password: data[3],
    };
    

    fetch("http://localhost:3001/api", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        insta_ID: signup_data.user_id,
        name_person: signup_data.name_person,
        nickname: signup_data.nickname,
        password: signup_data.password,
      }),
      method: "cors",
    }).then((response) => response.json())
      .then(data=>console.log(data));
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.list);
      }),
  },
  initialState
);

const actionCreators = {
  signUpSV,
  loginSV,
};

export { actionCreators };
