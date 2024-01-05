import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import { Searched } from './Searched';
import Recipe from './Recipe';
import NotFound from '../components/NotFound';

const Pages = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />}/>
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </>
  )
}

export default Pages