import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import { Rodape, ContainerButton } from './styles';

const Footer = () => {
  const history = useHistory();

  const redirectToAgenda = () => {
    history.push("/NovaAgenda");
  }

  return (
    <>
      <Rodape>
        <ContainerButton onClick={redirectToAgenda} />
      </Rodape>
    </>
  );
}

export default withRouter(Footer);
