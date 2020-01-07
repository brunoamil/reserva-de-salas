const INITIAL_STATE = {
  usuarioEmail : '',
  usuarioLogin : 0,
  salasReserva: [],
}


export function usuarioReducer(state = INITIAL_STATE, action){
  let arrSalas = action.arrSalas;
  switch(action.type){
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