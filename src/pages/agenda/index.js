import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../services/firebase';
import { TransitionablePortal, Segment, Header } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

import HeaderAgenda from "./header";
import Main from "./main";
import Modal from "../../components/modal";
import Loading from '../../components/loader';

import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as LoaderActions } from '../../store/ducks/load';
import { Creators as RoomsActions } from '../../store/ducks/salas';

import "./index.css";

function NovaAgenda() {

  const [openPortal, setOpenPortal] = useState(false)

  const History = useHistory();
  const dispatch = useDispatch();

  const actionLogout = useCallback(() => {
    setTimeout(() => {
      dispatch(UsersActions.log_out());
      dispatch(RoomsActions.roomEvents([]));
      dispatch(UsersActions.name(''))
    }, 1000);
  }, [dispatch])

  
  // Contador da sessão

  useEffect(() => {
    var count = 240

    var session = setInterval(function () {
      if (count === 15) {
        setOpenPortal(true)
      }
      if (count === 0) {
        clearInterval(session)
        actionLogout()
        windowRedirect()

        function windowRedirect() {
          History.push("/")
        }
      }
      count -= 1

    }, 1000)
  }, [History, actionLogout])


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

      await firebase
        .database()
        .ref(`salas/${sala}/Eventos`)
        .on('value', sucesso => {
          let events = [];
          sucesso.forEach(doc => {
            const { id, userName, termino, inicio, setor, data } = doc.val();

            const firstName = checkName(userName);
            if (id && userName) {
              events.push({ id, firstName, termino, inicio, setor, data });
              dispatch(RoomsActions.roomEvents(events));
            } else {
              dispatch(RoomsActions.roomEvents([]));
            };
            // console.log(events);


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
      <TransitionablePortal open={openPortal}>
        <Segment
          style={{
            left: '40%',
            position: 'fixed',
            top: '20%',
            zIndex: 1000,
          }}>
          <Header>Sua sessão vai expirar!</Header>
          <p>Em 15 segundos você será redirecionado a tela inicial.</p>
        </Segment>
      </TransitionablePortal>

      <Modal />
      <HeaderAgenda></HeaderAgenda>
      {loader ? <Loading size='big'> Carregando Reservas...</Loading> : <Main />}
    </>
  );
}
export default NovaAgenda;