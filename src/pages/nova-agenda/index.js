import React from 'react'
import { Table } from 'semantic-ui-react'
import './index.css';
import Header from '../agenda/header'

function NovaAgenda() {
    return(
    <>
    <div id  = 'allPage'>
        <Header id='header' />

        <Table id='table' definition>
            <Table.Header>
                <Table.Row >
                    <Table.HeaderCell id='none' />
                    <Table.HeaderCell><strong>SEG 20/12</strong></Table.HeaderCell>
                    <Table.HeaderCell><strong>TER 21/12</strong></Table.HeaderCell>
                    <Table.HeaderCell><strong>QUA 22/12</strong></Table.HeaderCell>
                    <Table.HeaderCell><strong>QUI 23/12</strong></Table.HeaderCell>
                    <Table.HeaderCell><strong>SEX 24/12</strong></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell width='1'>08:00</Table.Cell>
                    <Table.Cell className='8hr'></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>09:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>10:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>11:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>12:00</Table.Cell>
                    <Table.Cell className='busy'></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>13:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>14:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>15:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>16:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>17:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell width='1'>18:00</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
    </>
    )
}

export default NovaAgenda;
