import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  // Импорт хранилища Redux
import App from './App';            // Главный компонент приложения
import './index.css';               // Стили (если есть)

ReactDOM.render(
   <Provider store={store}>         {/* Подключаем Redux */}
      <App />                        {/* Отображаем главный компонент */}
   </Provider>,
   document.getElementById('root')  // Место рендеринга (определено в public/index.html)
);
