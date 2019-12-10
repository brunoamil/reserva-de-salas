import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "firebase/auth";

import "bootstrap/dist/css/bootstrap.css";

import "./styles/style.css";
import img from "../../assets/ceuma.png";

const App = () => {
  return (
    <>
      <div className="bg-modal">
        <div className="modal-content">
          <div className="header-modal">
            <img src={img} alt="logo Ceuma" width="60" />
            <h4 className="title-ceuma"> - Ceuma Reservas</h4>
          </div>
          <hr className="modal-line" />
          <div className="main-modal">
          <div className="login-title">
            <h1>Login</h1>
          </div>
          <Form className="form-modal">
            <FormGroup>
              <Label for="exampleEmail"><span id="span-label">Email:</span> </Label>
              <Input
                type="email"
                name="email"
                id="input-email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"><span id="span-label">Senha:</span> </Label>
              <Input
                type="password"
                name="password"
                id="input-pass"
                placeholder="Senha"
              />
            </FormGroup>
            <div className="btn-modalLogin">
              <Button color="primary" size="lg">Login</Button>
            </div>
          </Form>
          </div>
          <footer>
              <p className="msg-footer-modal">Ainda não tem conta? Cadastre-se</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
