import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  background-color: var(--red);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    text-decoration: none;
    margin: 0;
  }
  div {
    display: flex;
    justify-content: space-around;
    width: 20%;
  }
  img {
    width: 140px;
    margin-right: 35rem;
  }
  p {
    font-family: Helvetica;
    font-weight: bold;
    color: var(--white);
    font-size: 22px;
    transition: all 0.5s;
    :hover {
      background-color: var(--black);
      border-radius: 100px;
      padding: 0.3rem;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 180px;
    div a {
      display: flex;
      margin: 0.5rem auto;
    }
    img {
      width: 60%;
      margin: 1.5rem 20%;
    }

    div {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    p {
      font-size: 22px;
    }
  }
`;
