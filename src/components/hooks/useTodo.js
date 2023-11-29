import { useEffect, useReducer } from 'react';
import { reducer } from '../../reducer';


export const useTodo = () => {
    // Estado inicial vacío
	const initialState = [];

    // Función de inicialización que obtiene las tareas desde el localStorage o retorna un array vacío
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

	// Utiliza el hook 'useReducer' para gestionar el estado 'todos' mediante el reducer y la función de inicialización
	const [todos, dispatch] = useReducer(
		reducer,
		initialState,
		init
	);

    // Efecto secundario que se ejecuta cada vez que el estado 'todos' cambia
    useEffect(() => {
        // Guarda el estado 'todos' en el localStorage como una cadena JSON
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

	// Función para agregar una nueva tarea al estado 'todos'
	const onAddTask = todo => {
		const action = {
			type: 'Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	// Función para eliminar una tarea del estado 'todos' según su ID
	const handleDeleteTodo = id => {
		const action = {
			type: 'Delete Todo',
			payload: id,
		};

		dispatch(action);
	};

	// Función para marcar como completada una tarea del estado 'todos' según su ID
	const handleCompleteTodo = id => {
		const action = {
			type: 'Complete Todo',
			payload: id,
		};

		dispatch(action);
	};

	// Función para actualizar la descripción de una tarea del estado 'todos' según su ID
	const handleUpdateTodo = (id, description) => {
		const action = {
			type: 'Update Todo',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

    // Retorna un objeto que contiene el estado 'todos' y las funciones para manipularlo
    return {
        todos,
        onAddTask,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    };
};