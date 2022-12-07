import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Popup1 from '../Modals/Popup1' 
import {
    Menu,
    Sidebar,
    useProSidebar,
} from 'react-pro-sidebar'
import {FaEye, FaEyeSlash, FaTable} from 'react-icons/fa'
import logo from '../img/logo.jpg'
import '../css/SideNav.css';
import { v4 as uuidv4 } from "uuid"

const SideNav = () => {
    // Function to handle Popup
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // Function to handle to handle SideBar
    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    // Function to handle Sisebar collapse
    const { collapseSidebar } = useProSidebar();

    // Function to handle add todo
    const [todos, setTodos] = useState(getInitialTodos())

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }
    
    // getting stored items
    function getInitialTodos() {
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }
    
    // storing todos items
    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    return (
        <>
            <div className="large">
                <Sidebar>
                    
                        <div className="image">
                            <img src={logo} alt="" />
                        </div>
                        <Menu>
                            
                            
                                <div className="button" onClick={handleOpen}>
                                    <FaTable />
                                    <h4>+Create New Board</h4>
                                </div>
                            
                            
                            <Modal
                                onClose={handleClose}
                                open={open}
                            >
                                <Popup1 addTodoProps={addTodoItem} />
                            </Modal>
                        </Menu>
                        
                        <div className="closeMenu" onClick={menuIconClick}>
                            <p>
                                {menuCollapse ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                                Hide Sidebar
                            </p>
                        </div>
                </Sidebar>
            </div>
            
        </>
    )
}

export default SideNav;