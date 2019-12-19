import React,{useState} from "react";
import { Form, Dimmer, Loader, Message } from "semantic-ui-react";
import Success from "../Success";
import firebase from '../../../services/firebase';

import { Container, LabelReg, CustomButton } from "./styles";

function RedefinirSenha (){
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)
    const [msgErro, setMsgErro] = useState('');
  
    function EnviarEmail() {
      alert('')
    }
  
    return(
    <>
      <Container>
      <Form size="tiny" key="tiny" method="POST">
        <Form.Field>
          <LabelReg>Email:</LabelReg>
          <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
        </Form.Field>
      </Form>
      {
        carregando?
        <Dimmer active >
          <Loader size='medium'>Loading</Loader>
        </Dimmer>
  
        :
        <CustomButton size="large" primary content="Enviar email para nova senha" onClick={EnviarEmail}/>
      }
      {erro ? <Message header= {msgErro} color='red' icon='dont'/>
        : <div/>}
      </Container>
      
      }
  
    </>
  );
  }
  export default RedefinirSenha;
  