import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, editTodo, clearTodos, loadTodos } from '../actions/todoActions';

const TodoApp = () => {
   const [newTodo, setNewTodo] = useState("");
   const todos = useSelector((state) => state.todos);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadTodos());
   }, [dispatch]);

   const handleAddTodo = () => {
      if (newTodo.trim()) {
         dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
         setNewTodo("");
      }
   };

   return (
      <div className="container mt-5">
         <h1 className="text-center mb-4">Todo List</h1>
         <div className="row justify-content-center">
            <div className="col-md-6">
               <div className="input-group mb-3">
                  <input
                     type="text"
                     className="form-control"
                     value={newTodo}
                     onChange={(e) => setNewTodo(e.target.value)}
                     placeholder="Enter new todo"
                  />
                  <button className="btn btn-primary" onClick={handleAddTodo}>
                     Add Todo
                  </button>
               </div>
            </div>
         </div>

         <ul className="list-group">
            {todos.map((todo) => (
               <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span
                     className={todo.completed ? "text-decoration-line-through" : ""}
                     onClick={() => dispatch(toggleTodo(todo.id))}
                     style={{ cursor: "pointer" }}
                  >
                     {todo.text}
                  </span>
                  <div>
                     <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => dispatch(editTodo(todo.id, prompt("Edit todo", todo.text)))}
                     >
                        Edit
                     </button>
                     <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch(removeTodo(todo.id))}
                     >
                        Delete
                     </button>
                  </div>
               </li>
            ))}
         </ul>

         <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={() => dispatch(clearTodos())}>
               Clear All
            </button>
         </div>
      </div>
   );
};

export default TodoApp;
