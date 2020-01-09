import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import { Container } from "./styles";
 
import { HeaderAgenda } from "./components/header";
import Modal from "../../components/modal";

function NovaAgenda() {

  const dispatch = useDispatch();

  var date = new Date();
  var data = date.getDate();
  var dia = date.getDay();
  var mes = date.getMonth() + 1;
  let number = 0;

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

  //modal {
  const [modal, setModal] = useState({ open: false });
  const show = () => setModal({ open: true });
  const close = () => setModal({ open: false });
  const { open } = modal;

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

  // Teste {
  console.log(useSelector(state => state.modal.loginForm));
  console.log(useSelector(state => state.modal.registerForm));
  console.log(useSelector(state => state.modal.confirmForm));
  //}

  return (
    <>
      <div id='allPage'>
        <Modal size='tiny' open={open} close={close}></Modal>
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
                        <Container id={`${ number += 1}`} onClick={() => {
                          dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true})
                          show();
                        }}>
                        </Container>
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
