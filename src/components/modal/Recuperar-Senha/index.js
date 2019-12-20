import React, { useState } from "react";
import { Form, Dimmer, Loader, Message } from "semantic-ui-react";
import Success from "../Success";
import firebase from '../../../services/firebase';

import { Container, LabelReg, CustomButton, CustomModalContent, ContainerModalContent, TitleContainerMC } from "./styles";

function RedefinirSenha() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(false)
  const [msgErro, setMsgErro] = useState('');

  function EnviarEmail() {
    if(email === '' ){
      console.log('campos invalidos');
      setErro(true)
      setMsgErro('Informe o email!')
    }
    else{
    setCarregando(true);
    firebase.auth().sendPasswordResetEmail(email).then(sucesso => {
      setCarregando(false)
      setSuccess(true)
    }).catch(erro => {
      setCarregando(false)
      setErro(true)
      console.log(erro);

      setMsgErro(erro)
      switch (erro.message) {
        case 'The email address is badly formatted.':
          setMsgErro('O formato do seu email é inválido!');
          break;
        case "There is no user record corresponding to this identifier. The user may have been deleted.":
          setMsgErro(' Este email não foi cadastrado!');
          break
        default:
          setMsgErro('Não foi possível enviar o email. Tente novamente mais tarde!');
          break;
      }
    })}
  }

  return (
    <>
    {
      success ? <Success>Email Enviado!</Success>
      :
      <CustomModalContent>
        <ContainerModalContent>
          <TitleContainerMC>REDEFINIR SENHA</TitleContainerMC>
        </ContainerModalContent>
        <Container>
          <Form size="tiny" key="tiny" method="POST">
            <Form.Field>
              <LabelReg>Email:</LabelReg>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            </Form.Field>
          </Form>
          {
            carregando ?
              <Dimmer active >
                <Loader size='medium'>Carregando</Loader>
              </Dimmer>

              :
              <CustomButton size="large" primary content="Enviar email" onClick={EnviarEmail} />
          }
          {erro ? <Message header={msgErro} color='red' icon='dont' />
            : <div />}
        </Container>
      </CustomModalContent>
    }
    </>
  );
}
export default RedefinirSenha;
