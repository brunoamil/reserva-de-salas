import React, { useEffect, useContext } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import "../../../pages/agenda/index.css";
import { ContainerCell, Container } from "./styles";

import checks from '../../../utils/checks';
import {horas, daysOfWeek} from '../../../utils/TimeConfig';

import { Creators as LoadActions } from "../../../store/ducks/load";
import { Creators as DateReserveActions } from "../../../store/ducks/dadosReserva";

import ModalContext from '../../../contexts/ModalContext';

function Agenda() {
  const dispatch = useDispatch();
  const { modalActions } = useContext(ModalContext);

  const event = useSelector(state => state.salas.roomEvents);

  let idDivCell = 0;

  
  const renderCellActions = event => {
    if (event) {
      event.map(info => {
        let divCell = document.getElementById(`${info.id}`);
        
        const reserveHour = horas.filter( hour => 
          hour > info.inicio && hour <= info.termino
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
  
  useEffect(() => renderCellActions(event));

  const reduxTableActions = (idTable, hour, date) => {
    dispatch(DateReserveActions.id(idTable));
    dispatch(DateReserveActions.inicial_hour(hour));
    dispatch(DateReserveActions.date(checks.splitDate(date)[1]));
    dispatch(DateReserveActions.dayOfWeek(checks.splitDate(date)[0]))
    dispatch(LoadActions.info(true));
  };
  
  return (
    <>
      <Container id="allPage">
        <Table id="table" definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell id="none" />
              {daysOfWeek.map(dia => (
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
                {daysOfWeek.map((dia, index) => (
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
                    }}></ContainerCell>
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