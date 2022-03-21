import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getUsers } from '../../../../API/getUsers';
import { usersFetchFailure, usersFetchSuccess } from '../usersReducer';
import { fetchUsers, usersSaga } from '../usersSaga';


describe('USERS SAGA', () => {
  const users = [{ id: 1, name: 'John' }];

  it('put users data to store if no errors', () => {
    const g = fetchUsers();

    expect(g.next().value).toEqual(call(getUsers));
    expect(g.next(users).value).toEqual(put(usersFetchSuccess(users)));
    expect(g.next().done).toBe(true);
  });

  it('put error data to store if an error was thrown', () => {
    const g = fetchUsers();
    const errMsg = 'error message';

    g.next();

    expect(g.throw(new Error(errMsg)).value).toEqual(put(usersFetchFailure(errMsg)));
    expect(g.next().done).toBe(true);
  });

  it('put "something went wrong" error if an error of unknown type wat thrown', () => {
    const g = fetchUsers();
    const errMsg = 'Something went wrong!';

    g.next();

    expect(g.throw({}).value).toEqual(put(usersFetchFailure(errMsg)));
    expect(g.next().done).toBe(true);
  });
});


describe('USERS SAGA WATCHER', () => {
  it('watching', () => {
    const watchAll = usersSaga();

    expect(watchAll.next().value).toEqual(all([
      takeLatest('users/usersFetchRequest', fetchUsers)
    ]));
  });
})
