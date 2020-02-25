import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */
import { RoomTypes } from '../store/ducks/salas';
import { Types } from '../store/ducks/users';

/* ------------- Sagas ------------- */
import roomSaga from './RoomsSagas';
import userSaga from './UserSagas';

function* watchGetRoomsRequest() {
  yield takeLatest(RoomTypes.GET_ROOMS_REQUEST, roomSaga);
}

function* watchGetDataUserRequest() {
  yield takeLatest(Types.GET_REQUEST_DATA_USER, userSaga);
}

export default function* root() {
  yield all([ watchGetRoomsRequest(), watchGetDataUserRequest() ]);
}