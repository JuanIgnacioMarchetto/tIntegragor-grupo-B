import React from 'react';
import './TaskItem.css';

const TaskItem = ({ id, description, completed, completeTask, deleteTask, deadline }) => {
  return (
    <li className="list-group-item">
      <div className={completed ? 'taskComplete' : 'task-container'}>
        <div className='task-description'>
          {description}
        </div>
        <div className='buttons-container'>
          <button type="button" onClick={() => completeTask(id)}>
            complete
          </button>
          <button type="button" onClick={() => deleteTask(id)}>
            Delete
          </button>
        </div>
        {deadline && (
          <p className='task-deadline'>
            Deadline: {deadline.format('YYYY-MM-DD HH:mm:ss')}
          </p>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
