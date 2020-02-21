import React from 'react';
import {Container, Linha} from './styles'

function Detalhes() {
    return (
        <>
        <Container>
            <Linha>Nome:</Linha>
            <Linha>Setor:</Linha>
            <Linha>Inicio:
                Termino:
            </Linha>
            <Linha>Evento:</Linha>
        </Container>
        </>
    )
}
export default Detalhes;