import React from "react";
import firebase from '../../../../services/firebase';
import {useSelector} from 'react-redux';

// import {  } from './styles';

const InfoModal = () => {
  const sala = useSelector(state => state.salas.salaAtual) || "Auditorio";

  // let userName = '';
  // let eventName = '';
  // let inicialHour = '';
  // let finishHour = '';

  const getEventos = async () => {

    await firebase
      .firestore()
      .collection("salas")
      .doc(`${sala}`)
      .collection("Eventos")
      .get()
      .then(sucesso => {
        sucesso.forEach(doc => {
        });
      })
      .catch(erro => {
        console.log("Erro ao pegar eventos", erro);
      });
  };

  return (
    <div>

    </div>
  );
}

export default InfoModal;
