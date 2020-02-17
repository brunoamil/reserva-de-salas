import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../services/firebase';
import { Responsive, Segment } from 'semantic-ui-react'

import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";
import Agenda from "./components/agenda";
import Loading from '../../components/loader';

import { HeaderAgendaMobile } from './components/header/responsive/';
import AgendaMobile  from './components/agenda/responsive/';

import { Creators as LoaderActions } from '../../store/ducks/load';
import { Creators as RoomsActions } from '../../store/ducks/salas';

import "./index.css";

function NovaAgenda() {
  const dispatch = useDispatch();

  const loader = useSelector(state => state.load.loadReserve);
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
      .doc(`${sala}`)
      .collection("Eventos")
      .get()
      .then(sucesso => {
        sucesso.forEach(doc => {
          const {id, userName, termino, inicio, setor, data} = doc.data();
          
          const firstName = checkName(userName);
          if (id && userName) {
            events.push({id, firstName, termino, inicio, setor, data});
            dispatch(RoomsActions.roomEvents(events));
          }else {
            dispatch(RoomsActions.roomEvents([]));
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
      dispatch(LoaderActions.reserve(false))
    }, 1000);
  }
 
  return (
    <>
      <Modal />

      {/* PC E TABLET */}
      <Responsive as={Segment} minWidth={768}>
        <HeaderAgenda id="header" />
        { loader ? <Loading size = 'big'> Carregando Reservas...</Loading> : <Agenda /> }
      </Responsive>

      {/* MOBILE */}
      <Responsive as={Segment} maxWidth={768}>
        <HeaderAgendaMobile id="header" />
        { loader ? <Loading size = 'large'> Carregando Reservas...</Loading> : <AgendaMobile />}
      </Responsive>
  </>
  );
}
export default NovaAgenda;