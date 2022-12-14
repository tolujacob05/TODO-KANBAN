import React, { useState } from 'react';
import '../css/Pop1.css';
import { FaTimes } from 'react-icons/fa';

const Popup2 = ({save}) => {
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

        /*if(name === 'title') {
            setTitle(value)
        }else {
            setSubTask1(value)
        }*/
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

    const handleSave = () => {
        let taskObj = {}
        taskObj['Name'] = title
        taskObj['description'] = description
        taskObj['subtask'] = subTask
        save(taskObj)
    }

   /* const handleChange2 = (e) => {
        const {name, value} = e.target

        if(name === 'title') {
            setTitle(value)
        }else {
            setSubTask2(value)
        }
    }*/

    return (
        <>
            <div  className='popup-box'> 
                <div className='box'>
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
                                        <FaTimes style={{ color: "white", fontSize: "1rem"}}/>
                                        
                                    }
                                </div>
                                {subTask.length - 1 === index && subTask.length < 15 && 
                                    <button className='sub' onClick={handleSubTaskAdd}>
                                        <span>+Add New Subtask</span>
                                    </button>
                                }
                            </div>
                        ))}
                        
                       {/* <div className='trash'>
                            <input 
                                className='diff'
                                type="text" 
                                name="subtask2" 
                                placeholder="e.g Make Coffee" 
                            />
                            <div className='icon'>
                                <FaTrash style={{ color: "orangered", fontSize: "1rem"}}/>
                            </div>
                        </div> */}
                    </div>
                    
                    <div className='status'>
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
                    </div>
                    <div className='work' onClick={handleSave}>
                        <h5>Create Task</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup2;