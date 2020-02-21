import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { useSelector } from "react-redux";

import './index.css'

function Detalhes() {
    const { sector, event } = useSelector(state => state.ReserveData.reserve_busy_data)
    return (
        <>
            <Segment.Group size='big'>
                <Segment textAlign='center'>
                    <Header as='h2'>
                        <Header.Content>Informações da reserva</Header.Content>
                    </Header>
                </Segment>
                <Segment textAlign='center'>{sector}</Segment>
                <Segment textAlign='center'>{event}</Segment>
            </Segment.Group>
        </>
    )
}
export default Detalhes;