import React,{useState} from "react";
import { withRouter} from 'react-router-dom';
import { Form, Dimmer, Loader, Message } from "semantic-ui-react";
import firebase from '../../../services/firebase';
import 'firebase/auth';

import { Container, LabelReg, TitleForgot, CustomButton } from "./styles";

function LoginForm({history}) {

  const [email, setEmail] = useState();
  const [senha, setSenha]  = useState();
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false)

  function Logar() {
    setCarregando(true)
    firebase.auth().signInWithEmailAndPassword(email, senha).then(sucesso =>{
      history.push('/Principal')
    }).catch(erro => {
      setCarregando(false)
      setErro(true)
    });
  }

  return(
  <>
    <Container>
      <Form size="tiny" key="tiny" method="POST">
        <Form.Field>
          <LabelReg>Email:</LabelReg>
          <input onChange = {(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <LabelReg>Senha:</LabelReg>
          <input onChange = {(e)=> setSenha(e.target.value)} type="password" placeholder="Senha" />
        </Form.Field>
        <TitleForgot>Esqueci minha senha!</TitleForgot>
      </Form>
      {
      carregando ?
      <Dimmer active >
        <Loader size='medium'>Loading</Loader>
      </Dimmer>
      : 
        <CustomButton onClick={Logar} size="large" primary content="Login" />
      }
      {erro ? <Message header= 'Usuario ou senha invalidos.' color='red' icon='dont'/>
      : <div/>}
    </Container>
  </>)
};

export default withRouter(LoginForm);
