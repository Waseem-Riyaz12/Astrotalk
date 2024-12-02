import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isError: false,
    amount: 0,
  },
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
  },
});
export const {setAuthenticated, setIsError, setAmount} = authSlice.actions;
export default authSlice.reducer;
