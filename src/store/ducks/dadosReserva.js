import { createActions, createReducer } from "reduxsauce";
import moment from 'moment';
let now = moment();

export const { Types, Creators } = createActions({
  inicial_hour: ["inicial_hour"],
  final_hour: ["final_hour"],
  event: ["event"],
  date: ["date"],
  id: ["id"],
  idMobile: ["id_mobile"],
  dateMobile: ["date_mobile"],
});

export const INICIAL_STATE = {
  reserve_inicial_hour: "",
  reserve_final_hour: "",
  reserve_event: "",
  reserve_id: "",
  reserve_date: "",
  reserve_id_mobile: -4,
  reserve_date_mobile: now.date()
};

const event = (state = INICIAL_STATE, { event }) => ({
  ...state,
  reserve_event: event
});

const id = (state = INICIAL_STATE, { id }) => ({ ...state, reserve_id: id });

const inicial_hour = (state = INICIAL_STATE, { inicial_hour }) => ({
  ...state,
  reserve_inicial_hour: inicial_hour
});

const final_hour = (state = INICIAL_STATE, { final_hour }) => ({
  ...state,
  reserve_final_hour: final_hour
});

const date = (state = INICIAL_STATE, { date }) => ({
  ...state,
  reserve_date: date
});

const id_mobile = (state = INICIAL_STATE, { id_mobile }) => ({
  ...state, 
  reserve_id_mobile: id_mobile
})

const date_mobile = (state = INICIAL_STATE, { date_mobile }) => ({
  ...state, 
  reserve_date_mobile: date_mobile
})


export default createReducer(INICIAL_STATE, {
  [Types.EVENT]: event,
  [Types.ID]: id,
  [Types.ID_MOBILE]: id_mobile,
  [Types.INICIAL_HOUR]: inicial_hour,
  [Types.FINAL_HOUR]: final_hour,
  [Types.DATE]: date,
  [Types.DATE_MOBILE]: date_mobile
});
