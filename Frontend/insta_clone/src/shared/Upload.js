import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../elements";

import { actionCreators as imageActions } from "../redux/modules/Image";

const Upload = (props) => {
  const fileInput = React.useRef();
  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.image.uploading);

  const selectFile = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);

    //ref로 확인해본 결과
    console.log(fileInput.current.files[0]);
  };

  // const uploadSV = () => {
  //   // let image = fileInput.current?.files[0];
  //   // const _upload = storage.ref(`images/${image.name}`).put(image);
  //   // //업로드
  //   // _upload.then((snapshot) => {
  //   //   console.log(snapshot);

  //   //   //업로드한 파일의 다운로드 경로를 가져오자!
  //   //   snapshot.ref.getDownloadURL().then((url) => {
  //   //     console.log(url);
  //   //   })
  //   // });

  //   if (!fileInput.current || fileInput.current.files.length === 0) {
  //     window.alert("파일을 선택해주세요!");
  //     return;
  //   }
  //   dispatch(imageActions.uploadImageSV(fileInput.current.files[0]));
  //   console.log(fileInput.current.files[0]);
  // };

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <Button _onClick={uploadSV}>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;
