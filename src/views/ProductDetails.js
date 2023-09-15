import React from 'react'
import Header from '../components/common/Header/Header'
import ProductsTab from '../components/pages/ProductDetails/ProductsTab/ProductsTab'
import ProductSelect from '../components/pages/ProductDetails/ProductSelect/ProductSelect'
import ProductDet from '../components/pages/ProductDetails/ProductDet/ProductDet'
import Footer from '../components/common/Footer/Footer'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const ProductDetails = () => {
  const navigate = useNavigate()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
      </Helmet>
      <Header
        LeftIcon={<Button onClick={()=> navigate(-1)}  className='back-arrow' ><FaArrowLeftLong /></Button>}
      />
      <ProductsTab />
      <ProductSelect />
      <ProductDet />
      <Footer />
    </>
  )
}

export default ProductDetails
