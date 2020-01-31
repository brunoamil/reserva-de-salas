import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "../../index.css";
import { ContainerCell, Container } from "./styles";

function Agenda() {
  const dispatch = useDispatch();

  const CheckLogin = useSelector(state => state.user.usuarioLogin);
  const event = useSelector(state => state.salas.roomEvents);

  var now = moment();
  var dia = now.day();
  let idDivCell = 0;

  if (dia === 0) now.add(1, "days");

  if (dia === 6) {
    now = now.add(2, "days");
    dia = 0;
  }
  while (dia > 1) {
    now = now.subtract(1, "days");
    dia = dia - 1;
  }

  const dias = [
    `SEG ${now.format("D/M")}`,
    `TER ${now.add(1, "days").format("D/M")}`,
    `QUA ${now.add(1, "days").format("D/M")}`,
    `QUI ${now.add(1, "days").format("D/M")}`,
    `SEX ${now.add(1, "days").format("D/M")}`
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
  const horario = [
    "8h - 9h",
    "9h - 10h",
    "10h - 11h",
    "11h - 12h",
    "12h - 13h",
    "13h - 14h",
    "14h - 15h",
    "15h - 16h",
    "16h - 17h",
    "17h - 18h",
    "18h - 19h"
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
    dispatch({ type: "SET_MODAL", valueModal: true });

    if (samTag.length !== 0) {
      dispatch({ type: "SET_MODAL", valueModal: true });
      dispatch({ type: "SET_MODAL_INFO", valueInfo: true });
    } else {
      if (CheckLogin === false) {
        dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });
      } else {
        dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
      }
    }
  };

  const reduxTableActions = (idTable, hour, data) => {
    dispatch({ type: "SET_ID", id: idTable });
    dispatch({ type: "SET_HORA", hora: hour });
    dispatch({ type: "SET_DATA", data });
    dispatch({ type: "SET_LOAD_INFO", set_loader_info: true });
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
                  <strong> {horario[index]} </strong>
                </Table.HeaderCell>
                {dias.map((dia, index) => (
                  <Table.Cell
                    key={index}
                    className={`${hora} ${(idDivCell += 1)}`}
                  >
                    <ContainerCell
                      id={`${idDivCell}`}
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
