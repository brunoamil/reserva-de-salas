import React, { useState } from "react";
import { Form, Message, Input } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import { useDispatch } from "react-redux";

import Loading from '../../loader';

import {
  Container,
  CustomButton,
  CustomModalContent,
  ContainerModalContent,
  TitleContainerMC,
  CustomForm,

} from "./styles";

function RegisterForm({ ModalTop }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [setor, setSetor] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState(""); 

  function Cadastrar() {
    if (email === "" || senha === "" || nome === "" || setor === "") {
      setErro(true);
      setMsgErro("Verifique se todos os campos estão preenchidos!");
    } else {
      setCarregando(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(sucesso => {
          setCarregando(false);

          firebase
            .firestore()
            .collection("usuarios")
            .add({
              email,
              nome,
              setor,
            })
            .then()
            .catch();

          dispatch({ type: "LOG_IN", usuarioEmail: email });
          dispatch({ type: "USER_SETOR", usuarioSetor: setor });

          dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
        })
        .catch(erro => {
          setCarregando(false);
          setErro(true);

          switch (erro.message) {
            case "Password should be at least 6 characters":
              setMsgErro("A senha deve ter pelo menos 6 caracteres!");
              break;
            case "The email address is already in use by another account.":
              setMsgErro(
                "Este email já está sendo utilizado por outro usuário!"
              );
              break;
            case "The email address is badly formatted.":
              setMsgErro("O formato do seu email é inválido!");
              break;
            default:
              setMsgErro(
                "Não foi possível cadastrar. Tente novamente mais tarde!"
              );
              break;
          }
        });
    }
  }
  const capitalize = (s, count = 0) => {
    if (typeof s !== "string") return "";
    if (s.indexOf(" ") > -1) {
      let nomes = s.split(" ");
      if (count < nomes.length) {
        return capitalize(nomes[count]).concat(" " + capitalize(s, count + 1));
      }
      return "";
    } else {
      if (s !== undefined)
        return s
          .charAt(0)
          .toUpperCase()
          .concat(s.slice(1).toLowerCase());
      return "";
    }
  };

  return (
    <>
      <CustomModalContent>
        <ContainerModalContent>
          <TitleContainerMC>Cadastro</TitleContainerMC>
        </ContainerModalContent>
        <Container>
          <Form size="large" key="tiny" method="POST">

            <CustomForm>
              <Input
                onClick = {ModalTop}
                icon="user"
                iconPosition="left"
                onChange={e => {
                  let name = capitalize(e.target.value);
                  setNome(name);
                }}
                placeholder="Nome"
              />
            </CustomForm>

            <CustomForm>
              <Input
                onClick = {ModalTop}
                icon="building"
                iconPosition="left"
                onChange={e => {
                  let sector = e.target.value;
                  setSetor(sector.toUpperCase());
                }}
                placeholder="Setor"
              />
            </CustomForm>

            <CustomForm>
              <Input
                onClick = {ModalTop}
                icon="mail"
                iconPosition="left"
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </CustomForm>

            <CustomForm>
              <Input
                onClick = {ModalTop}
                icon="lock"
                iconPosition="left"
                onChange={e => setSenha(e.target.value)}
                type="password"
                placeholder="Senha"
              />
            </CustomForm>
          </Form>
          {carregando ? (
            <Loading size="medium">Carregando...</Loading>
          ) : (
            <CustomButton
              size="large"
              content="Cadastrar-se"
              onClick={Cadastrar}
            />
          )}
          {erro ? (
            <Message header={msgErro} color="red" icon="dont" />
          ) : (
            <div />
          )}
        </Container>
      </CustomModalContent>
    </>
  );
}
export default RegisterForm;
