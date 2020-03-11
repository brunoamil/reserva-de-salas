import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import "../../index.css";
import {
  Container,
  ContainerContent,
  ContainerHour,
  ContainerCell
} from "./styles";

import { horas } from '../../../../utils/TimeConfig';
import checks from '../../../../utils/checks';

import ModalContext from '../../../../contexts/ModalContext';

import Reserve from  '../../../../components/Reserve';

function AgendaMobile() {
  // const dispatch = useDispatch();
  const {modalActions} = useContext(ModalContext);

  // const CheckLogin = useSelector(state => state.user.userLogin);
  const events = useSelector(state => state.salas.roomEvents);
  let idMobile = useSelector(state => state.ReserveData.reserve_id_mobile);
  let dateMobile = useSelector(state => state.ReserveData.reserve_date_mobile);

  const renderReserve = () => {
    events.map(info => {
      let divCell = document.getElementById(`${info.id}`);
      if (divCell) {
        const reserveHour = horas.filter(
          hour => hour > info.inicio && hour <= info.termino
        );
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
    })
  }
  
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

  useEffect(() => renderReserve(events))

  return (
    <>
      <Container>
        <ContainerContent>
          {horas.map((hour, index) => (
            <span key={index}>
              <ContainerHour>{hour}</ContainerHour>
              <ContainerCell id={idMobile += 5} onclick={e => modalActions(e.target.childNodes)}>
              </ContainerCell>
            </span>
          ))}
        </ContainerContent>
      </Container>
    </>
  );
}
export default React.memo(AgendaMobile);
