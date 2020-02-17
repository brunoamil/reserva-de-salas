import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  reserve: ["set_loader"],
  info: ["set_loader_info"]
});

export const INICIAL_STATE = {
  loadReserve: false,
  loadInfo: false
};

const ReserveLoader = (state = INICIAL_STATE, { set_loader }) => ({
  ...state,
  loadReserve: set_loader
});

const infoLoader = (state = INICIAL_STATE, { set_loader_info }) => ({
  ...state,
  loadInfo: set_loader_info
});

export default createReducer(INICIAL_STATE, {
  [Types.RESERVE]: ReserveLoader,
  [Types.INFO]: infoLoader
});
