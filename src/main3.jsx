import React from 'react'
import ReactDOM from 'react-dom/client'
import App3 from './App3.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router reloadDocument='true'>
            <App3 /> 
        </Router>
    </React.StrictMode>,
)