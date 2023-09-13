import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../views/HomePage';
import ProductDetails from '../views/ProductDetails';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product-details' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
