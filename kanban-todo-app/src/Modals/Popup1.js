import React, { useState } from 'react';
import '../css/Popup1.css';
import { FaTrash } from 'react-icons/fa';

const Popup1 = () => {
    return (
        <>
            <div className='box'>
                <div className='pop-box'>
                    <div className='board'>
                        <h1>Add New Board</h1>
                    </div>
                    <div className='grey'>
                        <div className='name'>
                            <h6>Board Name</h6>
                            <input 
                                className='part' 
                                type="text" 
                                placeholder="e.g Web Design" 
                            />
                        </div>
                        <div className='columns'>
                            <h6>Board Columns</h6>
                            <form>
                                <div className='trash'>
                                    <input 
                                        className='type' 
                                        type="text" 
                                        name="subtasks" 
                                        placeholder="e.g Make Coffee" 
                                    />
                                    <div className='fa'>
                                        <FaTrash style={{ color: "orangered", fontSize: "1rem"}}/>
                                    </div>
                                </div> 
                                <div className='trash'>
                                    <input 
                                        className='type' 
                                        type="text"
                                        name="subtasks" 
                                        placeholder="e.g Make Coffee" 
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
                        <div className='new'>
                            <h4>Create New Board</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup1;