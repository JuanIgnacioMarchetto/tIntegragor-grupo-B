import { useState } from "react";


export const useFormulario = (initialForm = {}) => {
    // Utiliza el hook 'useState' para crear un estado local llamado 'formState' y una función 'setFormState' para actualizarlo
    const [formState, setFormState] = useState(initialForm);

    // Función que se ejecuta cuando hay un cambio en algún campo de entrada del formulario
    const onInputChange = (e) => {
        // Obtiene el nombre y el valor del campo de entrada que cambió
        const name = e.target.name;
        const value = e.target.value;

        // Actualiza el estado del formulario, preservando los valores anteriores y sobrescribiendo el campo cambiado
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Función para resetear el formulario al estado inicial pasado como parámetro
    const resetForm = () => {
        setFormState(initialForm);
    };

    // Devuelve un objeto con el estado actual del formulario, las funciones para gestionar cambios en los campos y para resetear el formulario
    return {
        ...formState,    // Retorna el estado actual del formulario
        formState,       
        onInputChange,   // Retorna la función para gestionar cambios en los campos del formulario
        resetForm,       // Retorna la función para resetear el formulario
    };
};
