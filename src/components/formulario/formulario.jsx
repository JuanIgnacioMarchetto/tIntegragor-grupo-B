import React, { useState } from 'react';
import './formulario.css'; 
import Datetime from'react-datetime.css';
import 'react-datetime/css/react-datetime.css'


const TaskForm = ({ onAddTask }) => {
 const [task, setTask] = useState('');
 const [selectedDate, setSelectedDate] = useState(null);

 const handleInputChange = (e) => {
 setTask(e.target.value);
 };

 const handleDateChange = (date) => {
 setSelectedDate(date);
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 if (task.trim() !== '') {
 onAddTask(task, selectedDate);
 setTask('');
 setSelectedDate(null);
 }
 };

 return (
 <form onSubmit={handleSubmit}>
 <label htmlFor="taskInput">Task:</label>
 <input type="text"
 id="taskInput"
 value={task}
 onChange={handleInputChange}
 />
 <label>Date and Time:</label>
 <Datetime value={selectedDate} onChange={handleDateChange} />
 <button type="submit">Add Task</button>
 </form>
 );
};

export default TaskForm;
