import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <div><h1>Hiiii</h1></div>
 <Router>
 <Navbar/>
 <Routes>
 <Route path="/login" element={<Login/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/register" element={<Register/>}/>
 </Routes>
 </Router>

</div>
);