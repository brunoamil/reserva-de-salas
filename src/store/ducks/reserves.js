import { createActions, createReducer } from "reduxsauce";

// criando actions types && creators
export const { Types, Creators } = createActions({
  getReservesRequest: [],
  getReservesSuccess: ["reserves"],
  getReservesFailure: ["error"],
});

export const ReservesTypes = Types;
export default Creators;

//criando os reducer handlers
export const INICIAL_STATE = {
  reserves: [],
  loading: false,
  error: null,
};

const request = (state = INICIAL_STATE, actions=null) => (
  {...state, loading: true}
)

const success = (state = INICIAL_STATE, { reserves }) => (
  {...state, reserves, loading: false}
);

const failure = (state = INICIAL_STATE, { error }) => (
  {...state, error: error, loading: false}
)

//criando os reducers
export const reserves = createReducer(INICIAL_STATE, {
  [Types.GET_RESERVES_REQUEST]: request,
  [Types.GET_RESERVES_SUCCESS]: success,
  [Types.GET_RESERVES_FAILURE]: failure,
});
