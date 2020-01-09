import {  INITIAL_STATE, MODAL } from './store';


export function usuarioReducer(state = INITIAL_STATE, action){
  let arrSalas = action.arrSalas;

  switch(action.type){
    case 'USER_NAME':
      return {...state, usuarioNome : action.usuarioNome } 
    case 'LOG_IN':
      return {...state, usuarioLogin: 1, usuarioEmail: action.usuarioEmail }
    case 'LOG_OUT':
      return {...state, usuarioLogin: 0, usuarioEmail: ''}

    //temporario {
    case 'REG_SALAS':
      return {...state, salasReserva: arrSalas}
    //}

    default:
      return state
};
};

export function setModal(state = MODAL, action) {
  let valueLogin = action.valueLogin;
  let valueRegister = action.valueRegister;
  let valueConfirm = action.valueConfirm;

  switch(action.type) {
    case 'SET_MODAL_LOGIN':
      return { ...state, loginForm: valueLogin, registerForm: false, confirmForm: false };
    case 'SET_MODAL_REGISTER':
      return { ...state, registerForm: valueRegister, loginForm: false, confirmForm: false };
    case 'SET_MODAL_CONFIRM':
      return { ...state, confirmForm: valueConfirm, registerForm: false, loginForm: false};
    default:
      return state;
  }
}