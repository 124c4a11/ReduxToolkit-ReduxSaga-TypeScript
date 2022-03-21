import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getUsers } from '../../../API/getUsers';
import { IUser } from '../../../interfaces/IUser';
import { usersFetchFailure, usersFetchSuccess } from './usersReducer';


export function* fetchUsers() {
  try {
    const users: IUser[] = yield call(getUsers);

    yield put(usersFetchSuccess(users));
  } catch (err) {
    if (err instanceof Error) {
      yield put(usersFetchFailure(err.message));
    } else {
      yield put(usersFetchFailure('Something went wrong!'));
    }
  }
}


export function* usersSaga() {
  yield all([
    takeLatest('users/usersFetchRequest', fetchUsers)
  ]);
}
