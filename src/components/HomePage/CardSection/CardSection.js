import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './CardSection.scss'
import { Link } from 'react-router-dom';
import Iphone14_128gb from '../../../assets/images/homepage/61BGE6iu4AL._SL1500.jpg'
import Assured from '../../../assets/images/assured.png'

const CardSection = () => {


    function startCountdown(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = 0;
                // You can add any code you want to execute when the countdown reaches 0 here.
            }
        }, 1000);
    }

    window.onload = function () {
        var countdownDisplay = document.getElementById("countdown");
        var countdownDuration = 10 * 60 + 30; // 4 minutes 30 seconds in seconds
        startCountdown(countdownDuration, countdownDisplay);
    };

    return (
        <>
            <div className="card-section">
                <div className="top-section">
                    <Container>
                        <Row>
                            <Col className='deal-section'>
                                <h6>Deals of the Day</h6>
                                <div class="countdown" id="countdown">00:00</div>
                            </Col>
                            <Col className='sale-section'>
                                <h6>SALE IS LIVE</h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bottom-section">
                    <Container>
                        <Row>
                            <Col className='col-6'>
                            <div className="card bg-light">
                                    <div className="card-body text-center">
                                        <div className="card-img">
                                            <Link>
                                                <img src={Iphone14_128gb} alt="Iphone" width={110} height={110} />
                                                <p className='sub-title'>Apple iPhone 14 Plus Blue 128GB</p>
                                            </Link>
                                        </div>
                                        <div className="card-text">
                                            <p><span className='text-success'>2% Off </span> <del>₹69000</del></p>
                                            <div className="assured"><b>₹ 1592 </b><img src={Assured} alt="Assured" width={77} /></div>
                                            <div className="delivery-text">Free Delivery in Two Days</div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col className='col-6'>
                                <div className="card bg-light">
                                    <div className="card-body text-center">
                                        <div className="card-img">
                                            <Link>
                                                <img src={Iphone14_128gb} alt="Iphone" width={110} height={110} />
                                                <p className='sub-title'>Apple iPhone 14 Plus Blue 128GB</p>
                                            </Link>
                                        </div>
                                        <div className="card-text">
                                            <p><span className='text-success'>2% Off </span> <del>₹69000</del></p>
                                            <div className="assured"><b>₹ 1592 </b><img src={Assured} alt="Assured" width={77} /></div>
                                            <div className="delivery-text">Free Delivery in Two Days</div>
                                        </div>

                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default CardSection
