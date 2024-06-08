import React from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const handleToggleCompleted = async () => {
        const response = await axios.put(`http://localhost:8080/api/tasks/${task.id}`, {
            ...task,
            completed: !task.completed,
        });
        onTaskUpdated(response.data);
    };

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/api/tasks/${task.id}`);
        onTaskDeleted(task.id);
    };

    return (
        <div className="w-[50%] bg-[#1e1e1e] m-2 p-4 rounded-xl flex gap-5 justify-between  items-center shadow-2xl" >
             <div className="task-actions w-[10%] flex justify-center">
                {task.completed?
                <div className='w-5 h-5 rounded-full bg-green-400 cursor-pointer' onChange={handleToggleCompleted}>

                </div>:
                <div className='w-5 h-5 rounded-full border-2 border-[#ff5631] cursor-pointer' onChange={handleToggleCompleted}>

                </div>}
            </div>
            <div className="task-content flex gap-16 text-[#cebea4] text-lg  w-[80%] justify-around items-center">
                <div className=" w-[20%] flex justify-center font-medium capitalize">{task.label}</div>
                <div className=" w-[60%] flex justify-center capitalize">{task.description}</div>
                <div className=" w-[20%] flex justify-center task-date">{task.dueDate}</div>
            </div>
            <button className="btn btn-danger flex justify-center w-[10%]" onClick={handleDelete}><MdDelete className='text-[#cebea4] hover:text-[#ff5631] text-2xl' /></button>
        </div>
    );
};

export default TaskItem;
