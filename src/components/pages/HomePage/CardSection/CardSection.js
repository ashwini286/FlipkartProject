import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './CardSection.scss'
import { Link } from 'react-router-dom';
import Assured from '../../../../assets/images/assured.png'
import { CardData } from '../../../../Data/CardData';

const CardSection = () => {

    const [data, setData] = useState(CardData)

    const [minutes, setMinutes] = useState(10);
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


    // function startCountdown(duration, display) {
    //     var timer = duration, minutes, seconds;
    //     setInterval(function () {
    //         minutes = parseInt(timer / 60, 10);
    //         seconds = parseInt(timer % 60, 10);

    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;

    //         display.textContent = minutes + ":" + seconds;

    //         if (--timer < 0) {
    //             timer = 0;
    //             // You can add any code you want to execute when the countdown reaches 0 here.
    //         }
    //     }, 1000);
    // }

    // window.onload = function () {
    //     var countdownDisplay = document.getElementById("countdown");
    //     var countdownDuration = 10 * 60 + 30; // 4 minutes 30 seconds in seconds
    //     startCountdown(countdownDuration, countdownDisplay);
    // };

    return (
        <>
            <div className="card-section">
                <div className="top-section">
                    <Container>
                        <Row>
                            <Col className='deal-section'>
                                <h6>Deals of the Day</h6>
                                <div class="countdown" id="countdown">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
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
                            {
                                data.map((curElem) => {
                                    const { id, mobile_image, title, link, discount, del_price, price, assured_image, free_delivery } = curElem
                                    return (
                                        <Col className='col-sm-6 col-12 mb-4' key={id}>
                                            <div className="card bg-light">
                                                <div className="card-body text-center">
                                                    <div className="card-img">
                                                        <Link to={link}>
                                                            {mobile_image}
                                                            <p className='sub-title'>{title}</p>
                                                        </Link>
                                                    </div>
                                                    <div className="card-text">
                                                        <p><span className='text-success'>{discount} </span> <del>{del_price}</del></p>
                                                        <div className="assured"><b>{price}</b> {assured_image}</div>
                                                        <div className="delivery-text">{free_delivery}</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default CardSection
