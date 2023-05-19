import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';


function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence >
            <Routes Location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/Cuisine/:type' element={<Cuisine />} />
                <Route path='/Searched/:search' element={<Searched />} />
                <Route path='/Recipe/:name' element={<Recipe />} />

            </Routes>
        </AnimatePresence>
    )
}

export default Pages