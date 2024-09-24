import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import bookingReducer from './features/bookingSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
   history: createBrowserHistory(),
});

const store = configureStore({
   reducer: {
      router: routerReducer,
      booking: bookingReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(routerMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store;
