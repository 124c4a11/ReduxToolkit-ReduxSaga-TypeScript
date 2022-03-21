import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/IUser';


interface UsersState {
  users: IUser[];
  pending: boolean;
  error: string | null;
}


const initialState: UsersState = {
  users: [],
  pending: false,
  error: null,
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetchRequest(state) {
      state.pending = true;
    },

    usersFetchSuccess(state, action: PayloadAction<IUser[]>) {
      state.pending = false;
      state.users = action.payload;
      state.error = null;
    },

    usersFetchFailure(state, action: PayloadAction<string>) {
      state.pending = false;
      state.error = action.payload;
    }
  }
});


export const {
  usersFetchRequest,
  usersFetchSuccess,
  usersFetchFailure
} = usersSlice.actions;

export default usersSlice.reducer;
