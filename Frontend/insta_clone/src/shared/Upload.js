import React from "react";

const Upload = (props) => {
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);
  };
  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
    </React.Fragment>
  );
};

export default Upload;
