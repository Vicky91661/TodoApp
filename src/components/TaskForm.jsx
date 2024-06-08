import React, { useState } from 'react';
import axios from 'axios';
import { FaPlus } from "react-icons/fa";

const TaskForm = ({ onTaskAdded }) => {
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (label.length > 20) {
            alert("Label should be less than 20 characters.");
            return;
        }

        if (description.length > 100) {
            alert("Description should be less than 50 characters.");
            return;
        }

        const response = await axios.post('http://localhost:8080/api/tasks/create', {
            label,
            description,
            dueDate,
            completed: false,
        });
        onTaskAdded(response.data);
        setLabel('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <div className='flex flex-col w-[20%] gap-5'>
            <input
                type="text"
                placeholder="Label"
                className="text-lg rounded-lg p-1 pl-2 outline-none placeholder:text-[#CEBEA4] bg-[#1e1e1e] text-[#CEBEA4]"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
             
            />
            <input
                type="text"
                placeholder="Description"
                className="text-lg rounded-lg p-1 pl-2 outline-none placeholder:text-[#CEBEA4] bg-[#1e1e1e] text-[#CEBEA4]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
               
            />
            <input
                type="date"
                className="text-lg rounded-lg p-1 pl-2 outline-none placeholder:text-[#CEBEA4] bg-[#1e1e1e] text-[#CEBEA4]"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <div className='flex justify-center'>
                <button type="submit" className="bg-[#ff5631] rounded-full w-16 h-16 flex items-center justify-center"><FaPlus className='text-4xl'/></button>
            </div>
           
            </div>
            
        </form>
    );
};

export default TaskForm;
