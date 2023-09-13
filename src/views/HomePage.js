import React from 'react'
import BannerSection from '../components/HomePage/BannerSection/BannerSection'
import Header from '../components/common/Header/Header'
import CategorySection from '../components/HomePage/CategorySection/CategorySection'
import CardSection from '../components/HomePage/CardSection/CardSection'

const HomePage = () => {
    return (
        <>
            <Header />
            <CategorySection />
            <BannerSection />
            <CardSection />
        </>
    )
}

export default HomePage
