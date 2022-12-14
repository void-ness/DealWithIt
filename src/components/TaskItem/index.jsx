import React from 'react'
import './style.css';

const TaskItem = ({ TouchStart, TouchEnd, ChangeTaskState, task }) => {
    return (
        <>
            <div className="taskitem w-full flex items-start my-4">
                <input type="checkbox" className={`cursor-default border-4 border-solid w-8 after:w-2 h-8 after:h-4 relative after:absolute m-0 mr-3 ${task.checked ? "after:block" : "after:hidden"} `} onClick={() => ChangeTaskState(task)} name="checkbox" />
                <label className={`text-xl font-light w-60 leading-6 cursor-default relative ${task.checked ? "line-through text-slate-400" : "text-black no-underline"}`} onMouseDown={() => TouchStart(task)} onMouseUp={TouchEnd} onTouchStart={() => TouchStart(task)} onTouchEnd={TouchEnd}>
                    {task.desc}
                    <div className="labeloverlay absolute w-60 h-full top-0 right-0"></div>
                </label>
            </div>
        </>
    )
}

export default TaskItem;