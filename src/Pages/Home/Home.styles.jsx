import styled from "styled-components";

const Section = styled.section`
  display: flex;
  background-color: var(--red);
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 0;

  /* Animações */
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.8s forwards;

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  img {
    border-radius: 8px;
    width: 400px;
  }

  h1 {
    margin: 5px;
  }

  div {
    max-width: 100%;
    color: var(--white);
  }

  div :nth-child(2) {
    font-size: 58px;
  }
  div :nth-child(1) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    div {
      text-align: center;
      max-width: 100%;
    }
    img {
      max-width: 100%;
    }
    div :nth-child(2) {
      font-size: 3rem;
      max-width: 100%;
    }
  } ;
`;

export default Section;
