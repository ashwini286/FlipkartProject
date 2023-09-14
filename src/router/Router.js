import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../views/HomePage';
import ProductDetails from '../views/ProductDetails';
import DeliveryAddress from '../views/DeliveryAddress';
import OrderSummary from '../views/OrderSummary';
import PaymentDetails from '../views/PaymentDetails';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/delivery-address' element={<DeliveryAddress />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/payment-details' element={<PaymentDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
