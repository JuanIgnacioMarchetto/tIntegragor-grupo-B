import React, { useState } from 'react';

import TaskForm from './components/formulario';
import TaskItem from './components/TaskItem/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <TaskItem  key={index} className="border border-dark list-group-item" description={task}/>
        ))}
      </ul>
    </div>
  );
};


export default App;



