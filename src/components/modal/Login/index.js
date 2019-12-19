import React from "react";
import { Form } from "semantic-ui-react";

import { Container, LabelReg, TitleForgot } from "./styles";

const LoginForm = () => (
  <>
    <Container>
      <Form size="tiny" key="tiny" method="POST">
        <Form.Field>
          <LabelReg>Email:</LabelReg>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <LabelReg>Senha:</LabelReg>
          <input type="password" placeholder="Senha" />
        </Form.Field>
        <TitleForgot>Esqueci minha senha!</TitleForgot>
      </Form>
    </Container>
  </>
);

export default LoginForm;
