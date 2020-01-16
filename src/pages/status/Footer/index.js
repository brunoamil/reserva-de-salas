import React from "react";
import { Link } from "react-router-dom";

import { Rodape, ContainerButton } from './styles';

const Footer = props => {
  return (
    <>
      <Rodape>
        <ContainerButton>
          <Link to="/NovaAgenda">
            
          </Link>
        </ContainerButton>
      </Rodape>
    </>
  );
}

export default Footer;
