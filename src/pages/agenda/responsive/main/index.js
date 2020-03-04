import React, { useRef, useEffect } from "react";
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
  const reserves = useRef([]);

  // const CheckLogin = useSelector(state => state.user.userLogin);
  const events = useSelector(state => state.salas.roomEvents);
  let idMobile = useSelector(state => state.ReserveData.reserve_id_mobile);
  let dateMobile = useSelector(state => state.ReserveData.reserve_date_mobile);

  
  // useEffect(() => {
  //   let reserveForDay = [];
  //   events.map(reserve => {
  //     if (reserve.data === String(dateMobile)) {
  //       return reserveForDay.push(reserve)
  //     }
  //   })
    
  //   return () => reserves.current = reserveForDay;
  // }, [events])
  
  // console.log(events)
  // console.log(reserves.current)
  return (
    <>
      <Container>
        <ContainerContent>
          {horas.map((hour, index) => (
            <span key={index}>
              <ContainerHour>{hour}</ContainerHour>
              <ContainerCell id={idMobile += 5}>
              </ContainerCell>
            </span>
          ))}
        </ContainerContent>
      </Container>
    </>
  );
}
export default React.memo(AgendaMobile);
