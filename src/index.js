import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Animaleri/Home';
import Home1 from './Animaleri/components/Home';
import Nav from './Animaleri/Nav';
// import Header from './Animaleri/components/Header';
import Adopt from './Animaleri/components/PetDetails/Adopt';
import Buy from './Animaleri/components/PetDetails/Buy';
import Search from './Animaleri/components/PetDetails/Search';
import PetOwner from './Animaleri/components/PetOwner';
// import About from './Animaleri/components/About';
import Food from './Animaleri/components/PetDetails/Food';
import Disease from './Animaleri/components/PetDetails/Disease';
import Veterinarian from './Animaleri/components/PetDetails/Veterinarian';
import Advices from './Animaleri/components/PetDetails/Advices';
import { Provider } from 'react-redux';
import StoreToolkit from './Animaleri/ReduxToolkit/Store';
import AboutPage from './Animaleri/components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={StoreToolkit}>
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home1></Home1>}></Route>
                <Route path='/PetDetails' element={<Home></Home>}></Route>
                <Route path='/PetOwner' element={<PetOwner></PetOwner>}></Route>
                <Route path='/About' element={<AboutPage></AboutPage>}></Route>
            </Routes>

            <Routes>
                <Route path='/adopt' element={<Adopt></Adopt>}></Route>
                <Route path='/buy' element={<Buy></Buy>}></Route>
                <Route path='/search' element={<Search></Search>}></Route>
                <Route path='/food' element={<Food></Food>}></Route>
                <Route path='/disease' element={<Disease></Disease>}></Route>
                <Route path='/vet' element={<Veterinarian></Veterinarian>}></Route>
                <Route path='/advices' element={<Advices></Advices>}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);