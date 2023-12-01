import React, { useState } from "react";
import "./TaskForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Text, VStack } from "@chakra-ui/react";

const TaskForm = ({ addTask }) => {
  // Estado para gestionar mensajes de error
  const [error, setError] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (taskName, setFieldValue) => {
    if (taskName.trim() !== "") {
      addTask(taskName);
      setFieldValue("taskName", ""); // Limpiar el campo de entrada después de enviar
    }
  };

  // Función para validar los valores del formulario
  const validate = (values) => {
    const errors = {};

    if (values.taskName.trim() === "") {
      errors.taskName = "Task name is required";
    }

    return errors;
  };

  // Componente Formik que envuelve el formulario y maneja su estado
  return (
    <Formik initialValues={{ taskName: "" }} onSubmit={() => {}} validate={validate}>
      {({ values, setFieldValue }) => ( // Acceso a valores y función para cambiar valores de Formik
        <Form>
          <VStack spacing={4} align="stretch">
            {/* Campo de texto para el nombre de la tarea */}
            <Field
              type="text"
              name="taskName"
              placeholder={`Enter new task and Press Enter ${values.taskName ? `- ${values.taskName}` : ""}`}
              as={Input}
              height={30}
              width={300}
              className="transparent-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSubmit(e.target.value, setFieldValue); // Enviar tarea al presionar Enter
                }
              }}
            />
            {/* Mensaje de error para el campo de tarea */}
            <ErrorMessage name="taskName" component={Text} color="red.500" fontSize="sm" />
            {error && (
              // Mensaje de error 
              <Text fontSize="sm" color="red.500" mb={2}>
                {error}
              </Text>
            )}
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
