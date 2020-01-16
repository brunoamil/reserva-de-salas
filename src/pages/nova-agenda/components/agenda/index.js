import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../../../services/firebase";

import "../../index.css";
import { Container } from "./styles";

function Agenda() {
  var date = new Date();
  var data = date.getDate();
  var dia = date.getDay();
  var mes = date.getMonth() + 1;
  let number = 0;

  const dispatch = useDispatch();

  const CheckLogin = useSelector(state => state.user.usuarioLogin);
  const sala = useSelector(state => state.salas.salaAtual);

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

  const checkName = name => {
    if(name.indexOf(" ") > -1) {
      let firstName = name.split(" ");
      return firstName[0];
    } else {
      return name;
    }
  }

  useEffect(() => {
    const getEventos = async () => {
      let event = [];

      await firebase
      .firestore()
      .collection("salas")
      .doc(`${sala}`)
      .collection("Eventos")
      .get()
      .then(sucesso => {
        sucesso.forEach(doc => {
          const {id, userName} = doc.data()
          const firstName = checkName(userName);
          event.push({id, firstName});
          
          console.log(event);
        });
      })
      .catch(erro => {
        console.log("Erro ao pegar salas", erro);
      });
    if (event) {
      event.map(item => {
        let divCell = document.getElementById(`${item.id}`);

        const spanc = document.createElement('span');
        const titleReserve = document.createElement('h2');

        titleReserve.innerText = item.firstName;
        spanc.setAttribute('id', 'spanCell');

        spanc.appendChild(titleReserve);
        return (
          divCell.appendChild(spanc)
        ) 
      })
    }
    };
    getEventos();
  });

  const everyAction = () => {
    dispatch({ type: "SET_MODAL", valueModal: true });

    if (CheckLogin === 0) {
      dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });
    } else {
      dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
    }
  };

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
      <div id="allPage">
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
            {horas.map((hora, index) => (
              <Table.Row>
                <Table.HeaderCell width="1">
                  <strong> {hora} </strong>
                </Table.HeaderCell>
                {dias.map(() => (
                  <Table.Cell>
                    <Container
                      id={`${(number += 1)}`}
                      onClick={e => {
                        if ((e.target.childNodes).length !== 0) {
                          dispatch({ type: "SET_MODAL", valueModal: true });
                          dispatch({ type: "SET_MODAL_INFO", valueInfo: true });
                        } else {
                          dispatch({
                            type: "SET_ID",
                            id: e.target.getAttribute("id")
                          });
                          dispatch({ type: "SET_HORA", hora });
                          everyAction();
                        }
                      }}
                    />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
export default Agenda;
