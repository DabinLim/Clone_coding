import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//actions
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";

//action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

function uploadImageSV(image) {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));

    // console.log(`images/${new Date().getTime()}_${image.name}`);
    // const _upload = storage.ref(`images/${image.name}`).put(image);

    // 업로드
    // _upload.then((snapshot) => {
    //     console.log(snapshot);

    //     //업로드한 파일의 다운로드 경로를 가져오자!
    //     snapshot.ref.getDownloadURL().then((url) => {
    //         console.log(url);
    //         dispatch(uploading(url));
    //     });
    // }).catch(err => {
    //     dispatch(uploading(false));
    // });
  };
}

//initial state
const initialState = {
  image_url: "",
  uploading: false,
};

//reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
        console.log(draft.image_url);
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  uploadImageSV,
};

export { actionCreators };
