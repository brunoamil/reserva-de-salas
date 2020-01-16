import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux';
 
import "./index.css";

import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";
import Agenda from "./components/agenda";

function NovaAgenda() {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.load.loader);
  // dispatch({ type: "SET_LOADER", set_loader: true })
  console.log(loader)
 
  return (
    <>
      <Modal />
      <HeaderAgenda id="header" />
      { loader ? (<Dimmer active>
        <Loader size="medium">Carregando Reservas...</Loader>
      </Dimmer>) : <Agenda />}
    </>
  );
}
export default NovaAgenda;
