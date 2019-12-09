import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import GlobalStyle from './styles/Global';
import styled from 'styled-components';

const Container = styled.div`
  float: right;
  position: absolute;
  top: 620px;
  left: 900px;

  button {
    margin-left: 20px;
  }

`;

const Telas = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Container width="100">
        <Link to='/Principal'>
          <Button variant="btn btn-light btn-lg" className="mb-3">Horários</Button>
          <Button variant="btn btn-light btn-lg" className="mb-3">Reservar</Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Telas;
