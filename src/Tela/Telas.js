import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Styled from 'styled-components';

const Bloco = Styled.div`
  background-color: #2ecc71;
  height: 100vh;
  width: 100vw;
`

const Line = Styled.hr`
  background-color: #fff;
  height: 1px;
  width: 70vw;
`

const Telas = props => (
  <>
    <Bloco>
      <Header />
      <Main />
      <Line className="mb-5"/>
      <Footer/>
    </Bloco>
  </>
);


export default Telas;
