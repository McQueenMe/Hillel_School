// src/sagas/todoSagas.js

import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_TODOS, setTodos } from "../actions/todoActions";

// Симуляція API запиту для завантаження списку задач
const fetchTodosFromApi = () =>
   new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, text: "Example TODO", completed: false }]), 1000)
   );

// Worker Saga
function* loadTodosSaga() {
   try {
      const todos = yield call(fetchTodosFromApi);
      yield put(setTodos(todos));
   } catch (e) {
      console.error("Помилка завантаження задач", e);
   }
}

// Watcher Saga
export function* watchTodosSaga() {
   yield takeEvery(LOAD_TODOS, loadTodosSaga);
}
