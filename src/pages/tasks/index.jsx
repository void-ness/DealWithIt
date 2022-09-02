import React, { useEffect, useRef, useState } from 'react'
import TaskItem from '../../components/TaskItem';
import AddTask from '../../components/AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';

const Tasks = () => {
    const [tasksData, SetTasks] = useState(null);
    const [tasksLength, SetTaskslength] = useState(null);
    const [taskDesc, SettaskDesc] = useState("");
    const [taskLabel, SettaskLabel] = useState("");
    const [taskId, SettaskId] = useState("");
    const [taskState, SettaskState] = useState("");

    const taskContainer = useRef(null);
    const taskOverlay = useRef(null);

    const taskInput = useRef(null);

    const AddBtn = useRef(null);
    const RemoveBtn = useRef(null);
    const UpdateBtn = useRef(null);

    useEffect(() => {
        if (!localStorage.getItem('tasks')) {
            localStorage.setItem('tasks', '[]')
        }
        SetTasks(JSON.parse(localStorage.getItem('tasks')));
    }, [tasksLength, taskState])

    const showtask = (task) => {
        if (task) {
            SettaskLabel("Update");
            SettaskDesc(task.desc);
            SettaskId(task.id);
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

    const ChangeTaskState = ({ id, checked }) => {
        tasksData.find((task) => task.id === id).checked = !checked;
        localStorage.setItem('tasks', JSON.stringify(tasksData));
        SetTaskslength(tasksData.length);
        SettaskState(checked);
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
                            key={task.id}
                            id={task.id}
                            desc={task.desc}
                            checked={task.checked}
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
                Settaskslength={SetTaskslength}
                containerRef={taskContainer}
                overlayRef={taskOverlay}
                inputRef={taskInput}
                taskDesc={taskDesc}
                SettaskDesc={SettaskDesc}
                taskId={taskId}
                tasklabel={taskLabel}
                AddBtnRef={AddBtn}
                RemoveBtnRef={RemoveBtn}
                UpdateBtnRef={UpdateBtn}
            />
        </>
    )
};

export default Tasks;