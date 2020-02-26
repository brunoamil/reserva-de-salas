import React from "react";
import { useSelector } from "react-redux";

import "../../index.css";
import {
  Container,
  ContainerContent,
  ContainerHour,
  ContainerCell
} from "./styles";

import { horas } from '../../../../utils/TimeConfig';

import Reserve from  '../../../../components/Reserve';


function AgendaMobile() {
  // const dispatch = useDispatch();

  // const CheckLogin = useSelector(state => state.user.userLogin);
  // const event = useSelector(state => state.salas.roomEvents);
  let idMobile = useSelector(state => state.ReserveData.reserve_id_mobile);
  
  return (
    <>
      <Container>
        <ContainerContent>
          {horas.map((hour, index) => (
            <span key={index}>
              <ContainerHour>{hour}</ContainerHour>
              <ContainerCell id={idMobile += 5}>
                <Reserve />
              </ContainerCell>
            </span>
          ))}
        </ContainerContent>
      </Container>
    </>
  );
}
export default AgendaMobile;
