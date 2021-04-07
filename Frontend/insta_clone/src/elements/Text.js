import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, _onClick,NotP, cursor  } = props;

  const styles = { bold: bold, color: color, size: size, margin: margin, cursor:cursor, NotP:NotP,};

  return (
    <React.Fragment>
      {props.NotP ? (
        <T {...styles} onClick={_onClick}>
          {children}
        </T>
      ) : (
        <P {...styles} onClick={_onClick}>
          {children}
        </P>
      )}
    </React.Fragment>
  );
};

Text.defaultProps = {
  NotP: false,
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  _onClick: () => {},
  cursor:'',
};

const P = styled.p`
  color: ${(props) => props.color};

  vertical-align: center;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  cursor: ${(props) => props.cursor};

`;

const T = styled.div`
  color: ${(props) => props.color};

  vertical-align: center;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  cursor: ${(props) => props.cursor};
`;

export default Text;
