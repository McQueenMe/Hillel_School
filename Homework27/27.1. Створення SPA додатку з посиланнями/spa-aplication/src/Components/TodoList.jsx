import React, { useState, useEffect } from 'react';
import { Button, Form, ListGroup, Container } from 'react-bootstrap';

const TodoList = ({ currentTheme }) => {
   const [tasks, setTasks] = useState(() => {
      return JSON.parse(localStorage.getItem('tasks')) || [];
   });
   const [task, setTask] = useState('');

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   const handleAddTask = (e) => {
      e.preventDefault();
      if (task) {
         setTasks([...tasks, task]);
         setTask('');
      }
   };

   const handleDeleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
   };

   return (
      <Container className={`todo-list ${currentTheme === 'light' ? 'bg-light' : 'bg-dark'} p-4`} style={{ borderRadius: '10px' }}>
         <h1 className={currentTheme === 'light' ? 'text-dark' : 'text-light'}>TODO Список</h1>
         <Form onSubmit={handleAddTask} className="mb-4">
            <Form.Group>
               <Form.Control
                  type="text"
                  placeholder="Нове завдання"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
               />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">Додати</Button>
         </Form>

         <ListGroup>
            {tasks.map((task, index) => (
               <ListGroup.Item
                  key={index}
                  className={`d-flex justify-content-between align-items-center ${currentTheme === 'light' ? '' : 'bg-secondary text-light'}`}
               >
                  {task}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteTask(index)}>
                     Видалити
                  </Button>
               </ListGroup.Item>
            ))}
         </ListGroup>
      </Container>
   );
};

export default TodoList;
