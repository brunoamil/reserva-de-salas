import React from 'react';
import { useSelector } from "react-redux";

import {ContainerTitle} from './styles'

function Detalhes() {
    const { sector, inicial_hour, final_hour } = useSelector(state => state.ReserveData.reserve_busy_data)
    return (
        <>
          <ContainerTitle>
            <h1>Setor : {sector}</h1>
            <h1>De {inicial_hour} ás {final_hour}</h1>
          </ContainerTitle>
        </>
    )
}
export default Detalhes;