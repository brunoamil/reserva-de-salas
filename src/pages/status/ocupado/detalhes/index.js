import React from 'react';
import { useSelector } from "react-redux";

import {ContainerTitle} from './styles'

function Detalhes() {
    const { sector, event } = useSelector(state => state.ReserveData.reserve_busy_data)
    return (
        <>
          <ContainerTitle>
            <h1>Setor : {sector}</h1>
            <h1>Nome do Evento : {event}</h1>
          </ContainerTitle>
        </>
    )
}
export default Detalhes;