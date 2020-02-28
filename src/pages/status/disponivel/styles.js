import styled from "styled-components";
import { Icon } from "semantic-ui-react"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  background-color: green;
`;
export const ContainerIcon = styled.div`
  margin-bottom: 5px;
`;
export const Icone = styled(Icon)`
  color: #fff;

  font-size: 15em !important;
  margin: 0;

`;

export const ContainerButton = styled.div`
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #ffffff;
  text-align: center;

  @media(max-width: 763px) {
    font-size : 1.7em;
  }
`;