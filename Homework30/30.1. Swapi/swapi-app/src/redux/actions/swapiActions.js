import axios from 'axios';

export const setData = (data) => ({
   type: 'SET_DATA',
   payload: data,
});

export const setError = (error) => ({
   type: 'SET_ERROR',
   payload: error,
});

export const clearData = () => ({
   type: 'CLEAR_DATA',
});

export const fetchData = (id) => async (dispatch) => {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
      dispatch(setData(response.data));
   } catch (error) {
      dispatch(setError('Failed to fetch data. Please check the ID and try again.'));
   }
};
