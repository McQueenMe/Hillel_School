const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const tasksSchema = new mongoose.Schema({
   task: String
});

const Task = mongoose.model('Tasks', tasksSchema);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.error('Could not connect to MongoDB', err));

// Создание задачи
app.post('/createTask', async (req, res) => {
   try {
      const task = req.body.task;
      const newTask = new Task({ task: task });
      await newTask.save();
      res.status(201).json(newTask);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create task' });
   }
});

// Поиск задачи
// Поиск задачи
app.get('/findTask', async (req, res) => {
   try {
      const tasks = await Task.find({});
      res.status(200).json(tasks);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to find tasks' });
   }
});

// Обновление задачи
app.put('/updateTask', async (req, res) => {
   try {
      const { _id, task, checked } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(_id, { task: task, checked: checked }, { new: true });
      if (!updatedTask) {
         return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(updatedTask);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update task' });
   }
});


// Удаление задачи
app.delete('/deleteTask', async (req, res) => {
   try {
      const { _id } = req.body;
      const deletedTask = await Task.findByIdAndDelete(_id);
      if (!deletedTask) {
         return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted' });
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete task' });
   }
});


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));