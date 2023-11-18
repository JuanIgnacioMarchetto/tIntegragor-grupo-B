import React from 'react';
import './TaskItem.css';


const TaskItem = ({ id, description, completed, completeTask, deleteTask }) => {

  return (
    <li className="list-group-item">
      <div className={completed ? 'taskComplete' : 'task-container'}>
        <div
          className='task-description'>
          {description}
        </div>
        <div className='buttons-container'>
          <button type="button" onClick={() =>completeTask(id)}>
            complete
          </button>
          <button type="button" onClick={() =>deleteTask(id)}>
            Delete
          </button>
        </div>
        
      </div>
    </li>
  );
};

export default TaskItem;
