import styled from "styled-components";
import { Button, Placeholder, Form, Label } from "semantic-ui-react";

export const Container = styled.div``;

export const HeaderModalContent = styled.div`
  width: 100%;
  height: 10vh;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 30px 15px 30px;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TextAling = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    h1{
      font-family: "PT Sans",sans-serif;
      color: #000;
      align-items: center;
    }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LabelConfirm = styled(Label)`
  background-color: transparent !important;
  padding:0px !important;
  font-size: 1.2em !important;
`;

export const FormFieldHora = styled(Form.Field)`
  margin-top: 10px;
`;

export const DataDiv = styled(Placeholder.Line)`
  text-align: center;
  font-size: 1.3em;
  margin-top: 5px;
  border: 1px solid rgba(34,36,38,.15);
  border-radius: 4px;
  padding: 1px;
`

export const HourContent = styled(Placeholder.Line)`
  font-size:1.3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left !important;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid rgba(34,36,38,.15);
  border-radius: 4px;
  padding: 1px;

  select{
    border: none;
    outline : none;
    background-color: transparent;
    :optional{
      font-size: 1em;
    }
  }
`;

export const CustomOption = styled.option`
  font-size: 1.5em;
  color: #eee !important;
`;

export const CustomButton = styled(Button)`
  margin-top: 5% !important;
  color: white !important;
  background: #0d4b81 !important;
`;