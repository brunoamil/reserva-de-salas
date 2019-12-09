import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Styled from "styled-components";

const Title = Styled.h1`
  font-size: 15em;
`;

const Bloco = Styled.div`
  margin-top: 120px;
`;

const Main = props => {
  return (
    <Bloco className="align-items-center justify-content-center text-center">
      <Title className="text-white mt-5 mb-5 display-1">Disponível</Title>
    </Bloco>
  );
};

export default Main;
