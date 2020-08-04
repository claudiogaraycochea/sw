import React from "react";
import './Buttons.css';

export const Button = (props) => {
  const {
    className,
    onPress,
  } = props;
  return (
    <button
      className={`btn ${className}`}
      onClick={onPress}
    >
      {props.children}
    </button>
  );
};
