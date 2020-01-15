import { createStore, combineReducers } from 'redux';
import { usuarioReducer, setModal, setDadosReserva, setSalas, setLoad } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
  modal: setModal,
  salas: setSalas,
  dados: setDadosReserva,
  load: setLoad
}));

export default store;