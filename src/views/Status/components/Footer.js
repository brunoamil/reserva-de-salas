import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Styled from "styled-components";

const Rodape = Styled.footer`
  background-color: #e6e8fa;
  padding-top: 10px;
  bottom: 0;
  position: absolute;
  width: 50%;
  margin: 0px 0px 20px 20px;
  border-radius: 8px;
  box-shadow: 4px 5px 5px black;

`;

const Footer = props => (
  <Rodape>
    <h1 className="text-dark display-4 text-center">Próxima Reunião:</h1>
    <h2 className="text-dark text-center">NTI - BRUNO - 9:00 - 11:00</h2>
  </Rodape>
);


export default Footer;
