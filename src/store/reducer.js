import { MODAL, USER, SALAS, DADOS_RESERVA, LOAD } from "./states";


export function usuarioReducer(state = USER, action){
  switch(action.type){
    case 'USER_NAME':
      return {...state, usuarioNome : action.usuarioNome };
    case 'USER_SETOR':
      return {...state, usuarioSetor : action.usuarioSetor };
    case 'LOG_IN':
      return {...state, usuarioLogin: 1, usuarioEmail: action.usuarioEmail };
    case 'LOG_OUT':
      return {...state, usuarioLogin: 0, usuarioEmail: ''};
    default:
      return state;
  };
};

export function setSalas(state = SALAS, action) {
  let arrSalas = action.arrSalas;
  let room = action.sala;
  let event = action.event;

  switch(action.type) {
    case 'REG_SALAS':
      return {...state, roomsReservation: arrSalas};
    case 'GET_SALA':
      return {...state, currentRoom: room};
    case 'SET_EVENTOS_SALA':
      return {...state, roomEvents: event};
    default:
      return state;
  }
}

export function setModal(state = MODAL, action) {
  let valueLogin = action.valueLogin;
  let valueRegister = action.valueRegister;
  let valueConfirm = action.valueConfirm;
  let valueInfo = action.valueInfo;
  let valueModal = action.valueModal;

  switch(action.type) {
    case 'SET_MODAL_LOGIN':
      return { ...state, loginForm: valueLogin, registerForm: false, confirmForm: false, infoModal: false };
    case 'SET_MODAL_REGISTER':
      return { ...state, registerForm: valueRegister, loginForm: false, confirmForm: false, infoModal: false };
    case 'SET_MODAL_CONFIRM':
      return { ...state, confirmForm: valueConfirm, registerForm: false, loginForm: false, infoModal: false};
    case "SET_MODAL_INFO":
      return { ...state, infoModal: valueInfo, confirmForm: false, registerForm: false, loginForm: false };
    case "SET_MODAL":
      return { ...state, modal: valueModal };
    default: 
      return state;
  }
}

export function setDadosReserva(state = DADOS_RESERVA, action) {
  switch(action.type) {
    case "SET_EVENTO":
      return { ...state, evento: action.evento };
    case "SET_ID":
      return { ...state, id: action.id };
    case "SET_HORA":
      return { ...state, hora: action.hora };
    case "SET_HORA_FINAL":
      return { ...state, horaFinal: action.horaFinal };
    case "SET_DATA":
      return { ...state, data: action.data };
    default: 
      return state;
  }
}

export function setLoad(state = LOAD, action) {
  switch(action.type) {
    case "SET_LOADER" :
      return { ...state, loader: action.set_loader  };
    case "SET_LOAD_INFO" :
      return { ...state, loadInfo: action.set_loader_info  };
    default:
      return state;
  }
}