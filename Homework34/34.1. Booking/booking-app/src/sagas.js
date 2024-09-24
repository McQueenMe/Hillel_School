import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { setHotels } from './features/bookingSlice';

function* fetchHotels(action) {
   try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = yield call(axios.get, `${apiUrl}/hotels`, {
         params: action.payload,
      });
      yield put(setHotels(response.data));
   } catch (error) {
      console.error('Error fetching hotels:', error);
   }
}

function* rootSaga() {
   yield takeEvery('booking/fetchHotels', fetchHotels);
}

export default rootSaga;
