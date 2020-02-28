import React, { useState } from "react";
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

import Reserve from  '../../../../components/Reserve';


function AgendaMobile() {
  // const dispatch = useDispatch();
  const [numReserve, setNumReserve] = useState(0);
  const id = []

  // const CheckLogin = useSelector(state => state.user.userLogin);
  const events = useSelector(state => state.salas.roomEvents);
  let idMobile = useSelector(state => state.ReserveData.reserve_id_mobile);
  let dateMobile = useSelector(state => state.ReserveData.reserve_date_mobile);
  
  const renderReserve = (id) => {
    console.log(id)
    // events.map( reserve => {
    //   console.log(checks.splitNumberDate(checks.splitDate(reserve.data)[1]))
    // })
  }

  const setId = num => {
    id.push(num);
    return num
  }

  console.log(id)

  return (
    <>
      <Container>
        <ContainerContent>
          {horas.map((hour, index) => (
            <span key={index}>
              <ContainerHour>{hour}</ContainerHour>
              <ContainerCell id={setId(idMobile += 5)}>
                {renderReserve()}
              </ContainerCell>
            </span>
          ))}
        </ContainerContent>
      </Container>
    </>
  );
}
export default AgendaMobile;
