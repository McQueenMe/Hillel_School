import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todosReducer from '../reducers/todoReducer';
import TodoApp from './TodoApp';

const renderWithRedux = (component, { initialState, store = createStore(todosReducer, initialState) } = {}) => {
   return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
   };
};

test('сторінка має заголовок "Todo List"', () => {
   renderWithRedux(<TodoApp />);
   const headingElement = screen.getByText(/Todo List/i);
   expect(headingElement).toBeInTheDocument();
});

test('введення тексту у поле для нової задачі', () => {
   renderWithRedux(<TodoApp />);
   const inputElement = screen.getByPlaceholderText(/Enter new todo/i);
   fireEvent.change(inputElement, { target: { value: '123abc' } });
   expect(inputElement.value).toBe('123abc');
});

test('не додається новий елемент без тексту', () => {
   renderWithRedux(<TodoApp />);

   const buttonElement = screen.getByText(/Add Todo/i);
   fireEvent.click(buttonElement);

   const listItemElements = screen.queryAllByRole('listitem');
   expect(listItemElements.length).toBe(0);
});

test('додавання нової задачі до списку', () => {
   renderWithRedux(<TodoApp />);

   const inputElement = screen.getByPlaceholderText(/Enter new todo/i);
   fireEvent.change(inputElement, { target: { value: 'Нова задача' } });

   const buttonElement = screen.getByText(/Add Todo/i);
   fireEvent.click(buttonElement);

   const listItemElements = screen.getAllByRole('listitem');
   expect(listItemElements.length).toBe(1);
   expect(screen.getByText(/Нова задача/i)).toBeInTheDocument();
});

test('очищення всіх задач', () => {
   renderWithRedux(<TodoApp />);

   const inputElement = screen.getByPlaceholderText(/Enter new todo/i);
   fireEvent.change(inputElement, { target: { value: 'Тестова задача' } });

   const addButton = screen.getByText(/Add Todo/i);
   fireEvent.click(addButton);

   expect(screen.getAllByRole('listitem').length).toBe(1);

   const clearButton = screen.getByText(/Clear All/i);
   fireEvent.click(clearButton);

   expect(screen.queryAllByRole('listitem').length).toBe(0);
});
