import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import QuizPage from './pages/QuizPage.js';
import ErrorPage from './pages/ErrorPage.js';
import {TopicContext} from "./contexts/TopicContext";

function App() {
    const [topicFilter, setTopicFilter] = useState({});

    return (
        <Router>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/quiz"> Quiz </Link>
            </nav>
            <TopicContext.Provider value={{topicFilter, setTopicFilter}}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/quiz" element={<QuizPage/>} />
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </TopicContext.Provider>
            <div>
                Footer
            </div>
        </Router>
    );
}

export default App;
