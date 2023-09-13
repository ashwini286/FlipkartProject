import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import TopOffer from '../../../assets/images/top-offer.jpeg'
import Fashion from '../../../assets/images/fashion.jpeg'
import Mobiles from '../../../assets/images/phone.jpeg'
import Electronic from '../../../assets/images/electronic.jpeg'
import './CategorySection.scss'
import { Link } from 'react-router-dom'

const CategorySection = () => {
    return (
        <>
            <div className="category-section">
                <Container fluid>
                    <Row>
                        <Col className='category-box col-sm-3 col-6'>
                            <div className="category-img">
                                <img src={TopOffer} alt="Top Offer" />
                            </div>
                            <Link>Top Offer</Link>
                        </Col>
                        <Col className='category-box col-sm-3 col-6'>
                            <div className="category-img">
                                <img src={Fashion} alt="Fashion" />
                            </div>
                            <Link>Fashion</Link>
                        </Col>
                        <Col className='category-box col-sm-3 col-6'>
                            <div className="category-img">
                                <img src={Mobiles} alt="Mobiles" />
                            </div>
                            <Link>Mobiles</Link>
                        </Col>
                        <Col className='category-box col-sm-3 col-6'>
                            <div className="category-img">
                                <img src={Electronic} alt="Electronic" />
                            </div>
                            <Link>Electronic</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CategorySection
