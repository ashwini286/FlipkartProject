import React from 'react'
import './ProductSelect.scss'
import BlueIphone from '../../../assets/images/product-details/61BGE6iu4AL._SL1500.jpg'
import Midnight from '../../../assets/images/product-details/711JE_dD1KL._SL1500.jpg'
import Purple from '../../../assets/images/product-details/61YSNhAb00L._SL1500.jpg'
import StarLight from '../../../assets/images/product-details/71emcsxsRPL._SL1500.jpg'
import Assured from '../../../assets/images/product-details/plue-fassured.png'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductSelect = () => {
    return (
        <>
            <div className="product-select">
                <Container>
                    <Row className="select-color">
                        <Col className="subtitle col-12"><h3>Select Color</h3></Col>
                        <Col className="select-color-list col-12">
                            <div className='small-img'>
                                <Link>
                                    <img src={BlueIphone} alt="Iphone" width={100} />
                                    <h4>Blue</h4>

                                </Link>                         </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={Midnight} alt="Iphone" width={100} />
                                    <h4>Midnight</h4>
                                </Link>
                            </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={Purple} alt="Iphone" width={100} />
                                    <h4>Purple</h4>

                                </Link>                           </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={Midnight} alt="Iphone" width={100} />
                                    <h4>Red</h4>

                                </Link>                        </div>
                            <div className='small-img'>
                                <Link>
                                    <img src={StarLight} alt="Iphone" width={100} />
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
                    </Row>
                    <Row className='product-des'>
                        <Col >
                            <div className='card'>
                                <div class="product-title"> Apple iPhone 14 Plus Blue  128GB</div>
                                <img src={Assured} alt="Assured" className='my-2' width={100} />
                                <p class="text-success des">
                                    <b>2% off</b>
                                    <del class="text-dark"> ₹ 69000</del>
                                    <span class="text-dark"> ₹ 1592</span>
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div class="timer text-center">
                        <p>Offer Ends In</p>
                    </div>
                </Container>
                <div className="card"></div>
            </div>
        </>
    )
}

export default ProductSelect
