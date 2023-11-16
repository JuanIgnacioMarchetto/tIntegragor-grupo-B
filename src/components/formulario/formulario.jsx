import React, { useState } from 'react';
import './TaskForm.css'; 

const TaskForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') {
            return;
        }
        onAddTask(task);
        setTask('');
    };
    return (

        <form className='task-form' onSubmit={handleSubmit}>
            <div className="conteinerform">
                <label htmlFor="taskInput" className="form-label">
                    Nueva Tarea
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    value={task}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn Add">
                Agregar Tarea
            </button>
        </form>
    );
};



export default TaskForm;
