import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   formData: {},
   hotels: [],
};

const bookingSlice = createSlice({
   name: 'booking',
   initialState,
   reducers: {
      setFormData(state, action) {
         state.formData = action.payload;
      },
      setHotels(state, action) {
         state.hotels = action.payload;
      },
   },
});

export const { setFormData, setHotels } = bookingSlice.actions;

export default bookingSlice.reducer;
