import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const TEST_DATA = "TEST_DATA";

const testData = createAction(TEST_DATA, (list) => ({ list }));

const initialState = {
  list: [],
};

const loginSV = (data) => {
  return function () {
      const login_data = {
          user_id:data[0],
          password:data[1]
      }
      console.log(login_data)
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

    console.log(signup_data);
  };
};

export default handleActions(
  {
    [TEST_DATA]: (state, action) =>
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
