import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../../services/firebase';

import Header from "./header";
import Main from "./main";
import Modal from "../../components/modal";
import Loading from '../../components/loader';
//Responsive
import { Responsive } from 'semantic-ui-react';
import HeaderMobile from './responsive/header';
import AgendaMobile  from './responsive/main';

import { Creators as LoaderActions } from '../../store/ducks/load';
import { Creators as RoomsActions } from '../../store/ducks/salas';
import { Creators as ReserveActions } from '../../store/ducks/reserves';
import { Creators as ModalActions } from '../../store/ducks/modal';

import "./index.css";

import checks from '../../utils/checks';

import ModalContext from '../../contexts/ModalContext';

import api from '../../services/api'; 

function NovaAgenda() {

  const dispatch = useDispatch();

  const loader = useSelector(state => state.load.loadReserve);
  const sala = useSelector(state => state.salas.currentRoom);
  const CheckLogin = useSelector(state => state.user.userLogin);

  // useEffect(()=>{   api.fetchReserves(sala)  })

  dispatch(ReserveActions.getReservesRequest())
  const requestReserve = useCallback(() => {
  }, [dispatch])

  useEffect(() => requestReserve(), [requestReserve])



  // useEffect(() => {
  //   const getEventos = () => {

  //     firebase 
  //       .database()
  //       .ref(`salas/${sala}/Eventos`)
  //       .on('value', sucesso => {
  //         let events = [];
  //         sucesso.forEach(doc => {
  //           const reserves = doc.val()
            
  //           for (let value in reserves) {
  //             if(reserves.hasOwnProperty(value)) {
                
  //               const { id, userName, termino, inicio, setor, data } = reserves[value];            
                
  //               const firstName = checks.checkName(userName);
  //               if (id && userName) {
  //                 events.push({ id, firstName, termino, inicio, setor, data });
  //                 dispatch(RoomsActions.roomEvents(events));
  //               } else {
  //                 dispatch(RoomsActions.roomEvents([]));
  //               };
  //             }
  //           }
  //         });
  //       })
  //   }

  //   getEventos();
  // });

  if (loader) {
    setTimeout(() => {
      dispatch(LoaderActions.reserve(false))
    }, 1000);
  }

  const modalActions = id => {
    const idElement = document.getElementById(id); 
    dispatch(ModalActions.modal(true));
    if (idElement.innerHTML !== "") {
      dispatch(ModalActions.infoReserve(true));
    } else {
      if (CheckLogin === false) {
        dispatch(ModalActions.login_modal(true));
      } else {
        dispatch(ModalActions.confirm(true));
      }
    }
  };

  return (
    <>
      <ModalContext.Provider value={{modalActions}}>
        <Modal />
        {/* PC E TABLET */}
        <Responsive minWidth={768}>
          <Header id="header" />
          { loader ? <Loading size = 'big'> Carregando Reservas...</Loading> : <Main /> }
        </Responsive>

        {/* MOBILE */}
        <Responsive maxWidth={768}>
          <HeaderMobile id="header" />
          { loader ? <Loading size = 'big'> Carregando Reservas...</Loading> : <AgendaMobile /> }
        </Responsive>
      </ModalContext.Provider>
      {/* <Session/> */}
    </>
  );
}
export default NovaAgenda;