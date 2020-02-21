import React from 'react';
import { Segment } from 'semantic-ui-react';
import './index.css'

function Detalhes() {
    return (
        <>
        <Segment.Group size='big'>
            <Segment>Nome: Joao</Segment>
            <Segment>Setor: NTI</Segment>
            <Segment.Group horizontal>
                <Segment>Inicio: 10:00</Segment>
                <Segment>Termino: 13:00</Segment>
            </Segment.Group>
            <Segment>Evento: Reunião reserva de salas</Segment>
        </Segment.Group>
        </>
    )
}
export default Detalhes;