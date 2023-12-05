import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';
import Header from './components/Navbar/NavBar';
import LogementFiche from './pages/LogementFiche.jsx';
import Error from './pages/Error.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/logement' element={<LogementFiche />} />
                <Route path="/404" element={<Error/>} />
            </Routes>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
