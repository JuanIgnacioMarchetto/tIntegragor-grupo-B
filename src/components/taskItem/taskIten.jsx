import React from 'react';
import './taskIten.css';


const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const { id, description, completed } = task;

  const handleComplete = () => {
    onCompleteTask(id, !completed);
  };

  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <li className="list-group-item">
      <div className={`item-container ${completed ? 'completed' : ''}`}>
        <p>{description}</p>
        <button type="button" onClick={handleComplete}>
          Confirmar
        </button>
        <button type="button" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
