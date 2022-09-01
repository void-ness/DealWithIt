import React, { useEffect, useRef, useState } from 'react'
import TaskItem from '../../components/TaskItem';
import AddTask from '../../components/AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';

const Tasks = () => {
    const [tasksData, SetTasks] = useState(null);
    const [tasksLength, SetTaskslength] = useState(null);
    const taskContainer = useRef(null);
    const taskOverlay = useRef(null);

    useEffect(() => {
        if (!localStorage.getItem('tasks')) {
            localStorage.setItem('tasks', '[]')
        }
        SetTasks(JSON.parse(localStorage.getItem('tasks')));
    }, [tasksLength])

    const showAddtask = (e) => {
        e.preventDefault();
        taskOverlay.current.style.zIndex = 1;
        taskOverlay.current.style.transition = 'all ease-out 2s';
        taskContainer.current.style.bottom = "0%";
        taskContainer.current.style.transition = 'all ease-out 0.6s';
    }

    return (
        <>
            <div className="container flex flex-col justify-center items-center w-10/12 mx-auto mt-12">
                {!(tasksData === [] || tasksData === null) ? (tasksData.map((task) => {
                    return (
                        <TaskItem key={task.id} desc={task.desc} />
                    )
                })) : (<></>)}
            </div>

            <button onClick={showAddtask} className='btn-add cursor-default bg-gradient-to-b from-blue-600 to-blue-500  text-4xl text-white w-12 h-12 rounded-full flex justify-center items-center fixed bottom-28 right-7'>
                <FontAwesomeIcon icon="plus" />
            </button>

            <AddTask tasks={tasksData} Settaskslength={SetTaskslength} containerRef={taskContainer} overlayRef={taskOverlay} />
        </>
    )
};

export default Tasks;