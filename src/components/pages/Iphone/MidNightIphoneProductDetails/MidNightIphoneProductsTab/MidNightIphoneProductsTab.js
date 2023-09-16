import React, { useRef, useState } from 'react'
import './MidNightIphoneProductsTab.scss'
import { Col, Container, Row } from 'reactstrap'
import Slider from 'react-slick';
import BlueIphone from '../../../../../assets/images/product-details/iphone-pro-blue.jpg'
import MidnightIphone from '../../../../../assets/images/product-details/iphone-all.jpg'
import PurpleIphone from '../../../../../assets/images/product-details/iphone-pro-putple.jpg'
import StarLightIphone from '../../../../../assets/images/product-details/iphone-pro-yellow.jpg'
import Heart from '../../../../../assets/images/product-details/love.webp'
import Share from '../../../../../assets/images/product-details/share.webp'

const MidNightIphoneProductsTab = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    var smallslider = {
        // dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 5,
        // slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
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
                                        <img src={MidnightIphone} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={BlueIphone} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={PurpleIphone} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={MidnightIphone} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={StarLightIphone} alt="Iphone" height={350} width={"100%"} />
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
                                    slidesToShow={5}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    <div className='small-img'>
                                        <img src={MidnightIphone} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={BlueIphone} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={PurpleIphone} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={MidnightIphone} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={StarLightIphone} alt="Iphone" width={100} />
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

export default MidNightIphoneProductsTab
