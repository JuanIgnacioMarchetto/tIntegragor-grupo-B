import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import './TaskList.css';
import { v4 as uuidv4 } from 'uuid';

const TaskList = () => {
  const [tasksArray, setTaskArray] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTaskArray(storedTasks);
  }, []);

  const addTask = (task) => {
    if (task.description.trim()) {
      const updatedTasks = [
        {
          id: uuidv4(),
          description: task.description.trim(),
          deadline: task.deadline,
          completed: false,
        },
        ...tasksArray,
      ];
      setTaskArray(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasksArray.filter(task => task.id === id);
    setTaskArray(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasksArray.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTaskArray(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {tasksArray.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
            deadline={task.deadline}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
