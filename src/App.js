import './App.css';
import TaskForm from "./components/formulario/formulario";
import { useTodo } from "./components/hooks/useTodo";
import {TaskList} from './components/TaskList/TaskList';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Center } from '@chakra-ui/react';

const App = () => {
  const {
    todos,
    onAddTask,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  }=useTodo();

  return (
	<ChakraProvider>
				<h1>Lista de tareas</h1>
			<Center h="100vh">
			<Box p={8} borderWidth="1px" borderRadius="md" boxShadow="md">
				<div className='counter-todos'>
				</div>


				<TaskList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TaskForm onAddTask={onAddTask} />
				</div>
				</Box>
			</Center>
		</ChakraProvider>

	);
}

export default App;
