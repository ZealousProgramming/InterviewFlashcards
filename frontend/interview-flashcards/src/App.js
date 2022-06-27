import './App.css';

// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home.js';
import Quiz from './Pages/Quiz.js';
import ErrorPage from './Pages/ErrorPage.js';

function App() {

    return (
        <Router>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/quiz"> Quiz </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/quiz" element={<Quiz/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
            <div>
                Footer
            </div>
        </Router>
    );
}

export default App;
