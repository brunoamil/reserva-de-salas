import { createStore, combineReducers } from 'redux';
import { usuarioReducer, setModal, setDadosReserva, setSalas } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
  modal: setModal,
  salas: setSalas,
  dados: setDadosReserva,
}));

export default store;