import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './reducers/swapiReducer';

const store = configureStore({
   reducer: {
      swapi: swapiReducer,
   },
});

export default store;
