import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;

  h1{
    margin: 0px 15px;
    font-size: 1.5em;

    @media(max-width: 763px) {
      font-size : 1em;
    }
  }

`;