import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phoneDetails: null,
    user: [],
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiZDZhZTg4MWQtZjhlNi00ZWEzLWI1NGQtYjNhNWUyODJhYjQ5IiwicGhvbmUiOiI2MDA1MjU5NTMwIiwicm9sZSI6InVzZXIiLCJvdHAiOm51bGwsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDI0LTEyLTEzVDA1OjM5OjEwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEyLTEzVDA1OjM5OjEwLjAwMFoiLCJVc2VyUHJvZmlsZSI6bnVsbH0sImlhdCI6MTczNDMyODAzOSwiZXhwIjoxNzM2OTIwMDM5fQ.uALHQh4JIMVwzSG9KtoKGTnsPqg5C-AqreE4e-lzt4w',
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setPhoneDetails(state, action) {
      state.phoneDetails = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});
export const {setUser, setPhoneDetails, setToken} = authSlice.actions;
export default authSlice.reducer;
