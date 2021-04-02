import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const TEST_DATA = "TEST_DATA";

const testData = createAction(TEST_DATA, (list) => ({ list }));

const initialState = {
  list: [],
};

const loginTest = (data) => {
  return function () {};
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
  loginTest,
};

export { actionCreators };
