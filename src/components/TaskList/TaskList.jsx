import TaskItem from '../TaskItem/TaskItem'; // Importa el componente TaskItem
import { UnorderedList } from "@chakra-ui/react"; // Importa el componente UnorderedList de Chakra UI
import './TaskList.css';  // Importa los estilos CSS para TaskList

// Componente funcional TaskList que recibe las propiedades tasks, completeTask y deleteTask
const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <UnorderedList>  {/* Renderiza una lista no ordenada */}
    {/* Itera sobre las tareas y crea un componente TaskItem para cada tarea */}
      {tasks.map((task) => (   
        <TaskItem   
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </UnorderedList>
  );
};
export default TaskList;