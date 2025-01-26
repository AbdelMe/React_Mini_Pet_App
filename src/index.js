import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Animaleri/Home';
import Home1 from './Animaleri/components/Home';
import Nav from './Animaleri/Nav';
// import Header from './Animaleri/components/Header';
import Adopt from './Animaleri/components/Adopt';
import Buy from './Animaleri/components/Buy';
import Search from './Animaleri/components/Search';
import PetOwner from './Animaleri/components/PetOwner';
import About from './Animaleri/components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path='/PetDetails' element={<Home></Home>}></Route>
            <Route path='/Home' element={<Home1></Home1>}></Route>
            <Route path='/PetOwner' element={<PetOwner></PetOwner>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            {/* <Route path='/Header' element={<Header></Header>}></Route> */}
        </Routes>
        <Routes>
        <Route path='/adopt' element={<Adopt></Adopt>}></Route>
        <Route path='/buy' element={<Buy></Buy>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        </Routes>
    </BrowserRouter>
);