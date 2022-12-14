import './style.css';

const AddTask = ({ tasks, inpTask, Settaskslength, taskDesc, SettaskDesc, tasklabel, containerRef, overlayRef, AddBtnRef, RemoveBtnRef, UpdateBtnRef }) => {

    const AddNewTask = () => {
        if (taskDesc.trim() === "") {
            alert("Please Enter a valid task description");
        }
        else {
            tasks.push({ desc: taskDesc, id: Date.now(), checked: false })
            localStorage.setItem('tasks', JSON.stringify(tasks));
            Settaskslength(tasks.length);
            SettaskDesc("");
            hideAddtask();
        }
    }

    const RemoveTask = () => {
        tasks = tasks.filter((task) => task.id !== inpTask.id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        Settaskslength(tasks.length);
        SettaskDesc("");
        hideAddtask();
    }

    const UpdateTask = () => {
        if (taskDesc === "") {
            alert("Please enter a valid description");
        }
        else {
            tasks.find((task) => task.id === inpTask.id).desc = taskDesc;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            Settaskslength(tasks.length);
            inpTask.desc = taskDesc;
            SettaskDesc("");
            hideAddtask();
        }
    }

    const hideAddtask = () => {
        containerRef.current.style.bottom = '-100%';
        containerRef.current.style.transition = 'all ease-in 0.6s'
        overlayRef.current.style.transition = 'all ease-in 0.1s'
        overlayRef.current.style.zIndex = '-1';
    }

    return (
        <>
            <div ref={containerRef} className="addtaskcontainer w-full h-64 fixed z-10 flex flex-col rounded-t-2xl px-6 pt-9 pb-2">
                <label className='text-white text-xl font-normal pb-3'>{`${tasklabel} Task Details`}</label>
                <input type="text" className='rounded-lg border-0 outline-0 p-2 text-slate-800' value={taskDesc} onChange={(e) => SettaskDesc(e.target.value)} />
                <button ref={AddBtnRef} className='bg-white w-fit px-5 py-1 rounded-full absolute bottom-5' onClick={AddNewTask}>Done</button>
                <button ref={UpdateBtnRef} className='bg-white w-fit px-5 py-1 rounded-full absolute bottom-5 left-5' onClick={() => UpdateTask()}>Update</button>
                <button ref={RemoveBtnRef} className='bg-red-500 text-white w-fit px-5 py-1 rounded-full absolute bottom-5 right-5' onClick={() => RemoveTask()}>Remove</button>
            </div>
            <div ref={overlayRef} onClick={hideAddtask} className="addTaskoverlay bg-white w-screen fixed top-0 left-0" ></div>
        </>
    )
};

export default AddTask;