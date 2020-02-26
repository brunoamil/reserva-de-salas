import React from 'react';
import { Icon } from 'semantic-ui-react';

import { Container } from  './styles';

const Reserve = () => {
  return (
    <Container>
      <h1>FINANCEIRO</h1>

      <div>
        <span>
          <Icon style={{ marginLeft: "15px" }} name="lock" size="big" inverted />
        </span>
      </div>
    </Container>
  )
}

export default Reserve;
