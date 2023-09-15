import React from 'react'
import Iphone from '../../../assets/images/homepage/iphone-blue.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import { Button } from 'reactstrap';

const BlueIphoneOrderSummary = () => {

    const navigate = useNavigate()

    const location = useLocation();
    const params = new URLSearchParams(location.search);
  
    // Retrieve and display input values from URL parameters
    const name = params.get('name');
    const mobileNumber = params.get('mobile_number');
    const pin = params.get('pin');
    const city = params.get('city');
    const state = params.get('state');
    const flat = params.get('flat');
    const area = params.get('area');
  
  
    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    console.log('PIN:', pin);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Flat/House:', flat);
    console.log('Area:', area);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
            </Helmet>
            <div className="order-summary">
                <div className="container-fluid p-3 header-container ">
                    <div className="row header align-items-center">
                        <div className="col-1">
                        <Button onClick={()=> navigate(-1)}  className='back-arrow' ><FaArrowLeftLong /></Button>
                        </div>
                        <div className="col-10 ms-4 ms-sm-0">
                            <div className="menu-logo">
                                <h4 className="mb-0 mt-1 ms-2">Order Summary</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <h3>Delivered to:</h3>
                            <div class="address-div mt-2">
                                <h4 class="customer-name">{name}</h4>
                                <div class="mb-2 customer-address"> {flat}, {area}, {city}, {state}, {pin}</div>
                                <div class="customer-contact">{mobileNumber}</div>
                            </div>

                        </div>

                    </div>
                    <div class="card mt-3 px-3  mb-2">
                        <ul class="list-group list-group-flush" id="deals">
                            <li class="list-group-item px-0" data-timer="2000">
                                <div class="flex recommended-product">
                                    <img src={Iphone} alt='Iphone'
                                        id="item_image" width="200px" />
                                    <div class="description">
                                        <div class="product-title mb-1" id="product-title">Apple iPhone 14 Plus</div>
                                        <div class="product-detail mb-1" id="product-detail">Blue</div>
                                        <img loading="eager" class="_396cs4 _2amPTt _3qGmMb"
                                            alt="APPLE iPhone 14 ((PRODUCT)RED, 128 GB)"
                                            src={Iphone}
                                            width="77px" />
                                    </div>
                                </div>
                                <div class="flex recommended-product mt-3">
                                    <div class="description">
                                        <div class="price d-flex">
                                            <div class="timer qty mx-4">
                                                Qty: 1
                                            </div>
                                            <span class="discount text-success" id="discount" >2% off</span>
                                            &nbsp;&nbsp;
                                            <span><del> ₹ 69000</del></span>
                                            &nbsp;&nbsp;
                                            <span class="selling_price" id="selling_price">₹ 1592</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="card mt-3 p-3 mb-3" id="price-detail">
                        <h3>Price Details</h3>
                        <div class="price-detail-div mt-2">
                            <div class="my-3 d-flex justify-content-between">
                                <span class="title">Price (1 item)</span>
                                <span class="text-success">₹ 1592</span>
                            </div>
                            <div class="my-3 d-flex justify-content-between">
                                <span class="title">Discount</span>
                                <span class="data discount-amt text-success">-₹ 0</span>
                            </div>
                            <div class="my-3 d-flex justify-content-between">
                                <span class="title">Delivery Charges</span>
                                <span class="data text-success">FREE Delivery </span>
                            </div>
                            <div class="my-3 pt-3 d-flex justify-content-between total">
                                <span class="title">Total Amount </span>
                                <span class="data selling_price">₹ 1592</span>
                            </div>
                            <div class="product-price-list mt-3 pt-3 saved-div">
                                <span class="text-success">You will save <span class="discount-amt">-₹1592</span> on this
                                    order</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid foot-summary mb-3" >
                    <div className="card">
                        <div class="row p-2">
                            <div class="col">
                                <del>₹69000</del>
                                <br />
                                <span class="data selling_price"> ₹1592</span>
                            </div>
                            <div class="col">
                                <form >
                                    <input type="hidden" name="slug" id="slug" />
                                    <input type="hidden" name="address" id="address" value="Array" />
                                    <button onClick={()=> navigate("/blue-iphone-payment-details")} type="submit" class="btn bg-warning" >Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlueIphoneOrderSummary
