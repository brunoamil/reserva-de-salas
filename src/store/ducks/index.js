import { combineReducers } from 'redux';

import users from './users';
import load from './load';
import modal from './modal';
import salas from './salas';
import dadosReserva from './dadosReserva';

export default combineReducers({
  users, //user
  load_1: load, //load
  modal_1: modal, //modal
  salas_1: salas, //salas
  dadosReserva, // ReserveData

  // Só nos useSelector's
});
