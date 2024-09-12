import axios from 'axios';
import { setData, setError, clearData as clearDataAction } from '../swapiSlice';  // Правильный импорт clearData

export const fetchData = (id) => async (dispatch) => {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
      dispatch(setData(response.data));
   } catch (error) {
      dispatch(setError('Не удалось получить данные. Проверьте ID.'));
   }
};

// Если clearData используется напрямую в SwapiPage, просто переименуем его
export const clearData = () => (dispatch) => {
   dispatch(clearDataAction());  // Вызываем clearData из swapiSlice
};
