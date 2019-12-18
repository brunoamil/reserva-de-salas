import React,{useState} from "react";
import { Form } from "semantic-ui-react";

import { Container, LabelReg, TitleForgot } from "./styles";

const [email, setEmail] = useState();
const [senha, setSenha]  = useState();

const LoginForm = () => (
  <>
  {
    function Logar() {
      console.log(email,senha);      
    }
  }
    <Container>
      <Form size="tiny" key="tiny" method="POST">
        <Form.Field>
          <LabelReg>Email:</LabelReg>
          <input onChange = {(e)=> e.target.value(setEmail)} type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <LabelReg>Senha:</LabelReg>
          <input onChange = {(e)=> e.target.value(setSenha)} type="password" placeholder="Senha" />
        </Form.Field>
        <TitleForgot>Esqueci minha senha!</TitleForgot>
      </Form>
    </Container>
  </>
);

export default LoginForm;
