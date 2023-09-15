import React from 'react'
import './BannerSection.scss'
import Slider from "react-slick";
import Banner1 from '../../../../assets/images/banner1.png'
import Banner2 from '../../../../assets/images/banner2.png'
import Banner3 from '../../../../assets/images/banner3.png'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const BannerSection = () => {

    const settings = {
        dots: false,
        // arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <FaAngleRight />,
      prevArrow: <FaAngleLeft />
    };
    return (
        <>
            <div className="banner-section">
                <Slider {...settings}>
                    <div>
                        <img src={Banner1} alt="Banner" />
                    </div>
                    <div>
                    <img src={Banner2} alt="Banner" />
                    </div>
                    <div>
                    <img src={Banner3} alt="Banner" />
                    </div>
                   
                </Slider>
            </div>
        </>
    )
}

export default BannerSection
