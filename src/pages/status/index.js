import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import GlobalStyle from './styles/Global';


const Status = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Status;
