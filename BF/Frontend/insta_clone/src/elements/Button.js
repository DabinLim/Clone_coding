import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding, is_alert, _disabled} = props;
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  }
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  }
  else if (is_alert){
    return (
      <React.Fragment>
        <NotiButton style={styles}onClick={_onClick}>{text? text : children}</NotiButton>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <ElButton style={styles} disabled={_disabled} onClick={_onClick}>{text? text : children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  is_alert: false,
  margin: false,
  width: '100%',
  padding: '12px 0px',
  _disabled:false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  color: #212121;
  background-color: lavender;
  padding: ${(props) => props.padding};
  border-radius: 5px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};` : ``)};
`;

const NotiButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #212121;
  background-color: lavender;
  padding: ${(props) => props.padding};
  border-radius: 50%;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};` : ``)};
`;

const FloatButton = styled.button`
  /* display:flex;
  justify-content:center;
  align-items:center; */
  text-align: center;
  vertical-align: center;
  width: 50px;
  height: 50px;
  border:none;
  border-radius: 25px;
  background-color: lavender;
  color: #212121;
  padding: 0px;
  box-sizing: border-border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 20px;
  @media(min-width:1200px) {
    right:200px;
  }
  @media(min-width:1400px) {
    right:400px;
  }
`;

export default Button;
