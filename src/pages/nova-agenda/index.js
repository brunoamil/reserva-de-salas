import React, {useEffect} from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../services/firebase';
 
import "./index.css";

import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";
import Agenda from "./components/agenda";

function NovaAgenda() {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.load.loader);
  const sala = useSelector(state => state.salas.currentRoom);
  
  useEffect(() => {
    const checkName = name => {
      if (name) {
        if(name.indexOf(" ") > -1) {
          let firstName = name.split(" ");
          return firstName[0];
        } else {
          return name;
        }
      }
    }

    const getEventos = async () => {
      let events = [];

      await firebase
      .firestore()
      .collection("salas")
      .doc(`${sala}` || 'Auditório')
      .collection("Eventos")
      .get()
      .then(sucesso => {
        sucesso.forEach(doc => {
          const {id, userName, termino, setor} = doc.data();
          
          const firstName = checkName(userName);
          if (id && userName) {
            events.push({id, firstName, termino, setor});
            console.log(events);
            dispatch({ type: "SET_EVENTOS_SALA", event: events });
          }else {
            dispatch({ type: "SET_EVENTOS_SALA", event: [] });
          };
          
        });
      })
      .catch(erro => {
        console.log("Erro ao pegar eventos", erro);
      });
    }

    getEventos();
  });

  if (loader) {
    setTimeout(() => {
      dispatch({ type: "SET_LOADER", set_loader: false })
    }, 1000);
  }
 
  return (
    <>
      <Modal />
      <HeaderAgenda id="header" />
      { loader ? (<Dimmer active>
        <Loader size="medium">Carregando Reservas...</Loader>
      </Dimmer>) : <Agenda /> }
    </>
  );
}
export default NovaAgenda;
