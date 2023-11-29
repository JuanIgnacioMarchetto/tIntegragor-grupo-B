import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { TaskUpdate } from './TaskUpdate';
import { IconButton } from '@chakra-ui/react';

export const TaskIndividual= ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TaskUpdate  todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<TiDeleteOutline />
			</button>
		</li>
	);
};
