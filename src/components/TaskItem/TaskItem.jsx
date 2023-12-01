import React, { useState } from 'react';
import './TaskItem.css';
import { Box, ListItem, Text, VStack, IconButton } from "@chakra-ui/react";
import { CheckSquare, Delete } from "react-feather";

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const [inputValue, setInputValue] = useState(""); // Estado agregado para el valor del input

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(""); // Limpiar el valor del input
    }
  };

  return (
    <ListItem
      textDecoration={task.completed ? "line-through" : "none"}
      display="flex"
      flexDirection="row" // Línea agregada para hacer los elementos horizontales
      alignItems="flex-start" // Línea agregada para alinear los elementos al inicio
      paddingLeft={4}
      width="100%" // Línea agregada para hacer que el elemento ocupe todo el ancho
      justifyContent="space-between"
    >
      <VStack alignItems="flex-start"> {/* Alinea el texto al inicio */}
        <Text fontWeight="bold" textDecoration={task.completed ? "line-through" : "none"}>
          {task.name}
        </Text>
        {task.deadline && (
          <Text fontSize="sm" color="gray.500">
            Deadline: {task.deadline}
          </Text>
        )}
      </VStack>
      
      <Box>
        <IconButton    //icono marcar tarea echa
          icon={<CheckSquare />}
          onClick={handleComplete}
          colorScheme="green"
          aria-label={task.completed ? "Marcar como incompleto" : "Marcar como completo"}
          marginRight={2}
        />
        <IconButton    //icono eliminar tares
          icon={<Delete />}   
          onClick={handleDelete}
          colorScheme="red"
          aria-label="Eliminar tarea"
          id={`delete`} // ID agregado para el botón de eliminar
          marginRight={2}
        />
      </Box>
    </ListItem>
  );
};

export default TaskItem;
