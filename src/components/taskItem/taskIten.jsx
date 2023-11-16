import React, { useState } from 'react'
 import './TaskItem.css'

const TaskItem = ({description}) => {
  const [completed, setCompleted]= useState(false);
  const handleComplete=()=>{
    setCompleted(!completed);
  }

  return (
    <div className='item-container'>
      <p className={completed ? 'taskComplete' : 'task-item'}>{description}</p>
      <button type='button' onClick={handleComplete}>
        Completar
      </button>
    </div>
  );
};

export default TaskItem