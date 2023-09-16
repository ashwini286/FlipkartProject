import React from 'react'
import { Helmet } from 'react-helmet'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'reactstrap'
import DipPurpleIphoneProductDet from '../../../components/pages/Iphone/DipPurpleIphoneProductDetails/DipPurpleIphoneProductDet/DipPurpleIphoneProductDet';
import DipPurpleIphoneProductSelect from '../../../components/pages/Iphone/DipPurpleIphoneProductDetails/DipPurpleIphoneProductSelect/DipPurpleIphoneProductSelect';
import DipPurpleIphoneProductsTab from '../../../components/pages/Iphone/DipPurpleIphoneProductDetails/DipPurpleIphoneProductsTab/DipPurpleIphoneProductsTab';
import Footer from '../../../components/common/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';

const DipPurpleIphoneProductDetails = () => {

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
      <DipPurpleIphoneProductsTab />
      <DipPurpleIphoneProductSelect />
      <DipPurpleIphoneProductDet />
      <Footer
      AddLink="/deeppurple-iphone-delivery-address"
      BuyLink="/deeppurple-iphone-delivery-address"
       />
      </div>
    </>
  )
}

export default DipPurpleIphoneProductDetails
