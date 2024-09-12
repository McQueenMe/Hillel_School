import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         state.push(action.payload);
      },
      clearTodo: (state) => {
         return [];
      }
   }
});

export const { addTodo, clearTodo } = todoSlice.actions;  // Экшены для использования
export default todoSlice.reducer;
