import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../api/query';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUserFromLocalStorage: (state) => {
      const userData = localStorage.getItem('user');
      if (userData) {
        state.user = JSON.parse(atob(userData)); 
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user'); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem('user', btoa(JSON.stringify(action.payload.user))); 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserFromLocalStorage, logout } = authSlice.actions;

export default authSlice.reducer;
