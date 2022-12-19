import React from 'react';
import SideNav from './SideNav';
import Home from './Home';
import useLocalStorage from 'use-local-storage'
import { BsToggleOff, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'


const App = () => {
    const [ theme, setTheme ] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }
    return(
        <>
            <div className='app' data-theme={theme}>
                <div>
                    <SideNav />
                    <Home />
                </div>
                <div className="theme-toggle">
                    <BsFillSunFill />
                    <BsToggleOff className="i" onClick={switchTheme}/>
                    <BsFillMoonStarsFill />
                </div>
            </div>
        </>
    )
}

export default App;