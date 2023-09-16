import React from 'react'
import './DipPurpleIphoneProductDet.scss'
import Replacement from '../../../../../assets/images/product-details/replace.png'
import Nocash from '../../../../../assets/images/product-details/no-cash.jpeg'
import Assured from '../../../../../assets/images/product-details/plue-fassured.png'
import WonderFull from '../../../../../assets/images/product-details/wonderfull.png'
import Ahuge from '../../../../../assets/images/product-details/huge.png'
import Water from '../../../../../assets/images/product-details/water.png'
import Crash from '../../../../../assets/images/product-details/crash.png'
import { Col, Container, Row } from 'reactstrap'

const DipPurpleIphoneProductDet = () => {
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
                        <img src={WonderFull} alt="WonderFull" />
                        <img src={Ahuge} alt="Ahuge" />
                        <img src={Water} alt="Water" />
                        <img src={Crash} alt="Crash" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default DipPurpleIphoneProductDet
