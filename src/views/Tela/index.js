import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {Link} from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import img from "../../assets/ceuma.png";


import Styled from "styled-components";

const Bloco = Styled.div`
  background-color: #2ecc71;
  height: 100vh;
  width: 100vw;
`;

const Telas = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Bloco>
        <Header />
        <Main />
        <div align="center" width="100">
          <Button variant="btn btn-light btn-lg" className="mb-3" onClick={handleShow}>Reservar</Button>
          <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="example-modal-sizes-title-lg" entered="true">
            <Modal.Header closeButton>
              <Modal.Title align="center" className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img src={img} width="43" height="43" alt="Header Ceuma" />
                <h2 className="text-muted">- Ceuma Reservas</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body align="center" heigth>
              <h1>Selecionar Tipo de Reserva</h1>
            </Modal.Body>
            <Modal.Footer align="center">
            <Link to='/Principal'>
              <Button variant="primary" onClick={handleClose}>Reservar por Data</Button>
              </Link>
              <Button variant="primary" onClick={handleClose}>
                Reservar por Sala
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Footer />
      </Bloco>
    </>
  );
};

export default Telas;