import styled from "styled-components";
import {Modal, Button, Form } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 30px 15px 30px;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CustomForm = styled(Form)`
    Form.Field{
    input{
      border : 1px solid #0d4b81;
    }
  }
`;

export const LabelReg = styled.h1`
  font-size: 1.5em;
`;

// Esqueci minha senha
export const TitleForgot = styled.a`
  font-size: 1em;
  color: #0d4b81;
  &:hover{
    text-decoration: underline;
  }
  margin: 50px 0px 10px 0px;
`;


export const CustomButton = styled(Button)`
  margin: 30px 0 -2px !important;
  width: 100%;
  background-color: #0d4b81 !important;
  color: #fff !important;
`;

export const ContainerModalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainerMC = styled.h1`
  font-weight: bold;
  font-size: 2em;
  border-bottom: 3px solid #0d4b81;
  color: #000;
`;
export const CustomModalContent = styled(Modal.Content)`
  padding: 12px !important;
`;