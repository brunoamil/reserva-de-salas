import React from "react";
import { Form } from "semantic-ui-react";

import { Container, LabelReg } from "./styles";

const RegisterForm = () => (
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
      </Form>
    </Container>
  </>
);

export default RegisterForm;
