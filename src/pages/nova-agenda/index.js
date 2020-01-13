import React, { useState, useEffect } from "react";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import firebase from '../../services/firebase';

import "./index.css";
import { Container } from "./styles";
 
import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";


function NovaAgenda( ) {

  var date = new Date();
  var data = date.getDate();
  var dia = date.getDay();
  var mes = date.getMonth() + 1;
  let number = 0;

  const dispatch = useDispatch();
  
  const [loader, setLoader] = useState(false);
  
  const CheckLogin = useSelector(state => state.user.usuarioLogin);
  const sala = useSelector(state => state.salas.salaAtual) || "Auditorio";

  if (dia === 0) {
    data += 1;
    dia += 1;
  }
  if (dia === 6) {
    data += 2;
    dia = 1;
  }
  while (dia > 1) {
    dia = dia - 1;
    data = data - 1;
  }

  useEffect(() => {
    dispatch({ type: "SET_MODAL", modal: true});
    const getEventos = async () => {
      let eventId = [];
  
      await firebase
        .firestore()
        .collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .get()
        .then(sucesso => {
          sucesso.forEach(doc => {
            eventId.push(doc.data().id)
            console.log(eventId);
            setLoader(false);
          });
        })
        .catch(erro => {
          console.log("Erro ao pegar salas", erro);
        });
      if (eventId) {
      }
    };
    getEventos();
  })


  const everyAction = () => {
    if (CheckLogin === 0) {
      dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true});
    } else {
      dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
    }
    show();
  }

  //modal {
  const [modal, setModal] = useState(false);
  const show = () => setModal(true);
  const close = () => setModal(false);
  //}

  const dias = [
    `SEG ${data}/${mes}`,
    `TER ${data + 1}/${mes}`,
    `QUA ${data + 2}/${mes}`,
    `QUI ${data + 3}/${mes}`,
    `SEX ${data + 4}/${mes}`
  ];
  const horas = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ];

  return (
    <>
      <div id='allPage'>
        <Modal size='tiny' open={modal} close={close}></Modal>
        <HeaderAgenda id="header" />
        <Table id="table" definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell id="none" />
              {dias.map(dia => (
                <Table.HeaderCell>
                  <strong> {dia} </strong>
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              horas.map((hora, index) => (
                <Table.Row>
                  <Table.HeaderCell width='1'><strong> {hora} </strong></Table.HeaderCell>
                  {loader ? (
                    <Dimmer active>
                      <Loader size="big">Carregando Eventos...</Loader>
                    </Dimmer>
                  ) : (
                    dias.map((cell, index) => (
                      <Table.Cell>
                        <Container id={`${ number += 1 }`} onClick = {e => {
                          let idCell = e.target.getAttribute("id");
                          dispatch({ type: "SET_ID", id: idCell });
                          dispatch({ type: "SET_HORA", hora });
                          everyAction();
                        }} />
                      </Table.Cell>
                    )))
                  }
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
export default NovaAgenda;
