import React, { useState, useEffect } from "react";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import firebase from '../../services/firebase';

import "./index.css";
import { Container, CantReserve } from "./styles";

function Agenda() {
    var date = new Date();
    var data = date.getDate();
    var dia = date.getDay();
    var mes = date.getMonth() + 1;
    let number = 0;

    const dispatch = useDispatch();

    const [loader, setLoader] = useState(false);

    const CheckLogin = useSelector(state => state.user.usuarioLogin);
    const sala = useSelector(state => state.salas.salaAtual) || "Reset";

    if (dia === 0) {
        data += 1;
        dia += 1;
    }
    if (dia === 6) {
        data += 2;
        dia = 1;
    }
    while (dia > 1) {
        dia = dia - 1;
        data = data - 1;
    }

    useEffect(()=>{
        const getEventos = async () => {
            let eventId = [];
    
            await firebase
                .firestore()
                .collection("salas")
                .doc(`${sala}`)
                .collection("Eventos")
                .get()
                .then(sucesso => {
                    sucesso.forEach(doc => {
                        eventId.push(doc.data().id)
                        console.log(eventId);
                        console.log("opa");
                        setLoader(false);
                    });
                })
                .catch(erro => {
                    console.log("Erro ao pegar salas", erro);
                });
            if (eventId) {
                eventId.map(id => {
                    let divCell = document.getElementById(`${id}`);
    
                    return (
                        divCell.style.background = 'red'
                    )
                })
            }
        };
        getEventos()
    })

    const everyAction = () => {
        dispatch({ type: "SET_MODAL", valueModal: true });
        
        if (CheckLogin === 0) {
            dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });
        } else {
            dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
        }
    }

    const dias = [
        `SEG ${data}/${mes}`,
        `TER ${data + 1}/${mes}`,
        `QUA ${data + 2}/${mes}`,
        `QUI ${data + 3}/${mes}`,
        `SEX ${data + 4}/${mes}`
    ];
    const horas = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
    ];

    return (
        <>
        <div id='allPage' >
        <Table id="table" definition>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell id="none" />
                    {dias.map(dia => (
                        <Table.HeaderCell>
                            <strong> {dia} </strong>
                        </Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    horas.map((hora, index) => (
                        <Table.Row>
                            <Table.HeaderCell width='1'><strong> {hora} </strong></Table.HeaderCell>
                            {dias.map(() => (
                                <Table.Cell>
                                    <Container id={`${number += 1}`} onClick={e => {
                                        if (e.target.style.background === 'red') {
                                            dispatch({ type: "SET_MODAL", valueModal: true });
                                            dispatch({ type: "SET_MODAL_INFO", valueInfo: true });
                                        } else {
                                            dispatch({ type: "SET_ID", id: e.target.getAttribute('id') });
                                            dispatch({ type: "SET_HORA", hora });
                                            everyAction();
                                        }
                                    }} />
                                </Table.Cell>
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
export default Agenda;