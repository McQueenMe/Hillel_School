

import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_TODOS, setTodos } from "../actions/todoActions";

const fetchTodosFromApi = () =>
   new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, text: "Example TODO", completed: false }]), 1000)
   );

function* loadTodosSaga() {
   try {
      const todos = yield call(fetchTodosFromApi);
      yield put(setTodos(todos));
   } catch (e) {
      console.error("Помилка завантаження задач", e);
   }
}

export function* watchTodosSaga() {
   yield takeEvery(LOAD_TODOS, loadTodosSaga);
}
