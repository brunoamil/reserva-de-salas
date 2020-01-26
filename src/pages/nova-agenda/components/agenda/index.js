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

  useEffect(() => cellActions(event));

  const cellActions = event => {
    if (event) {
      event.map(info => {
        let divCell = document.getElementById(`${info.id}`);
        
        if (divCell.childNodes.length === 0) {
          
          const spanc = document.createElement("span");
          const titleReserve = document.createElement("h2");
          
          const checkHour = `${parseInt(info.inicio) + 1}:00`;

          titleReserve.innerText = `${info.setor}`;
          spanc.setAttribute("id", `${info.id}`);
          titleReserve.setAttribute("id", `${info.id}`);
          
          spanc.setAttribute("class", "spanCell");

          spanc.appendChild(titleReserve);
          divCell.appendChild(spanc);
          
          if (checkHour === info.termino) {
            let divCellTermino = document.getElementById(`${parseInt(info.id) + 5}`);

            const spanct = document.createElement("span");
            const titleReserveTermino = document.createElement("h2");

            spanct.setAttribute("class", "spanCellTermino");
            spanct.setAttribute("id", `${info.id}`);
            titleReserveTermino.setAttribute("id", `${info.id}`);
            titleReserveTermino.innerText = `${info.setor}`;
            
            spanct.appendChild(titleReserveTermino);
            divCellTermino.appendChild(spanct);
          } else {
            let idCellTermino = parseInt(info.id);
            horas.filter(hora => hora > info.inicio && hora <= info.termino)
            .map(h => {
              let divCellTermino = document.getElementById(String(idCellTermino += 5));

              const spanct = document.createElement("span");
              const titleReserveTermino = document.createElement("h2");

              spanct.setAttribute("class", "spanCellTermino");
              spanct.setAttribute("id", `${info.id}`);
              titleReserveTermino.setAttribute("id", `${info.id}`);
              titleReserveTermino.innerText = `${info.setor}`;
              
              spanct.appendChild(titleReserveTermino);
              divCellTermino.appendChild(spanct);

              return "";
            })
          }
        }
        return "";
      });
    }
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
                  <strong> {hora} </strong>
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
