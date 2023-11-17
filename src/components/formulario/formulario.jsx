import { useFormulario } from "../hooks/useFormulario";

// componente funcional TaskForm que recibe una función 'onAddTask' como prop

const TaskForm = ({ onAddTask }) => {

  // Utiliza el hook 'useFormulario' para gestionar el estado del formulario
  const { description, onInputChange, resetForm } = useFormulario({
    description: "",
  });

  // Función que se ejecuta cuando se envía el formulario
  const onFormSubmit = (e) => {
    e.preventDefault();

     // Verifica que la descripción tenga más de un carácter(para evitar que ponga solo una letra que se yo aja)
    if (description.length <= 1) return;

    let newtask = {
      id: new Date().getTime(),// Asigna un ID basado en la fecha y hora actual
      description: description,
      done: false,// Establece 'done' como falso por defecto
    };
    onAddTask (newtask);// Llama a la función 'onAddTask' pasando el nuevo objeto 'newtask'
    resetForm();
  };

  return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};


export default TaskForm;
