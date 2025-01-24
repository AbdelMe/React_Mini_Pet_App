import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Animaleri/Home';
import Nav from './Animaleri/Nav';
import Header from './Animaleri/components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Header' element={<Header></Header>}></Route>
        </Routes>
    </BrowserRouter>
);