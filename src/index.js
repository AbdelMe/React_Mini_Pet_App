import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Animaleri/Home';
import Nav from './Animaleri/Nav';
// import Header from './Animaleri/components/Header';
import Adopt from './Animaleri/components/Adopt';
import Buy from './Animaleri/components/Buy';
import Search from './Animaleri/components/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            {/* <Route path='/Header' element={<Header></Header>}></Route> */}
        </Routes>
        <Routes>
        <Route path='/adopt' element={<Adopt></Adopt>}></Route>
        <Route path='/buy' element={<Buy></Buy>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        </Routes>
    </BrowserRouter>
);