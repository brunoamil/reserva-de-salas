import React,{useState} from "react";
import { Form } from "semantic-ui-react";
import Success from "../Success";
import firebase from '../../../services/firebase';
import LoginForm from '../Login'

import { Container, LabelReg, CustomButton, FooterModal } from "./styles";

function RegisterForm (){
  const [email, setEmail] = useState();
  const [senha, setSenha]  = useState();
  const [success, setSuccess] = useState(false);

  function Cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(email, senha).then( sucesso =>{
        setSuccess(true)
      }).catch(erro => {
        alert('OPS. Algo deu errado!')
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
      <CustomButton size="large" primary content="Cadastrar-se" onClick={Cadastrar}/>
    </Container>
    }

  </>
);
}
export default RegisterForm;
