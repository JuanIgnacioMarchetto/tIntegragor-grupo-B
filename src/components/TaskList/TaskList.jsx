import React,{useState}  from 'react'
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../formulario/TaskForm';


function TaskList(){

  const [tasksArray, setTaskArray] = useState([]) //estado inicial del arreglo de tareas(vacio)

  const addTask = task =>{
    console.log("task added");
    console.log(task);

    if(task.description.trim()){
      task.description = task.description.trim();
      const updatedTasks = [task, ...tasksArray]//paso los elementos a individuales
      setTaskArray(updatedTasks)
    }
  }

  const deleteTask = id =>{
    const updatedTasks = tasksArray.filter(task => task.id === id);
    setTaskArray(updatedTasks)
  }

  const completeTask = id=>{
    const updatedTasks = tasksArray.map(task =>{
      if(task.id === id){
        task.completed = !task.completed
      }
      return task
    })
    setTaskArray(updatedTasks)
  }



  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className='task-list-container' >
        {
          tasksArray.map((task)=>
          <TaskItem
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
            />
            )}
      </div>
    
    </>
  )
}

export default TaskList