import React, { useContext, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoomActions  from '../../store/ducks/salas';
import ReserveActions  from '../../store/ducks/reserves';

import LoadContext from '../../contexts/LoadContext';

const Select = ({ ViewSelect, CustomSelect, SelectAling }) => {
  const { actionLoader } = useContext(LoadContext);
  const dispatch = useDispatch();

  const salas = useSelector(state => state.salas.rooms);
  
  const requestRooms = useCallback(() => {
    dispatch(RoomActions.getRoomsRequest())
  }, [dispatch])
  
  useEffect(() => requestRooms(), [requestRooms])

  const roomsActions = room => {
    dispatch(RoomActions.currentRoom(room));
    dispatch(ReserveActions.getReservesRequest())
  }

  const renderOptionsRooms = () => {
    return salas.map(room => 
      <option value={room} key={room}>{room}</option>  
    )
  }
    
  return (
    <>
      <ViewSelect>
        <SelectAling>
          <CustomSelect onChange={e => {
            roomsActions(e.target.value);
            actionLoader();
          }}>
            {renderOptionsRooms()}
          </CustomSelect>
        </SelectAling>
      </ViewSelect>
    </>
  );
}

export default React.memo(Select);