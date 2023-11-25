import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const TaskForm = ({ onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDeadlineChange = (date) => {
    setTaskDeadline(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      const newTask = {
        id: Date.now(),
        description: taskDescription.trim(),
        deadline: taskDeadline ? taskDeadline.format("YYYY-MM-DD HH:mm:ss") : "",
        completed: false,
      };

      onAddTask(newTask);

      setTaskDescription("");
      setTaskDeadline("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descripción de la tarea:</label>
        <input type="text" value={taskDescription} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label>Fecha límite:</label>
        <Datetime value={taskDeadline} onChange={handleDeadlineChange} />
      </div>
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;
