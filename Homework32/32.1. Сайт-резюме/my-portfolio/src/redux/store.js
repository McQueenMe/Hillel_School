import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';      // Импорт редьюсера для TODO
import swapiReducer from './swapiSlice';    // Импорт редьюсера для SWAPI

const store = configureStore({
   reducer: {
      todos: todoReducer,       // Редьюсер для TODO
      swapi: swapiReducer,      // Редьюсер для SWAPI
   },
});

export default store;
