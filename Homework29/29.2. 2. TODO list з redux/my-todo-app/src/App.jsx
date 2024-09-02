import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      savedTodos.forEach(todo => dispatch(addTodo(todo)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#8ED6EA', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="row justify-content-center w-100">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="my-4 text-start">TODO</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введите задачу"
            />
            <button className="btn btn-primary" onClick={handleAddTodo}>
              Добавить
            </button>
          </div>
          <h2 className="my-4 text-start">TODOS</h2>
          <div className="list-group">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="list-group-item list-group-item-action"
                style={{
                  backgroundColor: '#FAE3CB',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}
              >
                {todo}
              </div>
            ))}
          </div>
          <footer className="text-center my-4">Всего: {todos.length}</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
