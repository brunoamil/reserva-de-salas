import React from 'react';

import { Container } from './styles';

const Success = props => (
  <>
    <Container>
      <p>{props.children}</p>
    </Container>
  </>
);

export default Success;
