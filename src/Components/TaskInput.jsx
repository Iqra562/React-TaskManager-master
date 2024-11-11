import React, { useContext } from 'react';
import { FaPlus, FaEdit, FaTimes } from 'react-icons/fa';
import { UserContext } from '../context/ContextProvider';
import { useReducer } from 'react';
import { reducer,initialState } from '../reducers/TodosReducer';
import { ReducerContext } from '../context/ReducerContextProvider';
const TaskInput = ({ isLightMode }) => {
    const {   errors } = useContext(UserContext);
    const [state, dispatch] = useContext(ReducerContext);
    const { singleTask,editingId, tasks, isModalOpen } = state;
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch({
        type: 'Update_Single_Task_Field',
        payload: { field: name, value },
      });
    };
  
    const handleAddTask = () => {
      dispatch({
        type: 'Add_task',
      });
    };
    const handleUpdate = () => {
      dispatch({
        type: 'Update_task',

      })
      console.log(state)
    };
    const handleCancel = () => {
      dispatch({
        type: 'Cancel_task',
      });
    };
  
    return (
        <div className={`flex flex-col w-full p-4 rounded-lg shadow-lg ${isLightMode ? 'bg-white' : 'bg-[#1B1B2A]'}`}>
            {/* Task Title and Due Date */}
            <div className="flex justify-between mb-4">
                <div className="w-1/2 pr-2">
                    <label className="mb-2 font-semibold">Task Title</label>
                    <input
                        type='text'
                        name='text'
                        placeholder='What Next?'
                        value={singleTask.text}
                      onChange={handleInputChange}
                        className={`w-full p-4 rounded-lg transition duration-300 ${isLightMode ? 'bg-white text-black' : 'bg-[#1B1B2A] text-[#EAEAEA]'}`}
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="mb-2 font-semibold">Due Date</label>
                    <input
                        type='date'
                        name='dueDate'
                        value={singleTask.dueDate}
                        onChange={handleInputChange}
                        className={`w-full p-4 rounded-lg transition duration-300 ${isLightMode ? 'bg-white text-black' : 'bg-[#1B1B2A] text-[#EAEAEA]'}`}
                    />
                </div>
            </div>

            {/* Priority Centered */}
            <div className="mb-4">
                <label className="mb-2 font-semibold">Priority</label>
                <select
                    value={singleTask.priority}
                    name='priority'
                    onChange={handleInputChange}
                    className={`block w-full p-4 rounded-lg transition duration-300 ${isLightMode ? 'bg-white text-black' : 'bg-[#1B1B2A] text-[#EAEAEA]'}`}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            {/* Description */}
            <label className="mb-2 font-semibold">Description</label>
            <textarea
                placeholder='Description'
                name='description'
                value={singleTask.description}
                onChange={handleInputChange}
                className={`w-full p-4 mb-4 rounded-lg transition duration-300 ${isLightMode ? 'bg-white text-black' : 'bg-[#1B1B2A] text-[#EAEAEA]'}`}
            />

            {/* Action Buttons */}
            <div className="flex mt-2 gap-2">
                <button
                    onClick={editingId ? handleUpdate : handleAddTask}
                    className={`flex items-center justify-center p-2 rounded-lg ${isLightMode ? 'bg-blue-500 text-white' : 'bg-[#E94560] text-white'} transition duration-300 hover:bg-opacity-80 shadow-md`}
                >
                    {editingId ? <FaEdit /> : <FaPlus />}
                </button>
                <button
                    onClick={handleCancel}
                    className={`flex items-center justify-center p-2 rounded-lg ${isLightMode ? 'bg-gray-400 text-black' : 'bg-red-500 text-white'} transition duration-300 hover:bg-opacity-80 shadow-md`}
                >
                    <FaTimes />
                </button>
            </div>

            {/* Error Message */}
            {errors && (
                <p className={`mt-2 p-2 rounded-lg text-center ${isLightMode ? 'bg-red-200 text-red-800' : 'bg-red-600 text-white'}`}>
                    {errors}
                </p>
            )}
        </div>
    );
};

export default TaskInput;
