// App.js

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTask, deleteTask, toggleTask } from './actions';

function App({ tasks, addTask, deleteTask, toggleTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      addTask(newTask);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleToggleTask = (taskId) => {
    toggleTask(taskId);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  toggleTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);