import {  INITIAL_STATE, MODAL, DADOS_RESERVA } from './store';


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
  let valueInfo = action.valueInfo;

  switch(action.type) {
    case 'SET_MODAL_LOGIN':
      return { ...state, loginForm: valueLogin, registerForm: false, confirmForm: false, infoModal: false };
    case 'SET_MODAL_REGISTER':
      return { ...state, registerForm: valueRegister, loginForm: false, confirmForm: false, infoModal: false };
    case 'SET_MODAL_CONFIRM':
      return { ...state, confirmForm: valueConfirm, registerForm: false, loginForm: false, infoModal: false};
    case "SET_MODAL_INFO":
      return { ...state, infoModal: valueInfo, confirmForm: false, registerForm: false, loginForm: false }
    default:
      return state;
  }
}

export function setDadosReserva(state = DADOS_RESERVA, action) {
  switch(action.type) {
    case "SET_EVENTO":
      return { ...state, evento: action.evento }
    case "SET_ID":
      return { ...state, id: action.id }
    case "SET_HORA":
      return { ...state, hora: action.hora }
    case "SET_HORA_FINAL":
      return { ...state, horaFinal: action.horaFinal }
    default: 
      return state;
  }
}