import { createStore, combineReducers } from 'redux';
// import setSalas from './ducks/salas';
// import setModal from './ducks/modal'
// import setDadosReserva from './ducks/dadosReserva'
// import setLoad from './ducks/load'
import usuarioReducer from './ducks/users'
import {setModal, setDadosReserva, setSalas, setLoad } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
  modal: setModal,
  salas: setSalas,
  dados: setDadosReserva,
  load: setLoad
}));

export default store;

