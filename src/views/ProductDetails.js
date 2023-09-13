import React from 'react'
import Header from '../components/common/Header/Header'
import ProductsTab from '../components/ProductDetails/ProductsTab/ProductsTab'
import ProductSelect from '../components/ProductDetails/ProductSelect/ProductSelect'
import ProductDet from '../components/ProductDetails/ProductDet/ProductDet'
import Footer from '../components/common/Footer/Footer'

const ProductDetails = () => {
  return (
    <>
      <Header />
      <ProductsTab />
      <ProductSelect />
      <ProductDet />
      <Footer />
    </>
  )
}

export default ProductDetails
