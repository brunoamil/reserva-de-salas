import { combineReducers } from 'redux';

import user from './users';
import load from './load';
import modal from './modal';
import { salas } from './salas';
import ReserveData from './dadosReserva';

export default combineReducers({
  user, //user
  load: load, //load
  modal: modal, //modal
  salas: salas, //salas
  ReserveData, // ReserveData
});
