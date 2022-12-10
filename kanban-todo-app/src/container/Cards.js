import React from 'react';
import '../css/Cards.css';

const First = () => {
    return (
        <> 
            <div>
                <main className='container'>
                    {/* TODO */}
                    <div className='first'>
                        <div className='todo'>
                            <div className='yey'></div>
                            <h5>TODO</h5>
                        </div>
                        {/*<input className='input' type='text' placeholder='my name is'/>*/}
                        <div className='holder'></div>
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
        </>
    )
}

export default First;