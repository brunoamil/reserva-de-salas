import React from 'react';
import { useSelector } from 'react-redux'

import { ContainerCenterHeader } from '../styles';

const Room = () => {
  const room = useSelector(state => state.salas.currentRoom);

  return (
    <ContainerCenterHeader>
      <h1>{room}</h1>
    </ContainerCenterHeader>
  );
}

export default React.memo(Room);