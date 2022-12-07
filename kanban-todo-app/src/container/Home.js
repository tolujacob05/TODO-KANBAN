import React from 'react';
import '../css/Home.css'
import Modal from '@material-ui/core/Modal';
import Popup2 from '../Modals/Popup2';

const Home = () => {
    // Function to handle second Popup
    const [open1, setOpen1] = React.useState(false);

    const toggleClose = () => {
        setOpen1(false);
    };

    const toggleOpen = () => {
        setOpen1(true);
    };

    return (
        <>
            <div className='kanban'>
                <h3>Platform Launch</h3>
                <div className='add' onClick={toggleOpen}>
                    <h4>+Add New Task</h4>
                </div>
                <Modal
                    onClose={toggleClose}
                    open={open1}
                >
                    <Popup2 />
                </Modal>
            </div>
        </>
    )
}

export default Home;