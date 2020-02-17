import React from "react";
import { useDispatch } from "react-redux";
import moment from 'moment'

import "../../../index.css";
import { Container, ContainerDay, ContainerSelect, ContainerContent, ContainerHour, ContainerCell } from "./styles";

function AgendaMobile() {
  var now = moment()

  var dia = now.day();
  
  const dispatch = useDispatch();

  // const CheckLogin = useSelector(state => state.user.usuarioLogin);
  // const event = useSelector(state => state.salas.roomEvents);

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

  // useEffect(() => {
  //   if (event) {
  //     event.map(item => {
  //       let divCell = document.getElementById(`${item.id}`);
  //       // let divCellTermino = document.getElementsByClassName(`${item.termino} ${item.data}`);
  
  //       // console.log(divCellTermino)
  //       if (divCell.childNodes.length === 0) {
  //         const spanc = document.createElement('span');
  //         const titleReserve = document.createElement('h2');

  //         titleReserve.innerText = `${item.setor}`;

  //         spanc.setAttribute('id', `${item.id}`);
  //         spanc.setAttribute('class', 'spanCell');
  //         titleReserve.setAttribute('id', `${item.id}`);

  //         spanc.appendChild(titleReserve);
  //         divCell.appendChild(spanc);
  //       }
  //       return ''
  //     })
  //   } else {
  //   }
  // });

  
  const modalActions = samTag => {
    dispatch({ type: "SET_MODAL", valueModal: true });

    // if (samTag.length !== 0) {
    //   dispatch({ type: "SET_MODAL", valueModal: true });
    //   dispatch({ type: "SET_MODAL_INFO", valueInfo: true });
    // } else {
    //   if (CheckLogin === false) {
    //     dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });
    //   } else {
    //     dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
    //   }
    // }
    dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });

  };

  // const reduxTableActions = (idTable, hour, data) => {
  //   dispatch({ type: "SET_ID", id: idTable });
  //   dispatch({ type: "SET_HORA", hora: hour });
  //   dispatch({ type: "SET_DATA", data });
  //   dispatch({ type: "SET_LOAD_INFO", set_loader_info: true });
  // }

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
      <Container>
        <ContainerDay>
          <ContainerSelect>
            <select>
              { dias.map((day, index) => (
                <option key={ index }>
                  { day }
                </option>
              )) }
            </select>
          </ContainerSelect>
        </ContainerDay>
        <ContainerContent>
          { horas.map( (hour, index) => (
            <span key={ index }>
              <ContainerHour>{ hour }</ContainerHour>
              <ContainerCell onClick={(e) => modalActions("12")}></ContainerCell>
            </span>
          ) ) }

        </ContainerContent>
      </Container>
    </>
  );
}
export default AgendaMobile;
