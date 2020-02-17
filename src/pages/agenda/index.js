import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../services/firebase';

import Header from "./header";
import Main from "./main";
import Modal from "../../components/modal";
import Loading from '../../components/loader';

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
        if (name.indexOf(" ") > -1) {
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
        .database()
        .ref(`salas/${sala}/Eventos`)
        .on('value', sucesso => {
          sucesso.forEach(doc => {
            const { id, userName, termino, inicio, setor, data } = doc.val();            

            const firstName = checkName(userName);
            if (id && userName) {
              events.push({ id, firstName, termino, inicio, setor, data });
              dispatch(RoomsActions.roomEvents(events));
            } else {
              dispatch(RoomsActions.roomEvents([]));
            };
            console.log(events);
            

          });
        })
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
      <Header id="header" />
      {loader ? <Loading size='big'> Carregando Reservas...</Loading> : <Main />}
    </>
  );
}
export default NovaAgenda;