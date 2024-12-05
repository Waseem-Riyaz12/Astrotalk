import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isError: false,
    amount: 0,
    user: [],
  },
  reducers: {
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const {setIsError, setAmount, setUser} = authSlice.actions;
export default authSlice.reducer;
