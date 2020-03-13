import React from 'react';

import { Label } from 'semantic-ui-react';
import { Container } from  './styles';

const Reserve = ({ id, sector }) => {

  return (
    <Container id={id} raised>
      <Label id={id} as='a' color='red' ribbon='right'>
        Reservado
      </Label>
      <h1 id={id} >{sector}</h1>
    </Container>
  )
}

export default Reserve;
