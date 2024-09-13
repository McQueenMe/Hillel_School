import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, TextField, List, ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function TodoPage() {
   const [text, setText] = useState('');
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todos);

   useEffect(() => {
      if (todos.length === 0) {
         const savedTodos = JSON.parse(localStorage.getItem('todos'));
         if (savedTodos) {
            savedTodos.forEach(todo => dispatch(addTodo(todo)));
         }
      }
   }, [dispatch, todos]);

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
      <Container style={{ minHeight: '100vh', paddingTop: '30px' }}>
         <Typography variant="h4" gutterBottom>TODO</Typography>
         <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <TextField
               label="Введите задачу"
               variant="outlined"
               fullWidth
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddTodo}>
               Добавить
            </Button>
         </div>
         <Typography variant="h5" gutterBottom>Список задач</Typography>
         <List>
            {todos.map((todo, index) => (
               <ListItem key={index} style={{ backgroundColor: '#f5e8c7', marginBottom: '10px', borderRadius: '8px' }}>
                  {todo}
               </ListItem>
            ))}
         </List>
      </Container>
   );
}

export default TodoPage;
