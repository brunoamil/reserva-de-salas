import React, { useState } from "react";
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import { Rodape, ContainerTitle, ContainerButton, TitleH1, TitleH2 } from './styles';

import Modal from '../../../components/modal';


const Footer = props => {
  // Modal
  const [modal, setModal] = useState({ open: false });
  const show = size => () => setModal({ size, open: true });
  const close = () => setModal({ open: false });

  const { open, size } = modal;

  return (
    <>
      <Rodape>
        <ContainerButton>
          <Link to="/NovaAgenda">
            <Button size='big' primary>
              Reservar
            </Button>
          </Link>
          {/* <Button onClick={show('tiny')} size='big' primary>
            Reservar
          </Button>
          <Modal
            size={size}
            open={open}
            close={close}
          /> */}
        </ContainerButton>
      </Rodape>
    </>
  );
}

export default Footer;
