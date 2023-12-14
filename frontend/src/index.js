import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import LogementFiche from './pages/LogementFiche.jsx';
import Error from './pages/Error.jsx';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LogementFiche" element={<LogementFiche />} />
                <Route path="/About" element={<About />} />
                <Route path="/Error" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)

