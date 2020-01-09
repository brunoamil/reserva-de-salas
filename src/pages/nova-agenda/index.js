import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import "./index.css";
import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";
import { Container } from './styles';
// import ConfirmModalContent from "./components/corfirmModalContent";

import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../services/firebase';

function NovaAgenda( {history} ) {

  var date = new Date();
  var data = date.getDate();
  var dia = date.getDay();
  var mes = date.getMonth() + 1;
  let number = 0;

  const dispatch = useDispatch();

  // const [eventos ,setEventos] = useState([]);
  // let listaEventos = [];

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

  useEffect(() => dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true}), [])

  // useEffect( () => {
  //   firebase.firestore().collection('reserva de salas').get().then( async (resultado) => {
  //     await resultado.docs.forEach( doc => {
  //       listaEventos.push({
  //         id: doc.id,
  //         ...doc.data()
  //       })
  //     })

  //     setEventos(listaEventos);
  //   })
  // })

  //modal {
  const [modal, setModal] = useState({ open: false });
  const show = () => setModal({ open: true });
  const close = () => setModal({ open: false });
  const { open } = modal;
  //}

  //chamar modal na celula {
  const toggleDiv = event => {
    let idCell = event.target.getAttribute("id");
    document.getElementById(`${idCell}`)
    show();
  };
  //}

  // const CheckLogin = useSelector(state => state.user.usuarioLogin)
  
  // useEffect(() => {
  //   if (CheckLogin === 1) {
  //     ;
  //   }
  // }, [CheckLogin])

  console.log(useSelector(state => state.modal.confirmForm))
  console.log(useSelector(state => state.modal.loginForm))
  console.log(useSelector(state => state.modal.registerForm))

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
        <Modal size='tiny' open={open} close={close} modal={modal}></Modal>
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
                  {
                    dias.map((cell, index) => (
                      <Table.Cell>

                        <Container id={`${ number += 1}`} onClick = {show} />
                        {/* {eventos.map(<Container id={`${ number += 1}`} onClick = {show} />)} */}

                      </Table.Cell>
                    ))
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
