import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import TaskForm from "./components/formulario/TaskForm.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Carga las tareas almacenadas en el localStorage cuando se carga el componente
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Guarda las tareas en el localStorage cuando se actualiza el estado de las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Agrega una nueva tarea a la lista de tareas
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Completa o descompleta una tarea 
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Elimina una tarea  de la lista de tareas
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Box className="boxTareas">
      <Box
        mx="auto"
        mt={8}
        bgSize="cover"
        className="todo-list-container"
        bgRepeat="no-repeat"
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="start"
        width="34rem" // Ancho fijo del contenedor
        height={`calc(90vh + ${tasks.length * 2}rem)`} // Ajusta el valor 2rem 
        m={75} // Agregamos un margen izquierdo de 75px
      >
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
        <TaskForm addTask={addTask} />
      </Box>
    </Box>
  );
};

export default App;
