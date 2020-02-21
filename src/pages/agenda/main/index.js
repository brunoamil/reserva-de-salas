import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "../../../pages/agenda/index.css";
import { ContainerCell, Container } from "./styles";

import { Creators as LoadActions } from "../../../store/ducks/load";
import { Creators as ModalActions } from "../../../store/ducks/modal";
import { Creators as DateReserveActions } from "../../../store/ducks/dadosReserva";

function Agenda() {
  const dispatch = useDispatch();

  const CheckLogin = useSelector(state => state.user.userLogin);
  const event = useSelector(state => state.salas.roomEvents);

  var now = moment();
  var dia = now.day();
  let idDivCell = 0;

  function dayAdjust() {    
    if (dia === 0) now.add(1, "days");
  
    if (dia === 6) {
      now = now.add(2, "days");
      dia = 0;
    }
    while (dia > 1) {
      now = now.subtract(1, "days");
      dia = dia - 1;
    }
  }
  dayAdjust()
  const dias = [
    `SEG ${now.format("D/M")}`,
    `TER ${now.add(1, "days").format("D/M")}`,
    `QUA ${now.add(1, "days").format("D/M")}`,
    `QUI ${now.add(1, "days").format("D/M")}`,
    `SEX ${now.add(1, "days").format("D/M")}`
  ];

  now = moment();
  dia = now.day();
  dayAdjust()

  const data = [
    `${now.format("D/M")}`,
    `${now.add(1, "days").format("D/M")}`,
    `${now.add(1, "days").format("D/M")}`,
    `${now.add(1, "days").format("D/M")}`,
    `${now.add(1, "days").format("D/M")}`
  ]
  

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

  useEffect(() => renderCellActions(event));

  const renderCellActions = event => {
    if (event) {
      event.map(info => {
        let divCell = document.getElementById(`${info.id}`);

        const reserveHour = horas.filter(
          hour => hour > info.inicio && hour <= info.termino
        );

        if (divCell.childNodes.length === 0) {
          renderFinalReserve(divCell, info.id, info.setor);
          if (reserveHour.length > 1) {
            let idCellTermino = parseInt(info.id);
            reserveHour.pop();

            reserveHour.map(hour => {
              let divCellTermino = document.getElementById(
                String((idCellTermino += 5))
              );

              return renderFinalReserve(divCellTermino, info.id, info.setor);
            });
          }
        }
        return "";
      });
    }
  };
  
  const renderFinalReserve = (divCell, id, setor) => {
    const spanct = document.createElement("span");
    const titleReserveTermino = document.createElement("h2");

    spanct.setAttribute("class", "spanCell");
    spanct.setAttribute("id", `${id}`);
    titleReserveTermino.setAttribute("id", `${id}`);
    titleReserveTermino.innerText = `${setor}`;

    spanct.appendChild(titleReserveTermino);
    divCell.appendChild(spanct);
  };

  const modalActions = samTag => {
    dispatch(ModalActions.modal(true));
    if (samTag.length !== 0) {
      dispatch(ModalActions.infoReserve(true));
    } else {
      if (CheckLogin === false) {
        dispatch(ModalActions.login_modal(true));
      } else {
        dispatch(ModalActions.confirm(true));
      }
    }
  };

  const reduxTableActions = (idTable, hour, date) => {
    dispatch(DateReserveActions.id(idTable));
    dispatch(DateReserveActions.inicial_hour(hour));
    dispatch(DateReserveActions.date(date));
    dispatch(LoadActions.info(true));
  };

  return (
    <>
      <Container id="allPage">
        <Table id="table" definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell id="none" />
              {dias.map(dia => (
                <Table.HeaderCell key={dia} id={dia}>
                  <strong> {dia} </strong>
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {horas.map((hora, index) => (
              <Table.Row key={index}>
                <Table.HeaderCell width="1">
                  <strong> {hora} </strong>
                </Table.HeaderCell>
                {data.map((dia, index) => (
                  <Table.Cell
                    key={index}
                  >
                    <ContainerCell
                      id={`${idDivCell += 1}`}
                      onClick={e => {
                        modalActions(e.target.childNodes);
                        reduxTableActions(
                          e.target.getAttribute("id"),
                          hora,
                          dia
                        );
                      }}
                    ></ContainerCell>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
}
export default Agenda;