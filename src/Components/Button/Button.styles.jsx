import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  button {
    font-family: "Source Sans Pro", Helvetica, Arial, Sans-Serif;
    font-weight: 700;
    background-color: var(--black);
    color: var(--white);
    border-radius: 100px;
    height: 55px;
    margin: 2rem auto;
    letter-spacing: 0.03125rem;
    min-width: 120px;
    padding: 10px 30px;
    outline: none;
    line-height: 29px;
    border: 0;
    transition: all 0.5s;
    :hover {
      background-color: var(--white);
      color: var(--black);
    }
  }
`;
export default Div;
