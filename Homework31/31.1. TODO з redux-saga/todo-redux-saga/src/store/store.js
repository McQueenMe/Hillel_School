
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todosReducer from "../reducers/todoReducer";
import { watchTodosSaga } from "../sagas/todoSagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todosReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchTodosSaga);

export default store;
