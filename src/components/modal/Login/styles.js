import styled from "styled-components";
import { Button } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 30px 15px 30px;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LabelReg = styled.h1`
  font-size: 2em;
`;

// Esqueci minha senha
export const TitleForgot = styled.a`
  font-size: 1em;
  color: #0080ff;
  &:hover{
    text-decoration: underline;
  }
  margin: 50px 0px 10px 0px;
`;

export const CustomButton = styled(Button)`
  margin: 30px 0 -2px !important;
  width: 100%
`;