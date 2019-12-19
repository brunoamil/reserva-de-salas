import React,{useState} from "react";
import { Form, Dimmer, Loader } from "semantic-ui-react";
import Success from "../Success";
import firebase from '../../../services/firebase';

import { Container, LabelReg, CustomButton } from "./styles";

function RegisterForm (){
  const [email, setEmail] = useState();
  const [senha, setSenha]  = useState();
  const [success, setSuccess] = useState(false);
  const [carregando, setCarregando] = useState(false)

  function Cadastrar() {
    setCarregando(true);
    firebase.auth().createUserWithEmailAndPassword(email, senha).then( sucesso =>{
      setCarregando(false)
      setSuccess(true)
    }).catch(erro => {
      alert(erro)
      setCarregando(false)
    })
  }

  return(
  <>
  {
    success ? 
    <Success/>

    : 
    <Container>
    <Form size="tiny" key="tiny" method="POST">
      <Form.Field>
        <LabelReg>Email:</LabelReg>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <LabelReg>Senha:</LabelReg>
        <input onChange={(e)=> setSenha(e.target.value)} type="password" placeholder="Senha" />
      </Form.Field>
    </Form>
    {
      carregando?
      <Dimmer active >
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      :
      <CustomButton size="large" primary content="Cadastrar-se" onClick={Cadastrar}/>
    }
    </Container>
    }

  </>
);
}
export default RegisterForm;
