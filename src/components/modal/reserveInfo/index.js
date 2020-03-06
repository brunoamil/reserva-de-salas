import React, { useEffect, useState } from "react";
import { Icon, Button, Modal, Input, Form, Message } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../loader";

import { Creators as usersAction } from "../../../store/ducks/users";
import { Creators as LoadActions } from "../../../store/ducks/load";
import { Creators as ModalActions } from "../../../store/ducks/modal";
import { Creators as RoomsActions } from "../../../store/ducks/salas";

import {
  Header,
  Container,
  ContainerInfo,
  ContainerDados,
  ContainerHorario
} from "./styles";

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom);
  const id = useSelector(state => state.ReserveData.reserve_id);
  const loader = useSelector(state => state.load.loadInfo);

  const user = useSelector(state => state.user);

  const [dadosReserva, setDadosReserva] = useState();
  const [loaderDel, setLoaderDel] = useState(false);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState();
  const [carregando, setCarregando] = useState(false);

  const checkName = name => {
    if (name) {
      if (name.indexOf(" ") > -1) {
        let firstName = name.split(" ");
        return firstName[0];  
      } else {
        return name;
      }
    }
  };

  useEffect(() => {
    const getEventos = async () => {
      await firebase
        .database()
        .ref(`salas/${sala}/Eventos`)
        .on("value", sucesso => {
          sucesso.forEach(doc => {
            if (id === doc.val().id) {
              if (!dadosReserva) {
                const {
                  userName,
                  setor,
                  inicio,
                  termino,
                  nomeEvento,
                  userEmail
                } = doc.val();

                const firstName = checkName(userName);
                setDadosReserva({
                  firstName,
                  setor,
                  inicio,
                  termino,
                  nomeEvento,
                  userEmail
                });
                dispatch(LoadActions.info(false));
                // console.log(doc.data());
              }
            }
          });
        });
    };

    getEventos();
  });

  function Logar() {
    setCarregando(true);
    if (email === "" || senha === "") {
      setErro(true);
      setMsgErro("Informe email e/ou senha!");
      setCarregando(false);
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(sucesso => {
          // user
          dispatch(usersAction.email(email));
          dispatch(usersAction.log_in(true));
          setCarregando(false);

          if (email === dadosReserva.userEmail) {
            ActionDelete();
          }
          else {
            setOpen(false)
            setErro(true)
            setMsgErro("Você nao pode excluir uma reserva que não é sua!");
          }
        })
        .catch(erro => {
          setErro(true);
          setMsgErro("Usuário ou senha inválidos!");
          setCarregando(false);
        });
    }
  }
  function CheckLogin() {
    setOpen(true);
    if (user.userEmail !== "") {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }
  //Delete reserva
  const ActionDelete = () => {
    setLoaderDel(true);
    setOpen(false);
    firebase
      .database()
      .ref(`salas/${sala}/Eventos/${id}`)
      .remove()
      .then(() => {
        setTimeout(() => {
          setLoaderDel(false);
          dispatch(ModalActions.modal(false));
          dispatch(RoomsActions.roomEvents([]));
          dispatch(LoadActions.reserve(true));
        }, 1500);
      })
      .catch(erro => console.log("Erro ao EXCLUIR Reserva!", erro));
  };

  return (
    <>
      {loader ? (
        <Container>
          <Loading size="medium">Carregando Informações...</Loading>
        </Container>
      ) : (
          <>
            {loaderDel && (
              <Loading size="medium">Deletando Informações...</Loading>
            )}
            <Header>
              <h2>Informações da Reserva</h2>
            </Header>

            <ContainerInfo>
              <ContainerDados>
                <Icon name="user" size="big" />
                <strong>
                  <h1>Nome: </h1>
                </strong>
                <h1>{dadosReserva.firstName}</h1>
              </ContainerDados>
              <ContainerDados>
                <Icon name="building" size="big" />
                <strong>
                  <h1>Setor: </h1>
                </strong>
                <h1>{dadosReserva.setor}</h1>
              </ContainerDados>
              <ContainerDados>
                <ContainerHorario>
                  <Icon name="time" size="big" />
                  <strong>
                    <h1>Inicio: </h1>
                  </strong>
                  <h1>{dadosReserva.inicio}</h1>
                </ContainerHorario>
                <ContainerHorario>
                  <Icon name="stopwatch" size="big" />
                  <strong>
                    <h1>Termino: </h1>
                  </strong>
                  <h1>{dadosReserva.termino}</h1>
                </ContainerHorario>
              </ContainerDados>
              <ContainerDados>
                <Button fluid negative icon size="large" onClick={CheckLogin}>
                  Excluir reserva
              </Button>
              </ContainerDados>
              {erro ? (
                <Message header={msgErro} color="red" icon="dont" />
              ) : ''}
            </ContainerInfo>

            <Modal size="tiny" open={open}>
              <>
                {login ? (
                  <>
                    <Modal.Header>Confirmar Login</Modal.Header>
                    <Modal.Content>
                      <Form>
                        <Form.Field>
                          <Input
                            size="big"
                            loading={carregando}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            icon="mail"
                            iconPosition="left"
                          />
                        </Form.Field>

                        <Form.Field>
                          <Input
                            size="big"
                            loading={carregando}
                            onChange={e => setSenha(e.target.value)}
                            type="password"
                            placeholder="Senha"
                            icon="lock"
                            iconPosition="left"
                          />
                        </Form.Field>
                      </Form>
                      {erro ? (
                        <Message header={msgErro} color="red" icon="dont" />
                      ) : ''}
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        disabled={carregando}
                        content="Cancelar"
                        onClick={() => {
                          setOpen(false);
                        }}
                      />
                      <Button
                        disabled={carregando}
                        color="facebook"
                        icon="check"
                        labelPosition="right"
                        content="Logar"
                        onClick={Logar}
                      />
                    </Modal.Actions>
                  </>
                ) : (
                    <>
                      <Modal.Header>
                        Tem certeza que deseja excluir esta reserva?
                          </Modal.Header>
                      <Modal.Actions>
                        <Button
                          content="Cancelar"
                          onClick={() => {
                            setOpen(false);
                          }}
                        />
                        <Button
                          negative
                          icon="x"
                          labelPosition="right"
                          content="Sim"
                          onClick={ActionDelete}
                        />
                      </Modal.Actions>
                      }
                    </>
                  )}
              </>
            </Modal>
          </>
        )}
    </>
  );
};

export default InfoModal;
