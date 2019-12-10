import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const Span = styled.span`
  font-weight: bold;
`;

const Header = props => {
  return (
    <header className="blockquote">
      <h1 className="text-white ml-5 mb-1 display-3">
        Status: <Span>Sala de Jogos</Span>
      </h1>
    </header>
  );
};

export default Header;
