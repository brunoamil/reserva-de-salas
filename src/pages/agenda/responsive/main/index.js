import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../index.css";
import {
  Container,
  ContainerContent,
  ContainerHour,
  ContainerCell
} from "./styles";

import Reserve from '../../../../components/Reserve';

import { horas } from '../../../../utils/TimeConfig';

import ModalContext from '../../../../contexts/ModalContext';

import {Creators as DateReserveActions} from '../../../../store/ducks/dadosReserva';
import {Creators as LoadActions} from '../../../../store/ducks/load';

function AgendaMobile() {
  const dispatch = useDispatch();
  const {modalActions} = useContext(ModalContext);

  const events = useSelector(state => state.salas.roomEvents);
  let idMobile = useSelector(state => state.ReserveData.reserve_id_mobile);
  let dateMobile = useSelector(state => state.ReserveData.reserve_date_mobile);

  const reduxTableActions = (idTable, hour, date) => {
    dispatch(DateReserveActions.id(idTable));
    dispatch(DateReserveActions.inicial_hour(hour));
    dispatch(DateReserveActions.date(date));
    dispatch(LoadActions.info(true));
  };

  const verifyReserve = () => {
    return events.map(r => {
      
      //verifica se a reserva possui mais de uma hora!
      const reserveHour = horas.filter(
        hour => hour >= r.inicio && hour < r.termino
      );

      if (reserveHour.length > 0) {
        return FinalReserve(r, reserveHour);
      } else {
        if (Number(r.id) === idMobile) {  
          return <Reserve key={r.id} id={r.id} sector={r.setor} />
        }
      }
      return ''
    })
  }

  const FinalReserve = (reserve, reservesFinalHours) => {
    let id = Number(reserve.id);
    return reservesFinalHours.map((hour, index) => {
      if (index !== 0) id += 5;
      if (id === idMobile) {
        return <Reserve key={id} id={reserve.id} sector={reserve.setor} />
      }
      return ''
    })
  }

  return (
    <>
      <Container>
        <ContainerContent>
          {horas.map((hour, index) => (
            <span key={index}>
              <ContainerHour>{hour}</ContainerHour>
              <ContainerCell id={idMobile += 5} onClick={e => {
                reduxTableActions(
                  e.target.getAttribute("id"),
                  hour,
                  dateMobile
                )
              modalActions(e.target.getAttribute("id"));
              }
              }>
                {verifyReserve()}
              </ContainerCell> 
            </span>
          ))}
        </ContainerContent>
      </Container>
    </>
  );
}
export default React.memo(AgendaMobile);
