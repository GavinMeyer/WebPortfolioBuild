import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Entrance from './Entrance';
import Projects from './Projects';
import Resume from './Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/home" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();