import React from "react";
import { Link } from "react-router-dom";

// components
import Button from "../../Components/Button/Button";

//image
import Image from "../../Images/m_hero.jpg";

//styles
import Section from "./Home.styles";

const Home = () => {
  return (
    <Section>
      <div>
        <h1>Gerenciar as suas transações</h1>
        <h1>#Descomplicou</h1>
        <Link to="/transactions">
          <Button text={"Transações"} />
        </Link>
      </div>
      <img
        id="logo"
        src={Image}
        alt="Mulher segurando o celular na mão e olhando para ele"
      />
    </Section>
  );
};

export default Home;
