import React, {useState} from "react";
import {Radio} from 'semantic-ui-react';
import Disponivel from './disponivel'
import Ocupado from './ocupado'

function Inicial() {
  const [status,setStatus] = useState('ocupado')
  function State() {
    if (status === 'ocupado'){
      setStatus('disponivel');
    }
    else {
      setStatus('ocupado');
    }
  }
  return(
    <>
    <Radio toggle onChange={State}></Radio>
    
    {status === 'disponivel' ?
      <Disponivel></Disponivel>
      :
      <Ocupado></Ocupado>
    }
    </>
  )
}
export default Inicial