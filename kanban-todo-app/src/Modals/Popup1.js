import React, { useState } from 'react';
import '../css/Popup1.css';
import { FaTrash } from 'react-icons/fa';

const Popup1 = ( {save} ) => {
    const [todoTitle, setTodoTitle] = useState('');
    const [column, setColumn] = useState('');
    const [column2, setColumn2] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'todoTitle') {
            setTodoTitle(value)
        }else {setColumn(value)
        }
    }

    const handleChange1 = (e) => {
        const {name, value} = e.target

        if(name === 'todoTitle') {
            setTodoTitle(value)
        }else {setColumn2(value)
        }
    }

    const handleSave = () => {
        let todoObj = {}
        todoObj['Name'] = todoTitle
        todoObj['column'] = column
        todoObj['column2'] = column2
        save(todoObj)
    }
    return (
        <>
            <div className='show'>
                <div className='show-box'>
                    <div>
                        <h1>Add New Board</h1>
                    </div>
                    <div className='grey'>
                        <div className='name'>
                            <h6>Board Name</h6>
                            <input 
                                className='part' 
                                type="text" 
                                placeholder="e.g Web Design" 
                                value={todoTitle}
                                onChange = {handleChange}
                                name = 'todoTitle'
                            />
                        </div>
                        <div className='columns'>
                            <h6>Board Columns</h6>
                            <form>
                                <div className='trash'>
                                    <input 
                                        className='type' 
                                        type="text"  
                                        placeholder="e.g Make Coffee" 
                                        value={column}
                                        onChange = {handleChange}
                                        name = 'column'
                                    />
                                    <div className='fa'>
                                        <FaTrash style={{ color: "orangered", fontSize: "1rem"}}/>
                                    </div>
                                </div> 
                                <div className='trash'>
                                    <input 
                                        className='type' 
                                        type="text"
                                        placeholder="e.g Make Coffee"
                                        value={column2}
                                        onChange = {handleChange1}
                                        name = 'column2'
                                    />
                                    <div className='fa'>
                                        <FaTrash style={{ color: "orangered", fontSize: "1rem"}}/>
                                    </div>
                                </div>
                            </form>                 
                        </div>
                        <div className='create'>
                            <h4>+Add New Column</h4>
                        </div>
                        <div className='new' onClick={handleSave}>
                            <h4>Create New Board</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup1;