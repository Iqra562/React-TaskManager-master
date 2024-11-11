import React from "react";
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export  const initialState = {

  tasks :[],
  singleTask:{
    id : uuidv4(),
    text: '',
    dueDate: '',
    priority: 'low',
    status: 'pending',
    description: '',
    createdAt: new Date().toISOString()
  },
  errors:"",
  editingId:null,
  isModalOpen:false,
}

 
// const validateTask = (task) => {
//     const trimmedText = task.text.trim();
    
//     if (trimmedText === '') {
//         return 'Task Cannot Be Empty';
//     }
    


//     if (task.dueDate && new Date(task.dueDate) < new Date()) {
//         return 'Due Date Cannot Be in the Past';
//     }

//     return '';
// };


export const  reducer= (state,action)=>{
    switch (action.type) {
      case "Update_Single_Task_Field": {
        return {
            ...state,
            singleTask: {
                ...state.singleTask,  
                [action.payload.field]: action.payload.value,  
            },
        };
    }
    
          
        case "Add_task":{
            // const error = validateTask(...state.singleTask);

            // if (error) return { ...state,...state.errors : error };
            return{

                ...state,
                tasks:[
                    ...state.tasks,
                    { ...state.singleTask, id: uuidv4(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },

                ],

                
                
                singleTask : initialState.singleTask,
                errors : '',
                setIsModalOpen:false,
            }
        }
        case "Delete_task": {
          return {
              ...state,
              tasks: state.tasks.filter(task => task.id !== action.payload)  // Assign filtered tasks back to the tasks property
          };
      }
      

    }
}


