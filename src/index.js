import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultsContextProvider } from './contexts/ResultsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultsContextProvider>
        <Router>
            <App />
        </Router>
    </ResultsContextProvider>

);
