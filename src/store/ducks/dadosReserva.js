import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  inicial_hour: ["inicial_hour"],
  final_hour: ["final_hour"],
  event: ["event"],
  id: ["id"],
  date: ["date"],
  busy: ["sector", "event"]
});

export const INICIAL_STATE = {
  reserve_inicial_hour: "",
  reserve_final_hour: "",
  reserve_event: "",
  reserve_id: "",
  reserve_date: "",
  reserve_busy_data: {}
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

const busy = (state = INICIAL_STATE, { sector, event }) => ({
  ...state,
  reserve_busy_data: {
    sector,
    event
  }
})

export default createReducer(INICIAL_STATE, {
  [Types.EVENT]: event,
  [Types.ID]: id,
  [Types.INICIAL_HOUR]: inicial_hour,
  [Types.FINAL_HOUR]: final_hour,
  [Types.DATE]: date,
  [Types.BUSY]: busy
});
