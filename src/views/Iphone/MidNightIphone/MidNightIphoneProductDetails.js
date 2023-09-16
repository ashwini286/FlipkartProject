import React from 'react'
import { Helmet } from 'react-helmet'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'reactstrap'
import MidNightIphoneProductDet from '../../../components/pages/Iphone/MidNightIphoneProductDetails/MidNightIphoneProductDet/MidNightIphoneProductDet';
import MidNightIphoneProductSelect from '../../../components/pages/Iphone/MidNightIphoneProductDetails/MidNightIphoneProductSelect/MidNightIphoneProductSelect';
import MidNightIphoneProductsTab from '../../../components/pages/Iphone/MidNightIphoneProductDetails/MidNightIphoneProductsTab/MidNightIphoneProductsTab';
import Footer from '../../../components/common/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';

const MidNightIphoneProductDetails = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="product-details">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
        </Helmet>
        <Header
          LeftIcon={<Button onClick={() => navigate(-1)} className='back-arrow' ><FaArrowLeftLong /></Button>}
        />
        <MidNightIphoneProductsTab />
        <MidNightIphoneProductSelect />
        <MidNightIphoneProductDet />
        <Footer
          AddLink="/midnight-iphone-delivery-address"
          BuyLink="/midnight-iphone-delivery-address"
        />
      </div>
    </>
  )
}

export default MidNightIphoneProductDetails
