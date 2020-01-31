import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  name: ['name'],
  sector: ['sector'],
  login: ['email'],
  logout: [],
});

export const INICIAL_STATE = {
  userName : '',
  userSector: '',
  userEmail : '',
  userLogin : false,
};

const name = (state = INICIAL_STATE, { name }) => (
  {...state, userName: name }
)

const sector = (state = INICIAL_STATE, { sector }) => (
  {...state, userSector: sector }
)

const log_in = (state = INICIAL_STATE, { email }) => (
  {...state, userLogin: true, userEmail: email }
)

const log_out = (state = INICIAL_STATE, action) => (
  {...state, userLogin: false, userEmail: ''}
)

export default createReducer(INICIAL_STATE, {
  [Types.NAME]: name,
  [Types.SECTOR]: sector,
  [Types.LOGIN]: log_in,
  [Types.LOGOUT]: log_out,
});