import { combineReducers } from 'redux';

import users from './users';
import load from './load';
import modal from './modal';
import salas from './salas';
import dadosReserva from './dadosReserva';

import {setModal, setDadosReserva, setSalas, setLoad, usuarioReducer } from '../reducer';

export default combineReducers({
  users,
  load_1: load,
  modal_1: modal,
  salas_1: salas,
  dadosReserva,

  user: usuarioReducer,
  modal: setModal,
  salas: setSalas,
  dados: setDadosReserva,
  load: setLoad
});
