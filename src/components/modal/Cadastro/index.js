import React, { useState } from "react";
import { Form, Dimmer, Loader, Message } from "semantic-ui-react";
import firebase from '../../../services/firebase';
import { useDispatch } from 'react-redux';

import { Container, LabelReg, CustomButton, CustomModalContent, ContainerModalContent, TitleContainerMC } from "./styles";

function RegisterForm() {
  const dispatch = useDispatch(); 

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(false)
  const [msgErro, setMsgErro] = useState('');

  function Cadastrar() {
    if ((email === '') || (senha === '') || (nome === '')) {
      setErro(true)
      setMsgErro('Verifique se todos os campos estão preenchidos!')
    }
    else {
      setCarregando(true);

      firebase.auth().createUserWithEmailAndPassword(email, senha).then(sucesso => {
        setCarregando(false)

        firebase.firestore().collection('usuarios').add({
          email: email,
          nome: nome
        }).then().catch()

        dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true})

      }).catch(erro => {
        setCarregando(false)
        setErro(true)

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            setMsgErro('A senha deve ter pelo menos 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            setMsgErro('Este email já está sendo utilizado por outro usuário!');
            break;
          case 'The email address is badly formatted.':
            setMsgErro('O formato do seu email é inválido!');
            break;
          default:
            setMsgErro('Não foi possível cadastrar. Tente novamente mais tarde!');
            break;
        }
      })
    }
  }

  return (
    <>
      <CustomModalContent>
        <ContainerModalContent>
          <TitleContainerMC>CADASTRO</TitleContainerMC>
        </ContainerModalContent>
        <Container>
          <Form size="tiny" key="tiny" method="POST">
            <Form.Field>
              <LabelReg>Email:</LabelReg>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            </Form.Field>

            <Form.Group widths='equal'>
              <Form.Field>
                <LabelReg>Nome:</LabelReg>
                <input onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
              </Form.Field>

              <Form.Field>
                <LabelReg>Senha:</LabelReg>
                <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
              </Form.Field>
            </Form.Group>
          </Form>
          {
            carregando ?
              <Dimmer active >
                <Loader size='medium'>Carregando</Loader>
              </Dimmer>

              :
              <CustomButton size="large" primary content="Cadastrar-se" onClick={Cadastrar} />
          }
          {erro ? <Message header={msgErro} color='red' icon='dont' />
            : <div />}
        </Container>
      </CustomModalContent>
    </>
  );
}
export default RegisterForm;
