import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'

import "../../index.css";
import { Container } from "./styles";

function Agenda() {
  var now = moment()

  var dia = now.day();
  
  
  let number = 0;

  const dispatch = useDispatch();

  const CheckLogin = useSelector(state => state.user.usuarioLogin);
  const event = useSelector(state => state.salas.roomEvents);
  console.log(event);

  if (dia === 0) {
    now.add(1,'days')
  }
  if (dia === 6) {
    now = now.add(2, 'days');
    dia = 0
  }
  while (dia > 1) {
    now = now.subtract(1, 'days');
    dia = dia - 1;
  }

  useEffect(() => {
    if (event) {
      event.map(item => {
        let divCell = document.getElementById(`${item.id}`);
        // let divCellTermino = document.getElementsByClassName(`${item.termino}`).style.background = '#eee';
  

        if (divCell.childNodes.length === 0) {
          const spanc = document.createElement('span');
          const titleReserve = document.createElement('h2');

          titleReserve.innerText = `${item.setor}`;

          spanc.setAttribute('id', `${item.id}`);
          spanc.setAttribute('class', 'spanCell');
          titleReserve.setAttribute('id', `${item.id}`);

          spanc.appendChild(titleReserve);
          divCell.appendChild(spanc)
        }
        return ''
      })
    } else {
      console.log("opa deu um erro no useEffect da agenda");
    }
  });

  
  const modalActions = samTag => {
    dispatch({ type: "SET_MODAL", valueModal: true });

    if (samTag.length !== 0) {
      dispatch({ type: "SET_MODAL", valueModal: true });
      dispatch({ type: "SET_MODAL_INFO", valueInfo: true });
    } else {
      if (CheckLogin === 0) {
        dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });
      } else {
        dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
      }
    }

  };

  const reduxTableActions = (idTable, hour) => {
    dispatch({ type: "SET_ID", id: idTable });
    dispatch({ type: "SET_HORA", hora: hour });
    dispatch({ type: "SET_LOAD_INFO", set_loader_info: true });
  }

  const dias = [
    `SEG ${now.format("D/M")}`,
    `TER ${now.add(1,'days').format("D/M")}`,
    `QUA ${now.add(1,'days').format("D/M")}`,
    `QUI ${now.add(1,'days').format("D/M")}`,
    `SEX ${now.add(1,'days').format("D/M")}`
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
      <div id="allPage" onLoad={() => document.getElementsByClassName(`10:00`).style.background = '#f00'}>
        <Table id="table" definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell id="none" />
              {dias.map(dia => (
                <Table.HeaderCell key={dia}>
                  <strong> {dia} </strong>
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {horas.map((hora, index) => (
              <Table.Row key={index}>
                <Table.HeaderCell width="1">
                  <strong > {hora} </strong>
                </Table.HeaderCell>
                {dias.map((dia, index) => (
                  <Table.Cell key={index}>
                    <Container
                      id={`${(number += 1)}`}
                      className={hora}
                      onClick={e => {
                        modalActions(e.target.childNodes);
                        reduxTableActions(e.target.getAttribute("id"), hora);
                      }}
                    />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
export default Agenda;
