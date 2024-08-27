import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const Home = () => {
   const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

   return (
      <TodoList tasks={tasks} setTasks={setTasks} />
   );
};

export default Home;
