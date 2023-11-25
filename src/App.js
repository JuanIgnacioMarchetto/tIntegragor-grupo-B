import React from 'react';
import TaskList from './components/TaskList/TaskList.jsx';
import './App.css';

const App = () => {
  return (
    <div className="container-tareas">
      <h1>To Do List</h1>
      <TaskList />
    </div>
  );
};

export default App;
