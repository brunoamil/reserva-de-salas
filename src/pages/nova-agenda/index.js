import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import './index.css';
import Header from '../agenda/header'

function NovaAgenda() {
    var date = new Date;
    var data = date.getDate()
    var dia = date.getDay()

    while (dia > 1){
        dia = dia - 1;
        data = data - 1; 
    }

    const dias = [`SEG ${data}`,`TER ${data+1}`, `QUA ${data+2}`, `QUI ${data+3}`, `SEX ${data+4}`]
    const horas = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    return (
        <>
            <div id='allPage'>
                <Header id='header' />
                <Table id='table' definition>
                    <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell id='none' />
                            {
                                dias.map(dia => <Table.HeaderCell><strong> {dia} </strong></Table.HeaderCell>)
                            }

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            horas.map((hora, index) => (
                                <Table.Row key={index}>
                                    <Table.HeaderCell width='1'><strong> {hora} </strong></Table.HeaderCell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default NovaAgenda;
