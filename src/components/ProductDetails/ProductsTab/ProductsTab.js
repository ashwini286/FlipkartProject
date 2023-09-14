import React, { useRef, useState } from 'react'
import './ProductsTab.scss'
import { Col, Container, Row } from 'reactstrap'
import Slider from 'react-slick';
import BlueIphone from '../../../assets/images/product-details/61BGE6iu4AL._SL1500.jpg'
import Midnight from '../../../assets/images/product-details/711JE_dD1KL._SL1500.jpg'
import Purple from '../../../assets/images/product-details/61YSNhAb00L._SL1500.jpg'
import StarLight from '../../../assets/images/product-details/71emcsxsRPL._SL1500.jpg'
import Heart from '../../../assets/images/product-details/love.webp'
import Share from '../../../assets/images/product-details/share.webp'

const ProductsTab = () => {

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
                                    ref={(slider1) => setNav1(slider1)}
                                >
                                    <div className='big-img-slider'>
                                        <img src={BlueIphone} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={Midnight} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={Purple} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={Midnight} alt="Iphone" height={350} width={"100%"} />
                                    </div>
                                    <div className='big-img-slider'>
                                        <img src={StarLight} alt="Iphone" height={350} width={"100%"} />
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
                                        <img src={BlueIphone} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={Midnight} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={Purple} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={Midnight} alt="Iphone" width={100} />
                                    </div>
                                    <div className='small-img'>
                                        <img src={StarLight} alt="Iphone" width={100} />
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

export default ProductsTab
