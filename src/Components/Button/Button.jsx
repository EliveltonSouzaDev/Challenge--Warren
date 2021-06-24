import React from "react";

//styles
import Div from "./Button.styles";

const Button = ({ text }) => {
  return (
    <Div>
      <button>{text}</button>
    </Div>
  );
};

export default Button;
