import React, { useState, useEffect } from 'react';
import './App.css'
import TaskList from './components/TaskList/TaskList.jsx';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    
    <div className="container-tareas">
      <h1>To Do List</h1>
      <TaskList/>
    </div>
  );
};

export default App;
