import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */
import { RoomTypes } from '../ducks/salas';
import { ReservesTypes } from '../ducks/reserves';
import { Types } from '../ducks/users';

/* ------------- Sagas ------------- */
import userSaga from './UserSagas';
import roomSaga from './RoomsSagas';
import reserveSaga from './ReserveSaga';

function* watchGetRoomsRequest() {
  yield takeLatest(RoomTypes.GET_ROOMS_REQUEST, roomSaga);
}

function* watchGetReserveRequest() {
  yield takeLatest(ReservesTypes.GET_RESERVES_REQUEST, reserveSaga);
}

function* watchGetDataUserRequest() {
  yield takeLatest(Types.GET_REQUEST_DATA_USER, userSaga);
}

export default function* root() {
  yield all([ watchGetRoomsRequest(), watchGetReserveRequest(), watchGetDataUserRequest() ]);
}