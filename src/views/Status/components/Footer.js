import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import PropTypes from 'prop-types'
import Styled from "styled-components";

const Rodape = Styled.footer`
  background-color: #D3D3D3;
  padding-top: 10px;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

const Footer = props => (
  <Rodape>
    <h1 className="text-dark display-4 text-center">Próxima Reunião:</h1>
    <h2 className="text-dark text-center">NTI - BRUNO - 9:00 - 11:00</h2>
  </Rodape>
);

// Footer.propTypes = {

// }

export default Footer;
