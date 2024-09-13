// src/store/store.js

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todosReducer from "../reducers/todoReducer";
import { watchTodosSaga } from "../sagas/todoSagas";

// Створення saga middleware
const sagaMiddleware = createSagaMiddleware();

// Створення store з підключенням middleware
const store = createStore(todosReducer, applyMiddleware(sagaMiddleware));

// Запуск саг
sagaMiddleware.run(watchTodosSaga);

export default store;
