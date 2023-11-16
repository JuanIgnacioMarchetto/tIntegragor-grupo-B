
import React, { useState } from 'react';
import TaskItem from './components/taskItem/taskIten';
import TaskForm from "./components/formulario";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
{}      <TaskForm onAddTask={handleAddTask} /> 
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App;



