import React, { useRef, useState } from 'react'
import './SamGalaxyProductsTab.scss'
import { Col, Container, Row } from 'reactstrap'
import Slider from 'react-slick';
import SamsungMobile from '../../../../../assets/images/product-details/samsung.png'
import MidnightIphone from '../../../../../assets/images/product-details/iphone-all.jpg'
import PurpleIphone from '../../../../../assets/images/product-details/iphone-pro-putple.jpg'
import StarLightIphone from '../../../../../assets/images/product-details/iphone-pro-yellow.jpg'
import Heart from '../../../../../assets/images/product-details/love.webp'
import Share from '../../../../../assets/images/product-details/share.webp'

const SamGalaxyProductsTab = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    var smallslider = {
        // dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 1,
        // slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="products-tab">
                <Container>
                <div className="product-icons">
                    <div className="icon"><img src={Heart} alt="Heart" width={30} height={30} /></div>
                    <div className="icon"><img src={Share} alt="Share" width={30} height={30} /></div>
                </div>
                    <div className="products-slider">
                        <Row className='justify-content-center topslider'>
                            <Col className='col-lg-4 col-md-6 col-sm-6'>
                                <Slider
                                    className="mainSlider"
                                    asNavFor={nav2}
                                    dots={true}
                                    arrows={false}
                                    ref={(slider1) => setNav1(slider1)}
                                >
                                    <div className='big-img-slider'>
                                        <img src={SamsungMobile} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    
                                    
                                </Slider>
                            </Col>
                        </Row>
                        <Row className='btmslider'>
                            <Col>
                                <Slider
                                    {...smallslider}
                                    className=""
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    <div className='small-img'>
                                        <img src={SamsungMobile} alt="Iphone" width={100} />
                                    </div>
                                    
                                </Slider>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SamGalaxyProductsTab
