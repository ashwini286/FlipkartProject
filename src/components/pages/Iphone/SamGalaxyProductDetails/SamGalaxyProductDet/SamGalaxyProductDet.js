import React from 'react'
import './SamGalaxyProductDet.scss'
import Replacement from '../../../../../assets/images/product-details/replace.png'
import Nocash from '../../../../../assets/images/product-details/no-cash.jpeg'
import Assured from '../../../../../assets/images/product-details/plue-fassured.png'
import Fatest from '../../../../../assets/images/product-details/fatest.jpg'
import Make from '../../../../../assets/images/product-details/make.jpg'
import GoAll from '../../../../../assets/images/product-details/goall.jpg'
import Welcome from '../../../../../assets/images/product-details/welcome.jpg'
import { Col, Container, Row } from 'reactstrap'

const SamGalaxyProductDet = () => {
    return (
        <>
            <div className="product-det">
                <Container>
                    <h4 class="my-3">Product Detail</h4>
                    <div className="card">
                        <Row>
                            <Col className='col-4'>
                                <img class="featured-img mb-3" src={Replacement} alt="Replacement" width={40} height={40}/>
                                <span class="feature-title"> 7 days Replacement </span>
                            </Col>
                            <Col className='col-4'>
                                <img class="featured-img mb-3" src={Nocash} alt="Nocash" width={40} height={40}/>
                                <span class="feature-title"> No Cash On Delivery </span>
                            </Col>
                            <Col className='col-4'>
                                <img class="featured-img mb-3" src={Assured} alt="Assured" width={70} />
                                <span class="feature-title"> 7 Plus (F-Assured)  </span>
                            </Col>
                        </Row>
                    </div>

                    <div className="img-container card">
                        <img src={Welcome} alt="WonderFull" />
                        <img src={GoAll} alt="Ahuge" />
                        <img src={Make} alt="Water" />
                        <img src={Fatest} alt="Crash" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SamGalaxyProductDet
