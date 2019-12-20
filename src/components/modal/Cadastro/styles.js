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
  font-size: 2em;
`;

export const CustomButton = styled(Button)`
  margin: 30px 0 -2px !important;
  width: 100%
`;

export const FooterModal = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0080ff;

  p {
    color: #ffffff;
    font-size: 1em;
  }

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  }
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
  border-bottom: 3px solid #0080ff;
  color: #000;
`;
export const CustomModalContent = styled(Modal.Content)`
  padding: 12px !important;
`;
