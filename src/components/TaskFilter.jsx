import React from 'react';


const options = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' }
];

const TaskFilter = ({ onFilterChange }) => {
    return (
        <select 
        name=""
        id="" 
        onChange={onFilterChange}
        className=' cursor-pointer outline-none rounded-lg p-1 w-[100%] bg-[#1e1e1e]
          border-2 border-[#CEBEA4] focus:ring-[#FF5631] focus:border-[#FF5631] '>
            {options.map((item,index)=>{
                return <option className='' value={item.value}>{item.label}</option>
            })}
        </select>
    );
};

export default TaskFilter;
