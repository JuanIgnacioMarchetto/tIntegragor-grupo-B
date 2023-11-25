import React, { useState } from 'react';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: input,
      completed: false
    }
    props.onSubmit(newTask);
  }

  return (
    <form onSubmit={handleSubmmit}>
      <div>
        <input
          className='input-task'
          type="text"
          placeholder='Create New Task'
          name='description'
          onChange={handleChange}
        />
      </div>
      <button className='tarea-boton'>Add Task</button>
    </form>
  );
};

export default TaskForm;
