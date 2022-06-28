import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage.js';
import QuizPage from './Pages/QuizPage.js';
import ErrorPage from './Pages/ErrorPage.js';
import {TopicContext} from "./Contexts/TopicContext";

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
