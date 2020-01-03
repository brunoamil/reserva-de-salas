import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'
import './index.css';
import Header from './components/header'
import Modal from '../../components/modal'

function NovaAgenda() {
    var date = new Date();
    var data = date.getDate()
    var dia = date.getDay()
    var mes = date.getMonth() + 1
    var contador = 0
    

    if (dia === 0){
        data += 1;
        dia += 1
    }
    if (dia === 6){
        data +=2;
        dia = 1
    }
    while (dia > 1) {
        dia = dia - 1;
        data = data - 1;
    }
   
    //modal
    const [modal, setModal] = useState({ open: false });
    const show = () => setModal({ open: true });
    const close = () => setModal({ open: false });
    const { open } = modal;

    const o = () =>  {
        let id = document.getElementById('2')
        id.onclick = function (){
           return setModal({ open: true });
        }
        console.log('ta no caminho')
        
    }

    const dias = [`SEG ${data}/${mes}`, `TER ${data + 1}/${mes}`, `QUA ${data + 2}/${mes}`, `QUI ${data + 3}/${mes}`, `SEX ${data + 4}/${mes}`]
    const horas = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    return (
        <>
            <div id='allPage'>
                <Modal size='tiny' open={open} close={close}></Modal>
                
                <Header id='header' />
                <Table id='table' definition>
                    <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell id='none' />
                            {
                                dias.map(dia => <Table.HeaderCell><strong> {dia} </strong></Table.HeaderCell>)
                            }

                        </Table.Row>
                    </Table.Header >

                    <Table.Body >
                        {
                            horas.map((hora, index) => (
                                <Table.Row>
                                    <Table.HeaderCell  width='1'><strong> {hora} </strong></Table.HeaderCell>
                                    {
                                        dias.map((cell, index) => (
                                            <Table.Cell onClick={o} id={hora= contador += 1}></Table.Cell>
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
