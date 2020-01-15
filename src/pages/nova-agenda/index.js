import React from "react";

import "./index.css";

import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";
import Agenda from './agenda'


function NovaAgenda() {

  return (
    <>
        <Modal />
        <HeaderAgenda id="header" />
        <Agenda/>
    </>
  );
}
export default NovaAgenda;
