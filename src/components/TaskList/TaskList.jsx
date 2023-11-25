

import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem'; 

function TaskList() {
  const [tasksArray, setTaskArray] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTaskArray(storedTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [task, ...tasksArray];
    setTaskArray(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasksArray.filter((task) => task.id !== id);
    setTaskArray(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const completeTask = (id) => {
    const updatedTasks = tasksArray.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskArray(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <>
      <TaskForm onAddTask={addTask} />
      <div className='task-list-container'>
        {tasksArray.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
