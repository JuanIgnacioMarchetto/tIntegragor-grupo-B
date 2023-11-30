import React, { useState, useEffect } from "react";
import { Box,Text} from "@chakra-ui/react";
import TaskForm from "./components/formulario/TaskForm.jsx";
import TaskList from './components/TaskList/TaskList.jsx'
import './App.css'


const App = () => {
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = (taskName, taskDeadline) => {
      const newTask = {
        id: Date.now(),
        name: taskName,
        deadline: taskDeadline,
        completed: false
      };
      setTasks([...tasks, newTask]);
    };
  
    const completeTask = (taskId) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  
    return (

      <Box 
       className="boxTareas"
      >
        <Box
          mx="auto"
          mt={8}
          bgSize="cover"
          className="todo-list-container"
          bgRepeat="no-repeat"
          p={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="34rem" // Ancho fijo de la imagen
          height={`calc(90vh + ${tasks.length * 2}rem)`} // Ajusta el valor 4rem según tus necesidades
        >
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            Todo List
          </Text>
          <TaskForm addTask={addTask} />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          ) : (
            <Text fontSize="6xl" color="white">
              No tasks to do.
            </Text>
          )}
        </Box>
      </Box>
    );
};

export default App;
