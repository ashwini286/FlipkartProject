import React from 'react'
import './Header.scss'
import Logo from '../../../assets/images/logo.png'
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = ({
  LeftIcon
}) => {
  return (
    <>
      <div className="header-section">
        <Container fluid>
          <Row>
            <Col className='header'>
              <div className="bar"><div className="icon">
                {LeftIcon}
              </div></div>
              <div className="logo"><Link to="/"><img src={Logo} alt="Logo" width={100} /></Link></div>
              <div className="shopping-cart"><div className="icon"><AiOutlineShoppingCart /></div></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="search-items">
                <FormGroup className='form-group'>
                  <Input
                    id="SearchItem"
                    name="SearchItem"
                    placeholder="Search for Products, Brands and More..."
                    type="text"
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Header
