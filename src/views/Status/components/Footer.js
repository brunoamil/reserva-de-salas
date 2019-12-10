import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Styled from "styled-components";
import { ButtonToggle } from "reactstrap";
import { Link } from "react-router-dom";

const Rodape = Styled.footer`
  background-color: #e6e8fa;
  padding-top: 10px;
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerTitle = Styled.div`
  padding: 30px;
  margin-left: 100px;
`;

const ContainerButton = Styled.div`
  padding: 30px;
  margin-right: 100px;

  button {
    margin-left: 20px;
  }
`;

const Footer = props => (
  <>
    <Rodape>
      <ContainerTitle>
      <h1 className="text-dark display-4 text-center">Próxima Reunião:</h1>
      <h2 className="text-dark text-center">NTI - BRUNO - 9:00 - 11:00</h2>
      </ContainerTitle>
      <ContainerButton>
      <Link to="/Principal">
        <ButtonToggle color="primary" size="lg" className="mb-3">
          Horários
        </ButtonToggle>
        <ButtonToggle color="primary" size="lg" className="mb-3">
          Reservar
        </ButtonToggle>
      </Link>
      </ContainerButton>
    </Rodape>
  </>
);

export default Footer;
