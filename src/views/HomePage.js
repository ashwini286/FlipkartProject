import React from 'react'
import { Helmet } from "react-helmet";
import BannerSection from '../components/pages/HomePage/BannerSection/BannerSection'
import Header from '../components/common/Header/Header'
import CategorySection from '../components/pages/HomePage/CategorySection/CategorySection'
import CardSection from '../components/pages/HomePage/CardSection/CardSection'
import { FaBars } from "react-icons/fa";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
            </Helmet>
            <Header
                LeftIcon=<FaBars />
            />
            <CategorySection />
            <BannerSection />
            <CardSection />
        </>
    )
}

export default HomePage
