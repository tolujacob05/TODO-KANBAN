import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Popup1 from '../Modals/Popup1' 
/*import {
    Menu,
    Sidebar,
    useProSidebar,
} from 'react-pro-sidebar'*/
import {FaEye, FaEyeSlash, FaTable} from 'react-icons/fa'
import logo from '../img/logo.jpg'
import '../css/SideNav.css';

const SideNav = () => {
    // Function to handle Popup
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // Function to handle second Popup
   /* const [open1, setOpen1] = React.useState(false);

    const toggleClose = ( ) => {
        setOpen1(false);
    };

    const toggleOpen = () => {
        setOpen1(true);
    };*/

    // Function to handle to handle SideBar
    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    // Function to handle Sisebar collapse
   /* const { collapseSidebar } = useProSidebar();*/

    // Function to save Todo
    const [sideNav, setSideNav] = useState([])

    const saveTodo = (todoObj) => {
        let tempTodo = sideNav
        tempTodo.push(todoObj)
        localStorage.setItem('sideNav', JSON.stringify(tempTodo))
        setSideNav(tempTodo)
        setOpen(false)
    }
    
    // To fetch the todos in the Local Storage
    useEffect (() => {
        let arr = localStorage.getItem('sideNav')
    
        if(arr){
            let obj = JSON.parse(arr)
            setSideNav(obj)
        }
    }, [])

    const [show, setShow ] = useState(true)

    return (
        <>
            <div className="large">
                <div className="aside">
                {/*<Sidebar>*/}
                    <div className="side">
                        <div className="image">
                            <img src={logo} alt="" />
                            <div className="closeMenu" onClick={() => setShow(!show)}>
                                <p onClick={menuIconClick}>
                                    {menuCollapse ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                    Hide Sidebar
                                </p>
                            </div>
                        </div>
                        {/*{
                            show?
                            <div className="Aimage">
                                <img src={logo} alt="" />
                                {/*<div className="closeMenu" onClick={() => setShow(!show)}>
                                    <p>
                                        {menuCollapse ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                        Hide Sidebar
                                    </p>
                                </div>
                            </div>:null
                        }*/}
                    </div>
                    <div className="obj">
                        <h3>{sideNav && sideNav.map((obj) => <li>{obj.Name}</li>)}</h3>
                    </div>
                    {/*<Menu>*/}
                        <div className="button" onClick={handleOpen}>
                            <FaTable />
                            <h4>+Create New Board</h4>
                        </div>
                        <Modal
                            onClose={handleClose}
                            open={open}
                        >
                            <Popup1 save = {saveTodo} />
                        </Modal>
                    {/*</Menu>*/}
                    
                    
                {/*</Sidebar>*/}
               {/* <div className='kanban'>
                    <h3>{todoObj?.Name}</h3>
                    <div className='add' onClick={toggleOpen}>
                        <h4>+Add New Task</h4>
                    </div>
                    <Modal
                        onClose={toggleClose}
                        open={open1}
                    >
                        <Popup2 save = {saveTask} />
                    </Modal>
                </div>*/}
                </div>
            </div>
            
        </>
    )
}

export default SideNav;