import React from 'react'
import { Helmet } from 'react-helmet'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'reactstrap'
import BlueIphoneProductDet from '../../../components/pages/Iphone/BlueIphoneProductDetails/BlueIphoneProductDet/BlueIphoneProductDet';
import BlueIphoneProductSelect from '../../../components/pages/Iphone/BlueIphoneProductDetails/BlueIphoneProductSelect/BlueIphoneProductSelect';
import BlueIphoneProductsTab from '../../../components/pages/Iphone/BlueIphoneProductDetails/BlueIphoneProductsTab/BlueIphoneProductsTab';
import Footer from '../../../components/common/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';

const BlueIphoneProductDetails = () => {

    const navigate = useNavigate()

  return (
    <>
      <div className="product-details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
      </Helmet>
      <Header
        LeftIcon={<Button onClick={()=> navigate(-1)}  className='back-arrow' ><FaArrowLeftLong /></Button>}
      />
      <BlueIphoneProductsTab />
      <BlueIphoneProductSelect />
      <BlueIphoneProductDet />
      <Footer
      AddLink="/blue-iphone-delivery-address"
      BuyLink="/blue-iphone-delivery-address"
       />
      </div>
    </>
  )
}

export default BlueIphoneProductDetails
