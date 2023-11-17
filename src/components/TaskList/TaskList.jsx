import React from 'react';
import { TaskIndividual } from './TaskIndividual';

export const TaskList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<ul>
			{todos.map(todo => (
				<TaskIndividual
					key={todo.id}
					todo={todo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	);
};
