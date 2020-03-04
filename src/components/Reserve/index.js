import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Responsive } from 'semantic-ui-react';

import { Container } from  './styles';

const Reserve = ({ id, sector }) => {
  const reserves = useSelector(state => state.salas.roomEvents);

  if (reserves.length !== 0) {
    return (
      <Container id={id} >
        <h1>{sector}</h1>
  
        <Responsive {...Responsive.onlyMobile}>
          <div>
            <span>
              <Icon style={{ marginLeft: "15px" }} name="lock" size="big" inverted />
            </span>
          </div>
        </Responsive>
      </Container>
    )
  }

  return '';
}

export default Reserve;
