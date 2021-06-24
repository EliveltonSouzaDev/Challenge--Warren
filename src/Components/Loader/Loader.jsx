import React from "react";
//styles
import Div from "./Loader.styles";
//image
import logo from "../../Images/logo.png";

export const Loader = () => {
  return (
    <Div>
      <img src={logo} alt="logo"></img>

      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Div>
  );
};
