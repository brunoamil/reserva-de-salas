import React,{useState} from "react";
import { withRouter} from 'react-router-dom';
import { Form, Dimmer, Segment, Loader, Image } from "semantic-ui-react";
import firebase from '../../../services/firebase';
import 'firebase/auth';

import { Container, LabelReg, TitleForgot, CustomButton } from "./styles";

function LoginForm({history}) {

  const [email, setEmail] = useState();
  const [senha, setSenha]  = useState();
  const [carregando, setCarregando] = useState(false);

  function Logar() {
    setCarregando(true)
    firebase.auth().signInWithEmailAndPassword(email, senha).then(sucesso =>{
      history.push('/Principal')
    }).catch(erro => {
      alert(erro)
      setCarregando(false)
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
    </Container>
  </>)
};

export default withRouter(LoginForm);
