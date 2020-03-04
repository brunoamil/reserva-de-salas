import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoomActions  from '../../store/ducks/salas';

import LoadContext from '../../contexts/LoadContext';

const Select = ({ ViewSelect, CustomSelect, SelectAling }) => {
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
            {(salas.map((sala, index) => (
              <option key={index}>{sala}</option>
            )))}
          </CustomSelect>
        </SelectAling>
      </ViewSelect>
    </>
  );
}

export default React.memo(Select);