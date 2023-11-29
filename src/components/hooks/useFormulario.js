import { useState } from "react";


export const useFormulario = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;

        // Actualiza el estado del formulario
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Función para resetear el formulario al estado 
    const resetForm = () => {
        setFormState(initialForm);
    };

    
    return {
        ...formState,    
        formState,       
        onInputChange,   
        resetForm,      
    };
};
