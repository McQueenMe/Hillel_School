import { combineReducers } from 'redux';
import swapiReducer from './swapiReducer';
import todoReducer from './todoReducer';

export default combineReducers({
   swapi: swapiReducer,
   todo: todoReducer,
});
