import React, { useState, useEffect } from 'react';
import TaskForm from './components/formulario/formulario';
import TaskItem from './components/taskItem/taskIten';

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
    <div className="container">
      <h1>To Do List</h1>
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
