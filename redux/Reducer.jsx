import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: true,
    isError: false,
  },
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
  },
});
export const {setAuthenticated, setIsError} = authSlice.actions;
export default authSlice.reducer;
