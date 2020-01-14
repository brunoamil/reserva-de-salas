import styled from "styled-components";
import {Modal, Button } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 30px 15px 30px;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LabelReg = styled.h1`
  font-size: 1.5em;
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
