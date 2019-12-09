import React from "react";
import { Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import GlobalStyle from './styles/Global'

const Telas = props => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <div align="center" width="100">
        <Link to='/Principal'>
          <Button variant="btn btn-light btn-lg" className="mb-3">Reservar</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Telas;
