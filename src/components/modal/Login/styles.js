import styled from "styled-components";
import {Modal, Button,Form } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 30px 15px 30px;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TitleContainerMC = styled.h1`

  margin-top: 1px;
  font-weight: bold;
  font-size: 2em;
  color: #000;
  font-family: "PT Sans",sans-serif;
`;

export const CustomForm = styled(Form.Field)`

  margin-top: 10px !important;
  input{
    font-size: 1.1em !important;
    border: 1px solid #0000004b !important;
    ::placeholder{
      font-size: 1.1em;
      font-family: 'Source Sans Pro', sans-serif;
      color: #00000094 !important;
    }
    /* @media(min-width: 768px) {
    background: mediumseagreen;
    color: papayawhip;
    } */
  }

`;

export const LabelReg = styled.h1`
  margin: 0px 0px 3px 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4em;
  color: #000;
`;


// Esqueci minha senha
export const TitleForgot = styled.a`  
  cursor: pointer;
  
  margin-top: -5px;
  font-size: 1em;
  color: #0d4b81;
  &:hover{
    text-decoration: underline;
  }
  @media(max-width: 850px) {
    font-weight: bold;
  }

  
`;

export const CustomButton = styled(Button)`
  margin: 20px 0 -2px !important;

  background-color: #0d4b81 !important;
  color: #fff !important;
`;

export const ContainerModalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CustomModalContent = styled(Modal.Content)`
  padding: 12px !important;
`;