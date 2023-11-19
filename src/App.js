/* import React, { useState } from "react";
import TaskForm from "./components/formulario/formulario";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(./components/imagenes/backgroundmadera.jpg)` }}>
      <h1>To Do List</h1>
      <button onClick={handleToggleForm}>
        {showForm ? "Ocultar formulario" : "Agregar tarea"}
      </button>
      {showForm && <TaskForm onHideForm={() => setShowForm(false)} />}
    </div>
  );
};

export default App; */
import React, { useState } from "react";
import TaskForm from "./components/formulario/formulario";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(./components/imagenes/backgroundmadera.jpg)` }}>
      <h1>To Do List</h1>
      <button onClick={handleToggleForm}>
        {showForm ? "Ocultar formulario" : "Agregar tarea"}
      </button>
      {showForm && <TaskForm onHideForm={() => setShowForm(false)} />}
    </div>
  );
};

export default App;


/* import React, { useState, useEffect } from 'react';
import TaskForm from './components/formulario/formulario';
import TaskItem from './components/taskItem/taskIten';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), description: newTask, completed: false }]);
  };

  const handleCompleteTask = (taskId, completed) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <App>
    <div className="container">
      <h1>To Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div></App>
  );
};

export default App;
 */