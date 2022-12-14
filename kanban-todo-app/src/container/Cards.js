import React, { useState, useEffect } from 'react';
import '../css/Cards.css';
import { FaTrash } from 'react-icons/fa';
import Pop1 from '../Modals/Pop1';
import Pop2 from '../Modals/Pop2';
import Modal from '@material-ui/core/Modal';
/*import { Modal } from 'reactstrap'*/

const First = ({taskObj, index, updateTaskArray}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subTask, setSubTask] = useState([
        {subtask: ''},
        {subtask: ''},
    ]);

    /*const [subTask2, setSubTask2] = useState('');*/

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'title') {
            setTitle(value)
        }else {setDescription(value)  
        }  
    }

    const handleSubTaskAdd = () => {
        setSubTask([...subTask, {subtask: ''}])
    }

    const handleSubTaskRemove = (index) => {
        const task = [...subTask];
        task.splice(index, 1)
        setSubTask(task)
    };

    const handleSubTaskChange = (e, index) => {
        const {name, value} = e.target
        const task = [...subTask];
        task[index][name] = value;
        setSubTask(task)
    }

    // To view Todo
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    /*const handleClose = () => {
        setOpen(false);
        console.log('poke me');
    }*/

    // To edit Todo
    const [isView, setIsView] = useState(false);

    const togglePopup2 = () => {
        setIsView(!isView);
    };

    useEffect (() => {
        setTitle(taskObj.Name)
        setDescription(taskObj.description)
        setSubTask(taskObj.subtask)
    }, [])

    const updateTask = (obj) => {
        updateTaskArray(obj, index)
    }


    return (
        <> 
            <div>
                <main className='container'>
                    {/* TODO */}
                    <div className='first'>
                        <div className='todo'>
                            <div className='yey'></div>
                            <h5>TODO</h5>
                            <div></div>
                        </div>
                        {/*<input className='input' type='text' placeholder='my name is'/>*/}
                        <div className='holder' onClick={togglePopup}>
                            <div>
                                <h4>{taskObj.Name}</h4>
                            </div>

                           {isOpen && (
                                <Pop1
                                    content={
                                        <>
                                            <button onClick={togglePopup2} updateTask = {updateTask}>Edit</button>
                                            <button>Delete</button>
                                            <div>
                                                <h4>{taskObj.Name}</h4>
                                            </div>
                                            <h4>
                                                {taskObj.description}
                                            </h4>
                                            
                                            {subTask.map((singleSubtask, index) => (
                                                <ul key={index}>
                                                {singleSubtask.subtask && <li>{singleSubtask.subtask}</li>}
                                                </ul>
                                            ))}
                                        </>
                                    }
                                    handleClose={togglePopup}
                                />
                            )}
                        </div>
                    </div>

                    {/* DOING */}
                    <div className='second'>
                        <div className='doing'>
                            <div className='yes'></div>
                            <h5>DOING</h5>
                        </div>
                        {/*<input className='input' type='text' placeholder='my name is'/>*/}
                        <div className='holder'></div>
                    </div>

                    {/* dONE */}
                    <div className='third'>
                        <div className='done'>
                            <div className='ok'></div>
                            <h5>DONE</h5>
                        </div>
                        {/*<input className='input' type='text' placeholder='my name is'/>*/}
                        <div className='holder'></div>
                    </div>
                </main>
            </div> 

            {isView && (
                <Pop2 
                    content= {
                        <>
                            <div  className='whole'> 
                                <div className='task'>
                                    <div className='do'>
                                        <h1> Add New Task </h1>
                                    </div>
                                    <div className='title'>
                                        <h6>Title</h6>
                                        <input 
                                            className='dif' 
                                            type="text" 
                                            name='title'
                                            placeholder="e.g Take coffee break" 
                                            value={title}
                                            onChange = {handleChange}
                                        />
                                    </div>
                                    <div className='description'>
                                        <h6>Description</h6>
                                        <textarea 
                                            className='describe' 
                                            rows='5'
                                            name='description'
                                            value={description}
                                            onChange = {handleChange}
                                            placeholder= 'e.g Take coffee break'
                                        >
                                        </textarea>
                                    </div>
                                    <div className='sub-task'>
                                        <h6>Subtasks</h6>
                                        {subTask.map((singleSubtask, index) => (
                                            <div key={index} className='trash'>
                                                <input className='diff' 
                                                    type="text" 
                                                    name="subtask" 
                                                    placeholder="e.g Make Coffee" 
                                                    id='subtask'
                                                    value={singleSubtask.subtask}
                                                    onChange = {(e) => handleSubTaskChange(e, index)}
                                                />
                                                <div className='icon' onClick={() => handleSubTaskRemove(index)}>
                                                    {subTask.length > 2 &&
                                                        <FaTrash style={{ color: "orangered", fontSize: "1rem"}}/>
                                                    }
                                                </div>
                                                {subTask.length - 1 === index && subTask.length < 15 && 
                                                    <button className='sub' onClick={handleSubTaskAdd}>
                                                        <span>+Add New Subtask</span>
                                                    </button>
                                                }
                                            </div>
                                        ))}
                                    </div>
                        
                                    {/*<div className='status'>
                                        <h6>Status</h6>
                                        <select className='select'>
                                            <option>
                                                Todo
                                            </option>
                                            <option>
                                                Doing
                                            </option>
                                            <option>
                                                Done
                                            </option>
                                        </select>
                                    </div>*/}
                                    <div className='work'>
                                        <h5>Create Task</h5>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    handleClose={togglePopup2}
                />
            )}
        </>
    )
}

export default First;