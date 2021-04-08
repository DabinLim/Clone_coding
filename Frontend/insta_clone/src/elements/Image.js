import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, _onClick, cursor } = props;

  const styles = {
    src: src,
    size: size,
    cursor: cursor,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} onClick={_onClick}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "square") {
    return <ImageSquare {...styles}></ImageSquare>;
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src:
    "https://images.pexels.com/photos/376723/pexels-photo-376723.jpeg?cs=srgb&dl=pexels-daniel-pixelflow-376723.jpg&fm=jpg",
  size: 36,
  _onClick: () => {},
  cursor: "",
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  cursor: ${(props) => props.cursor};
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  cursor: ${(props) => props.cursor};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

const ImageSquare = styled.div`
  --size: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  height: var(--size);
  cursor: ${(props) => props.cursor};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

const AspectOutter = styled.div`
  width: auto;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
