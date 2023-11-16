import React from 'react'
 import './TaskItem.css'

const TaskItem = ({description, complete}) => {

    complete=true

  return (
    <div className='item-container'><p className={complete ?'taskComplete':'task-item'}>{description}</p>
    <button type='button'>x</button>
    </div>
  )
}

export default TaskItem