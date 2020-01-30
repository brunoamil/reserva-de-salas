import { createActions, createReducer } from "reduxsauce";

export const {Types, Creators} = createActions({
  userName: ["userName"],
  userSector: ["userSector"],
  userLogin: ["userLogin"],
  userLogout: ["userLogin"],
});

export const INICIAL_STATE = {
  userName : '',
  userSector: '',
  userEmail : '',
  userLogin : false,
};

const name = (state = INICIAL_STATE, action) => (
  {...state, userName : action.userName }
)

const sector = (state = INICIAL_STATE, action) => (
  {...state, userSector : action.userSector }
)

const log_in = (state = INICIAL_STATE, action) => (
  {...state, userLogin: true, userEmail: action.userEmail }
)

const log_out = (state = INICIAL_STATE, action) => (
  {...state, userLogin: false, userEmail: ''}
)

export default createReducer(INICIAL_STATE, {
  [Types.USER_NAME]: name,
  [Types.USER_SECTOR]: sector,
  [Types.USER_LOGIN]: log_in,
  [Types.USER_LOGOUT]: log_out,
})