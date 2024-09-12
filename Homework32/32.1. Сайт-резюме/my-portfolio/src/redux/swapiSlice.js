import { createSlice } from '@reduxjs/toolkit';

const swapiSlice = createSlice({
   name: 'swapi',
   initialState: {
      data: null,
      error: null,
   },
   reducers: {
      setData: (state, action) => {
         state.data = action.payload;
         state.error = null;
      },
      setError: (state, action) => {
         state.error = action.payload;
         state.data = null;
      },
      clearData: (state) => {
         state.data = null;
         state.error = null;
      }
   }
});

export const { setData, setError, clearData } = swapiSlice.actions;  // Экшены для использования
export default swapiSlice.reducer;
