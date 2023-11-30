import TaskItem from '../TaskItem/TaskItem';
import { UnorderedList } from "@chakra-ui/react";
import './TaskList.css';


const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <UnorderedList>
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