import { combineReducers } from 'redux';

import user from './users';
import load from './load';
import modal from './modal';
import { salas } from './salas';
import { reserves } from './reserves';
import ReserveData from './dadosReserva';

export default combineReducers({
  user, //user
  load, //load
  modal, //modal
  salas, //salas
  reserves, //Reservas
  ReserveData, // ReserveData
});
