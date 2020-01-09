import React from "react";
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";


import { Rodape, ContainerTitle, ContainerButton, TitleH1, TitleH2 } from './styles';


const Footer = () => (
    <>
      <Rodape>
        <ContainerTitle>
          <TitleH1>Próximo Evento:</TitleH1>
          <TitleH2>NTI - BRUNO - 9:00 - 11:00</TitleH2>
        </ContainerTitle>
        <ContainerButton>
          <Link to="/NovaAgenda">
            <Button size='big' primary>
              Horários
            </Button>
          </Link>
        </ContainerButton>
      </Rodape>
    </>
)

export default Footer;
