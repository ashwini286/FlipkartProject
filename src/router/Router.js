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

import MidNightIphoneProductDetails from '../views/Iphone/MidNightIphone/MidNightIphoneProductDetails';
import MidNightIphoneDeliveryAddress from '../views/Iphone/MidNightIphone/MidNightIphoneDeliveryAddress';
import MidNightIphonePaymentDetails from '../views/Iphone/MidNightIphone/MidNightIphonePaymentDetails';
import MidNightIphoneOrderSummary from '../views/Iphone/MidNightIphone/MidNightIphoneOrderSummary';

import DipPurpleIphoneDeliveryAddress from '../views/Iphone/DipPurpleIphone/DipPurpleIphoneDeliveryAddress';
import DipPurpleIphonePaymentDetails from '../views/Iphone/DipPurpleIphone/DipPurpleIphonePaymentDetails';
import DipPurpleIphoneProductDetails from '../views/Iphone/DipPurpleIphone/DipPurpleIphoneProductDetails';
import DipPurpleIphoneOrderSummary from '../views/Iphone/DipPurpleIphone/DipPurpleIphoneOrderSummary'

import SamGalaxyDeliveryAddress from '../views/Iphone/SamGalaxy/SamGalaxyDeliveryAddress';
import SamGalaxyPaymentDetails from '../views/Iphone/SamGalaxy/SamGalaxyPaymentDetails';
import SamGalaxyProductDetails from '../views/Iphone/SamGalaxy/SamGalaxyProductDetails';
import SamGalaxyOrderSummary from '../views/Iphone/SamGalaxy/SamGalaxyOrderSummary'


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

          <Route path='/midnight-iphone-product-details' element={<MidNightIphoneProductDetails />} />
          <Route path='/midnight-iphone-delivery-address' element={<MidNightIphoneDeliveryAddress />} />
          <Route path='/midnight-iphone-order-summary' element={<MidNightIphoneOrderSummary />} />
          <Route path='/midnight-iphone-payment-details' element={<MidNightIphonePaymentDetails />} />

          <Route path='/deeppurple-iphone-product-details' element={<DipPurpleIphoneProductDetails />} />
          <Route path='/deeppurple-iphone-delivery-address' element={<DipPurpleIphoneDeliveryAddress />} />
          <Route path='/deeppurple-iphone-order-summary' element={<DipPurpleIphoneOrderSummary />} />
          <Route path='/deeppurple-iphone-payment-details' element={<DipPurpleIphonePaymentDetails />} />

          <Route path='/samsung-mobile-product-details' element={<SamGalaxyProductDetails />} />
          <Route path='/samsung-mobile-delivery-address' element={<SamGalaxyDeliveryAddress />} />
          <Route path='/samsung-mobile-order-summary' element={<SamGalaxyOrderSummary />} />
          <Route path='/samsung-mobile-payment-details' element={<SamGalaxyPaymentDetails />} />

          <Route path='/delivery-address' element={<DeliveryAddress />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/payment-details' element={<PaymentDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
