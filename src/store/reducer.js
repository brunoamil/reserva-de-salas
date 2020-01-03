const INITIAL_STATE = {
  usuarioEmail : '',
  usuarioLogin : 0,
}

export default function usuarioReducer(state = INITIAL_STATE, action){
  switch(action.type){
      case 'LOG_IN':
        return {...state, usuarioLogin : 1,usuarioEmail : action.usuarioEmail }
      case 'LOG_OUT':
        return {...state, usuarioLogin : 0,usuarioEmail : ''}
      default :
        return state
  };

};