import React from "react";
import { Link } from "react-router-dom";

//styles
import { Nav } from "./Header.styles";
//image
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo da warren"></img>
      </Link>
      <div>
        <Link to="/">
          <p>Inicio</p>
        </Link>
        <Link to="/transactions">
          <p>Transações</p>
        </Link>
      </div>
    </Nav>
  );
};

export default Header;
