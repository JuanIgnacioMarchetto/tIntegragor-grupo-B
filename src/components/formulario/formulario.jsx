import React, { useState } from 'react';
import './Formulario.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const TaskForm = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleDeadlineChange = (date) => {
        setTaskDeadline(date);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleConfirmTask = (index) => {
        // Aquí puedes realizar alguna acción cuando se confirma la tarea
        // Por ahora, solo imprimimos un mensaje en la consola
        console.log(`Tarea confirmada: ${tasks[index].description}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            description: taskDescription,
            deadline: taskDeadline ? taskDeadline.format('YYYY-MM-DD HH:mm:ss') : ''
        };

        setTasks([...tasks, newTask]);
        setTaskDescription('');
        setTaskDeadline('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Descripción de la tarea:</label>
                <input type="text" value={taskDescription} onChange={handleDescriptionChange} />
            </div>
            <div>
                <label>Fecha límite:</label>
                <Datetime value={taskDeadline} onChange={handleDeadlineChange} />
            </div>
            <button type="submit">Agregar tarea</button>

            {tasks.map((task, index) => (
                <div key={index}>
                    <p>Tu tarea:</p>
                    <p>Descripción: {task.description}</p>
                    <p>Fecha límite: {task.deadline}</p>
                    <button onClick={() => handleDeleteTask(index)}>Eliminar tarea</button>
                    <button onClick={() => handleConfirmTask(index)}>Confirmar tarea</button>
                </div>
            ))}
        </form>
    );
};

export default TaskForm;
