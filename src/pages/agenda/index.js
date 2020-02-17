import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Responsive } from 'semantic-ui-react'
import firebase from '../../services/firebase';

import Header from "./header";
import Main from "./main";
import Modal from "../../components/modal";
import Loading from '../../components/loader';

import "./index.css";

//Responsive
import { HeaderAgendaMobile } from './responsive/header';
import AgendaMobile  from './responsive/main';

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
          const {id, userName, termino, setor, data} = doc.data();
          
          const firstName = checkName(userName);
          if (id && userName) {
            events.push({id, firstName, termino, setor, data});
            // console.log(events);
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

      {/* PC E TABLET */}
      <Responsive minWidth={768}>
        <Header id="header" />
        { loader ? <Loading size = 'big'> Carregando Reservas...</Loading> : <Main /> }
      </Responsive>

      {/* MOBILE */}
      <Responsive maxWidth={768}>
        <HeaderAgendaMobile id="header" />
        { loader ? <Loading size = 'big'> Carregando Reservas...</Loading> : <AgendaMobile /> }
      </Responsive>

    </>
  );
}
export default NovaAgenda;
