import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isError: false,
    isAuthenticated: false,
    amount: 0,
    user: [],
  },
  reducers: {
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const {setIsError, setUser, isAuthenticated} = authSlice.actions;
export default authSlice.reducer;
