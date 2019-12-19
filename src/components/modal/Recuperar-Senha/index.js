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
      setCarregando(true);
      firebase.auth().sendPasswordResetEmail(email).then( sucesso =>{
        setCarregando(false)
        setSuccess(true)
      }).catch(erro => {
        setCarregando(false)
        setErro(true)
        // setMsgErro(erro)
        // switch(erro.message) 
        //       {
        //       case 'Password should be at least 6 characters':
        //           setMsgErro('A senha deve ter pelo menos 6 caracteres!');  
        //           break;
        //        default:
        //           setMsgErro('Não foi possível cadastrar. Tente novamente mais tarde!');
        //           break; 
        //       }
      })
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
          <Loader size='medium'>Carregando</Loader>
        </Dimmer>
  
        :
        <CustomButton size="large" primary content="Enviar email" onClick={EnviarEmail}/>
      }
      {erro ? <Message header='Este email não está cadastrado!' color='red' icon='dont'/>
        : <div/>}
      </Container>
      
      
  
    </>
  );
  }
  export default RedefinirSenha;
  