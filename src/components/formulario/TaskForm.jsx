import React, {useState, useEffect} from 'react';
import './TaskForm.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input,Text, VStack} from "@chakra-ui/react";



const TaskForm = ({ addTask }) => {
    const initialValues = {
      taskName: "",
      taskDeadline: ""
    };
  
    const [error, setError] = useState("");
  
    useEffect(() => {
      if (error) {
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }, [error]);
  
    const handleSubmit = (values, { resetForm }) => {
      if (values.taskName.trim() !== "") {
        // Validar la fecha actual
        const currentDate = new Date();
        const selectedDate = new Date(values.taskDeadline);
  
        if (selectedDate < currentDate) {
          setError("Date must be after today.");
          return;
        }
  
        addTask(values.taskName, values.taskDeadline);
        resetForm();
      }
    };
  
    const validate = (values) => {
      const errors = {};
  
      if (values.taskName.trim() === "") {
        errors.taskName = "Task name is required";
      }
  
      return errors;
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        <Form>
          <VStack spacing={4} align="stretch">
            <Field
              type="text"
              name="taskName"
              placeholder="Task name"
              as={Input}
            />
            <ErrorMessage name="taskName" component={Text} color="red.500" fontSize="sm" />
            
            <Field
              type="date"
              name="taskDeadline"
              placeholder="Deadline (optional)"
              as={Input}
              aria-label="Deadline"
            />
            {error && (
              <Text fontSize="sm" color="red.500" mb={2}>
                {error}
              </Text>
            )}
            <Text fontSize="sm" color="gray.500" mb={2}>
              *Optional field: Task deadline
            </Text>
  
            <Button type="submit" colorScheme="blue">
              Add task
            </Button>
          </VStack>
        </Form>
      </Formik>
    );
  };

  export default TaskForm;