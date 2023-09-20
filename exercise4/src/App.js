// App.js

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTask, deleteTask } from './actions';

function App({ tasks, addTask, deleteTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
      };
      addTask(newTask);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);