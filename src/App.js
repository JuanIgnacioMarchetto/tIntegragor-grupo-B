import './App.css';
import TaskForm from "./components/formulario/formulario";
import { useTodo } from "./components/hooks/useTodo";
import {TaskList} from './components/TaskList/TaskList'
const App = () => {
  const {
    todos,
    onAddTask,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  }=useTodo();

  return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas</h1>
				<div className='counter-todos'>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TaskForm onAddTask={onAddTask} />
				</div>

				<TaskList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
		</>
	);
}

export default App;
