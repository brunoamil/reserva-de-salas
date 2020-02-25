import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ViewSelect, CustomSelect, SelectAling } from '../styles';

import RoomActions  from '../../../../store/ducks/salas';

import LoadContext from '../../../../utils/LoadContext';

const Select = () => {
  const { actionLoader } = useContext(LoadContext);
  const dispatch = useDispatch();
  
  const salas = useSelector(state => state.salas.rooms);

  if (salas.length === 0 ) dispatch(RoomActions.getRoomsRequest())
  
  const roomsActions = room => {
    dispatch(RoomActions.currentRoom(room));
    dispatch(RoomActions.roomEvents([]));
  }

  return (
    <>
      <ViewSelect>
        <SelectAling>
          <CustomSelect onChange={e => {
            roomsActions(e.target.value);
            actionLoader();
          }}>
            {(salas.map(sala => (
              <option key={sala}>{sala}</option>
            )))}
          </CustomSelect>
        </SelectAling>
      </ViewSelect>
    </>
  );
}

export default React.memo(Select);