import React,{useState} from "react";
import { Form, Dimmer, Loader, Message } from "semantic-ui-react";
import Success from "../Success";
import firebase from '../../../services/firebase';

import { Container, LabelReg, CustomButton } from "./styles";

function RegisterForm (){
  const [email, setEmail] = useState();
  const [senha, setSenha]  = useState();
  const [success, setSuccess] = useState(false);
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(false)
  const [msgErro, setMsgErro] = useState('');

  function Cadastrar() {
    setCarregando(true);
    firebase.auth().createUserWithEmailAndPassword(email, senha).then( sucesso =>{
      setCarregando(false)
      setSuccess(true)
    }).catch(erro => {
      setCarregando(false)
      setErro(true)
      switch(erro.message) 
            {
            case 'Password should be at least 6 characters':
                setMsgErro('A senha deve ter pelo menos 6 caracteres!');  
                break;
            case 'The email address is already in use by another account.':
                setMsgErro('Este email já está sendo utilizado por outro usuário!'); 
                break; 
            case 'The email address is badly formatted.':
                setMsgErro('O formato do seu email é inválido!'); 
                break;
             default:
                setMsgErro('Não foi possível cadastrar. Tente novamente mais tarde!');
                break; 
            }
    })
  }

  return(
  <>
  {
    success ? 
    <Success/>

    : 
    <Container>
    <Form size="tiny" key="tiny" method="POST">
      <Form.Field>
        <LabelReg>Email:</LabelReg>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <LabelReg>Senha:</LabelReg>
        <input onChange={(e)=> setSenha(e.target.value)} type="password" placeholder="Senha" />
      </Form.Field>
    </Form>
    {
      carregando?
      <Dimmer active >
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      :
      <CustomButton size="large" primary content="Cadastrar-se" onClick={Cadastrar}/>
    }
    {erro ? <Message header= {msgErro} color='red' icon='dont'/>
      : <div/>}
    </Container>
    
    }

  </>
);
}
export default RegisterForm;
