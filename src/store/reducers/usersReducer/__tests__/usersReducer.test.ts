import { AnyAction } from '@reduxjs/toolkit';
import { IUser } from '../../../../interfaces/IUser';
import reducer, { usersFetchFailure, usersFetchRequest, usersFetchSuccess, UsersState } from '../usersReducer';


describe('USERS REDUCER', () => {
  const initialState: UsersState = {
    pending: false,
    users: [],
    error: null,
  };

  it('return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it('change pending to true for the time of the request', () => {
    expect(reducer(initialState, usersFetchRequest())).toEqual({
      ...initialState,
      pending: true,
    });
  });

  it('put users data to store', () => {
    const users: IUser[] = [{
      id: 1,
      name: 'John',
    }];

    expect(reducer(initialState, usersFetchSuccess(users))).toEqual({
      pending: false,
      users,
      error: null,
    });
  });

  it('put an error to store if the error was thrown', () => {
    const error = 'some error';

    expect(reducer(initialState, usersFetchFailure(error))).toEqual({
      ...initialState,
      pending: false,
      error,
    });
  });
});
