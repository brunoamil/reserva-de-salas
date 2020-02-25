import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  getRequestDataUser: ['email'],
  getSuccessName: ['name'],
  getSuccessSector: ['sector'],
  getFailureDataUser: [],
  email: ['email'],
  log_in: [],
  log_out: [],
});

export const INICIAL_STATE = {
  userName : '',
  userSector: '',
  userEmail : '',
  userLogin : false,
  loading: false,
  error: false,
};

const request =  (state = INICIAL_STATE, { email }) => (
  {...state, loading: true}
)
const failure =  (state = INICIAL_STATE, action=null) => (
  {...state, loading: false, error: true}
)

const name = (state = INICIAL_STATE, { name }) => (
  {...state, userName: name, loading: false} 
)

const sector = (state = INICIAL_STATE, { sector }) => (
  {...state, userSector: sector, loading: false }
)

const email = (state = INICIAL_STATE, { email }) => (
  {...state, userEmail: email}
)

const log_in = (state = INICIAL_STATE) => (
  {...state, userLogin: true}
)

const log_out = (state = INICIAL_STATE) => (
  {...state, userLogin: false, userEmail: ''}
)

export default createReducer(INICIAL_STATE, {
  [Types.EMAIL]: email,
  [Types.LOG_IN]: log_in,
  [Types.LOG_OUT]: log_out,
  [Types.GET_REQUEST_DATA_USER]: request,
  [Types.GET_SUCCESS_NAME]: name,
  [Types.GET_SUCCESS_SECTOR]: sector,
  [Types.GET_FAILURE_DATA_USER]: failure
});