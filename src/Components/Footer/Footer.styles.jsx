import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--black);
  display: flex;
  bottom: 0;
  padding: 1em;
  align-items: center;
  justify-items: center;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

export const Lists = styled.div`
  display: flex;
  width: 60%;
  align-items: flex-start;
  justify-content: space-around;
  overflow-x: hidden;
  h4 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: var(--red);
    :hover {
      color: var(--white);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    li {
      color: var(--white);
      margin-top: 1rem;
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    width: 98%;
    padding: 0;
    text-align: center;
    ul {
      margin: 0;
      padding: 0;
    }
  }
`;

export const Signature = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 80px;
  margin-bottom: 20px;
  img {
    width: 125px;
    margin-bottom: 15px;
  }
  p {
    width: 80%;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: 30px;
    color: var(--white);
  }
  section {
    display: flex;
    width: 40%;
    margin-top: 15px;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    width: 99%;
    padding: 0.1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    p {
      width: 80%;
      text-align: justify;
    }

    img {
      margin: 2rem auto;
    }

    section {
      display: flex;
      width: 40%;
      margin: 20px;
      justify-content: space-between;
    }
  }
`;
