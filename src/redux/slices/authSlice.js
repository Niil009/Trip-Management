import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    signUp: (state, action) => {
      const { username, password, email } = action.payload;
      state.user = { username, email };
      state.isAuthenticated = true;
      state.error = null;
    },
    signUpFailure: (state, action) => {
      state.error = action.payload.error;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { signUp, signUpFailure, logOut } = authSlice.actions;

export default authSlice.reducer;