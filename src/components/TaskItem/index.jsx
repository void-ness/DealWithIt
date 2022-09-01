import React from 'react'
import './style.css';

const TaskItem = ({ desc }) => {
    return (
        <>
            <div className="taskitem w-full flex items-start my-4">
                <input type="checkbox" className='cursor-default border-4 border-solid w-8 after:w-2 h-8 after:h-4 relative after:absolute m-0 mr-3' name="checkbox" />
                <label className='text-xl font-light w-60 leading-6'>
                    {desc}
                </label>
            </div>
        </>
    )
}

export default TaskItem;