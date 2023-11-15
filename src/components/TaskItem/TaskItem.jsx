import React from 'react'
import './TaskItem.css'
/*Este componente deberá representar individualmente una tarea.
Mostrará el nombre de la tarea y un botón para completarla.
Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
cuando esté completada).
*/

const TaskItem = ({description, complete}) => {

    complete=true

  return (
    <div className='item-container'><p className={complete ?'taskComplete':'task-item'}>{description}</p>
    <button type='button'>x</button>
    </div>
  )
}

export default TaskItem