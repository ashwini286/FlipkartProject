import React, { useEffect, useState } from 'react'
import './SamGalaxyProductSelect.scss'
import BlueIphone from '../../../../../assets/images/product-details/iphone-pro-blue.jpg'
import MidnightIphone from '../../../../../assets/images/product-details/iphone-all.jpg'
import PurpleIphone from '../../../../../assets/images/product-details/iphone-pro-putple.jpg'
import StarLightIphone from '../../../../../assets/images/product-details/iphone-pro-yellow.jpg'
import RedIphone from '../../../../../assets/images/product-details/red-iphone.jpeg'
import Assured from '../../../../../assets/images/product-details/plue-fassured.png'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const SamGalaxyProductSelect = () => {

    const [minutes, setMinutes] = useState(16);
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        let timer = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer); // Timer reached 00:00, stops the timer
                alert("Time is over")
            } else {
                if (seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <>
            <div className="product-select">
                <Container>
                    {/* <Row className="select-color">
                        <Col className="subtitle col-12"><h3>Select Color</h3></Col>
                        <Col className="select-color-list col-12">
                            <div className='small-img'>
                                <Link>
                                    <img src={BlueIphone} alt="Iphone" width={100} />
                                    <h4>Blue</h4>

                                </Link>                         </div>
                            <div className='small-img'>
                                <Link to="/midnight-iphone-product-details">
                                    <img src={MidnightIphone} alt="Iphone" width={100} />
                                    <h4>Midnight</h4>
                                </Link>
                            </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={PurpleIphone} alt="Iphone" width={100} />
                                    <h4>Purple</h4>

                                </Link>                           </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={MidnightIphone} alt="Iphone" width={100} />
                                    <h4>Red</h4>

                                </Link>                        </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={StarLightIphone} alt="Iphone" width={100} />
                                    <h4>Star Night</h4>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="select-color">
                        <Col className="subtitle col-12"><h3>Select Storage</h3></Col>
                        <Col className='select-color-list'>
                            <div className='small-img'>
                                <Link>
                                    <h4 className='my-2'>128GB</h4>
                                </Link>
                            </div>
                            <div className='small-img'>
                                <Link>
                                    <h4 className='my-2'>256GB</h4>
                                </Link>
                            </div>
                            <div className='small-img'>
                                <Link>
                                    <h4 className='my-2'>512GB</h4>
                                </Link>
                            </div>

                        </Col>
                    </Row> */}
                    <Row className='product-des'>
                        <Col >
                            <div className='card'>
                                <div class="product-title"> Samsung Galaxy S22 U...  Burgundy 128GB</div>
                                <img src={Assured} alt="Assured" className='my-2' width={100} />
                                <p class="text-success des">
                                    <b>2% off</b>
                                    <del class="text-dark"> ₹ 82000</del>
                                    <span class="text-dark"> ₹ 1592</span>
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div class="timer text-center">
                        <p>Offer Ends In </p>
                        <div class="countdown" id="countdown">{`${minutes.toString().padStart(2, '0')}min ${seconds.toString().padStart(2, '0')}sec`}</div>
                    </div>
                </Container>
                <div className="card"></div>
            </div>
        </>
    )
}

export default SamGalaxyProductSelect
