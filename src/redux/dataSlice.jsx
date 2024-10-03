import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {
        data: {},
        status: 'idle',
        error: null,
    },
}

export const userData = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
     setUserDataPending: (state) => {
        state.userData.status = 'pending';
        state.userData.error = null;
      },
      setUserDataFulfilled: (state, action) => {
        state.userData.status = 'fulfilled';
        state.userData.data = action.payload;
      },
      setUserDataError: (state, action) => {
        state.userData.status = 'error';
        state.userData.error = action.payload;
      },
  
  },
})


export const { setUserDataError, setUserDataFulfilled, setUserDataPending } = userData.actions

export default userData.reducer