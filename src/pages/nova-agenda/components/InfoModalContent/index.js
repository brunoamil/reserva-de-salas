import React, {useEffect, useState} from "react";
import {Loader, Dimmer} from 'semantic-ui-react';
import firebase from '../../../../services/firebase';
import {useSelector, useDispatch} from 'react-redux';

// import {  } from './styles';

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom) || "Auditório";
  const id = useSelector(state => state.dados.id);
  const loader = useSelector(state => state.load.loadInfo);
  console.log(loader)

  const [dadosReserva, setDadosReserva] = useState();

  useEffect(() => {
    const getEventos = async () => {

      await firebase
        .firestore()
        .collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .get()
        .then(sucesso => {
          sucesso.forEach(doc => {
            if (id === doc.data().id) {
              if (!dadosReserva) {
                setDadosReserva({ ...doc.data() });
                dispatch({ type: "SET_LOAD_INFO", set_loader_info: false });
                console.log(doc.data())
                console.log("opa");
              }
            }
          });
        })
        .catch(erro => {
          console.log("Erro ao pegar eventos", erro);
        });
    };

    getEventos();
  });
        
  return (
    <>
      { loader ? (<Dimmer active>
        <Loader size="medium">Carregando Informções...</Loader>
      </Dimmer>) : (
        <div>
          <p>Nome: {dadosReserva.userName}</p>
          <p>Setor: {dadosReserva.setor}</p>
          <p>Evento: {dadosReserva.nomeEvento}</p>
          <p>Inicio: {dadosReserva.inicio}</p>
          <p>Termino: {dadosReserva.termino}</p>
        </div> 
      ) }
    </>
  )
}

export default InfoModal;
