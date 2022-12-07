import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar'

ReactDOM.render(
    <React.StrictMode>
        <ProSidebarProvider>
            <App />
        </ProSidebarProvider>
    </React.StrictMode>,
    document.getElementById('root')
)