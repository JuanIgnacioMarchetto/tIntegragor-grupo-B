import React from 'react';
import './TaskItem.css';
import { Box,ListItem,Text, VStack, IconButton } from "@chakra-ui/react";
import { CheckSquare, Delete } from "react-feather";

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <ListItem
      textDecoration={task.completed ? "line-through" : "none"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={4}
    >
      <VStack>
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
        <IconButton
          icon={<CheckSquare />}
          onClick={handleComplete}
          colorScheme="green"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
          marginRight={2}
        />
        <IconButton
          icon={<Delete />}
          onClick={handleDelete}
          colorScheme="red"
          aria-label="Delete task"
          marginRight={2}
        />
      </Box>
    </ListItem>
  );
};

export default TaskItem;