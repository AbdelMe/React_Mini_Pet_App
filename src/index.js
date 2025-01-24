import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Animaleri/Home';
import Nav from './Animaleri/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
    </BrowserRouter>
);