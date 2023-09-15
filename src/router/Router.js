import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../views/HomePage';
import ProductDetails from '../views/ProductDetails';
import DeliveryAddress from '../views/DeliveryAddress';
import OrderSummary from '../views/OrderSummary';
import PaymentDetails from '../views/PaymentDetails';
import BlueIphoneProductDetails from '../views/Iphone/BlueIphone/BlueIphoneProductDetails';
import BlueIphoneDeliveryAddress from '../views/Iphone/BlueIphone/BlueIphoneDeliveryAddress';
import BlueIphonePaymentDetails from '../views/Iphone/BlueIphone/BlueIphonePaymentDetails';
import BlueIphoneOrderSummary from '../views/Iphone/BlueIphone/BlueIphoneOrderSummary';
import ExitPage from '../views/ExitPage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/thank-you' element={<ExitPage />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/blue-iphone-product-details' element={<BlueIphoneProductDetails />} />
          <Route path='/blue-iphone-delivery-address' element={<BlueIphoneDeliveryAddress />} />
          <Route path='/blue-iphone-order-summary' element={<BlueIphoneOrderSummary />} />
          <Route path='/blue-iphone-payment-details' element={<BlueIphonePaymentDetails />} />
          <Route path='/delivery-address' element={<DeliveryAddress />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/payment-details' element={<PaymentDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
