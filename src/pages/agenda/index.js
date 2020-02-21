import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../services/firebase';
// import moment from "moment";
// import { useHistory } from "react-router-dom";

import Header from "./header";
import Main from "./main";
import Modal from "../../components/modal";
import Loading from '../../components/loader';

// import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as LoaderActions } from '../../store/ducks/load';
import { Creators as RoomsActions } from '../../store/ducks/salas';

import "./index.css";

function NovaAgenda() {

  // Contador da sessão

  // var count = 1
    
  // useEffect(() => {
  //   var sessionInit = moment()
  //   var initialTimer = parseInt(sessionInit.second())

  //   var sessionFinal = initialTimer + 240
  //     var session = setInterval(function () {
  //       if (initialTimer === sessionFinal) {
  //         actionLogout()
  //         window.alert("Sessão esgotada!")
  //         clearInterval(session)
  //         // windowRedirect()
  //       }
  //       initialTimer += 1
  //     }, 1000)
    
  // })

  // function windowRedirect() {
  //   let history = useHistory();
  //   history.push("/")
  // }

  // const actionLogout = () => {
  //   setTimeout(() => {
  //     dispatch(UsersActions.log_out());
  //     dispatch(RoomsActions.roomEvents([]));
  //     dispatch(UsersActions.name(''))
  //   }, 1000);
  // };


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
      <Modal />
      <Header id="header" />
      {loader ? <Loading size='big'> Carregando Reservas...</Loading> : <Main />}
    </>
  );
}
export default NovaAgenda;