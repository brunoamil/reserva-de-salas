import Styled from "styled-components";

export const Title = Styled.h1`
  font-size: 10em;
  color: #ffffff;
  text-align: center;

  @media(max-width: 763px) {
    font-size : 5em;
  }
`;
export const FooterStatus = Styled.p`
  color: #cccccc;
  position: absolute;
  bottom: 0;
`

export const Bloco = Styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;