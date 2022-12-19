import React, { useState, useEffect } from 'react';
import '../css/Home.css'
import Modal from '@material-ui/core/Modal';
import Popup2 from '../Modals/Popup2';
import Cards from './Cards.js';

const Home = () => {
    // Function to handle second Popup
    const [open1, setOpen1] = useState(false);

    const toggleClose = ( ) => {
        setOpen1(false);
    };

    const toggleOpen = () => {
        setOpen1(true);
    };

    const [home, setHome] = useState([])

    const saveTask = (taskObj) => {
        let tempTask = home
        tempTask.push(taskObj)
        localStorage.setItem('home', JSON.stringify(tempTask))
        setHome(tempTask)
        setOpen1(false)
    }
    
    // To fetch the todos in the Local Storage
    useEffect (() => {
        let arr = localStorage.getItem('home')
    
        if(arr){
            let obj = JSON.parse(arr)
            setHome(obj)
        }
    }, [])

    //To update Todo
    const updateTaskArray = (obj, index) => {
        let tempTask = home
        tempTask[index] = obj
        localStorage.setItem('home', JSON.stringify(tempTask))
        setHome(tempTask)
        window.location.reload( )
    }

    return (
        <>
            <div className='kanban'>
                <h3></h3>
                <div className='add' onClick={toggleOpen}>
                    <h4>+Add New Task</h4>
                </div>
                <Modal
                    onClose={toggleClose}
                    open={open1}
                >
                    <Popup2 save = {saveTask} />
                </Modal>
            </div>
            <div>
               {home && home.map((obj, index) => <Cards taskObj = {obj} index = {index} updateTaskArray = {updateTaskArray} />)} 
            </div>
        </>
    )
}

export default Home;