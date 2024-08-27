import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, ListGroup, Container } from 'react-bootstrap';

const TodoList = ({ currentTheme }) => {
   const [tasks, setTasks] = React.useState(() => {
      return JSON.parse(localStorage.getItem('tasks')) || [];
   });

   React.useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   const handleAddTask = (values, { resetForm }) => {
      setTasks([...tasks, values.task]);
      resetForm();
   };

   const handleDeleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
   };

   const validationSchema = Yup.object({
      task: Yup.string()
         .min(5, 'Завдання має містити не менше 5 символів')
         .required('Обов’язкове поле'),
   });

   return (
      <Container>
         <h1 className="mt-5">TODO Список</h1>
         <Formik
            initialValues={{ task: '' }}
            validationSchema={validationSchema}
            onSubmit={handleAddTask}
         >
            <Form className="mb-4">
               <div className="mb-2">
                  <Field
                     name="task"
                     className={`form-control ${currentTheme === 'dark' ? 'bg-dark text-white' : ''
                        }`}
                     placeholder="Нове завдання"
                  />
                  <ErrorMessage name="task" component="div" className="text-danger" />
               </div>
               <Button variant="primary" type="submit">Додати</Button>
            </Form>
         </Formik>

         <ListGroup>
            {tasks.map((task, index) => (
               <ListGroup.Item
                  key={index}
                  className={`d-flex justify-content-between align-items-center ${currentTheme === 'dark' ? 'bg-dark text-white' : ''
                     }`}
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
