import React, { useEffect, useRef, useState } from 'react'
import TaskItem from '../../components/TaskItem';
import AddTask from '../../components/AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';

const Tasks = () => {
    const [tasksData, SetTasks] = useState(null);
    const [task, SetTask] = useState(null);
    const [tasksLength, SetTaskslength] = useState(null);

    const [taskLabel, SettaskLabel] = useState("");
    const [taskDesc, SettaskDesc] = useState("");
    const [taskState, SettaskState] = useState("");

    const taskContainer = useRef(null);
    const taskOverlay = useRef(null);
    const AddBtn = useRef(null);
    const RemoveBtn = useRef(null);
    const UpdateBtn = useRef(null);

    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }

        if (!localStorage.getItem('tasks')) {
            localStorage.setItem('tasks', '[]')
        }
        SetTasks(JSON.parse(localStorage.getItem('tasks')));
    }, [tasksLength, taskState, task])

    const showtask = (task) => {
        if (task) {
            SettaskLabel("Update");
            SettaskDesc(task.desc);
            SetTask(task);
            AddBtn.current.style.display = "none";
            RemoveBtn.current.style.display = "block";
            UpdateBtn.current.style.display = "block";
        }

        else {
            SettaskLabel("Enter");
            SettaskDesc("");
            UpdateBtn.current.style.display = "none";
            RemoveBtn.current.style.display = "none";
            AddBtn.current.style.display = "block";
        }

        taskOverlay.current.style.zIndex = 1;
        taskOverlay.current.style.transition = 'all ease-out 2s';
        taskContainer.current.style.bottom = "0%";
        taskContainer.current.style.transition = 'all ease-out 0.6s';
    }

    const ChangeTaskState = (inptask) => {
        tasksData.find((task) => task.id === inptask.id).checked = !inptask.checked;
        localStorage.setItem('tasks', JSON.stringify(tasksData));
        SetTask(inptask);
    }

    let timer;

    const TouchStart = (task) => {
        if (!timer) {
            // A timeout function for adding long touch functionality
            timer = setTimeout(() => {
                showtask(task);
            }, 250)
        }
    };

    const TouchEnd = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    return (
        <>
            <div className="container flex flex-col justify-center items-center w-10/12 mx-auto mt-12">
                {!(tasksData === [] || tasksData === null) ? (tasksData.map((task) => {
                    return (

                        <TaskItem
                            task={task}
                            key={task.id}
                            TouchStart={TouchStart}
                            TouchEnd={TouchEnd}
                            ChangeTaskState={ChangeTaskState}
                        />
                    )
                })) : (<></>)}
            </div>

            <button onClick={() => showtask()} className='btn-add cursor-default bg-gradient-to-b from-blue-600 to-blue-500  text-4xl text-white w-12 h-12 rounded-full flex justify-center items-center fixed bottom-28 right-7'>
                <FontAwesomeIcon icon="plus" />
            </button>

            <AddTask
                tasks={tasksData}
                inpTask={task}
                SetTask={SetTask}
                Settaskslength={SetTaskslength}
                containerRef={taskContainer}
                overlayRef={taskOverlay}
                tasklabel={taskLabel}
                taskDesc={taskDesc}
                SettaskDesc={SettaskDesc}

                AddBtnRef={AddBtn}
                RemoveBtnRef={RemoveBtn}
                UpdateBtnRef={UpdateBtn}
            />
        </>
    )
};

export default Tasks;