import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import './index.css';
import Header from './header'

function NovaAgenda() {
    var date = new Date;
    var data = date.getDate()
    var dia = date.getDay()
    var mes = date.getMonth() + 1


    while (dia > 1) {
        dia = dia - 1;
        data = data - 1;
    }

    function tdClick() {
        console.log('clicado');
    }

    const dias = [`SEG ${data}/${mes}`, `TER ${data + 1}/${mes}`, `QUA ${data + 2}/${mes}`, `QUI ${data + 3}/${mes}`, `SEX ${data + 4}/${mes}`]
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
                                    {
                                        dias.map((cell, index) => (
                                            <Table.Cell onClick={tdClick} id={`${data + index}/${mes} ${hora}`}></Table.Cell>
                                        ))
                                    }
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
