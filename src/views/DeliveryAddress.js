import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'reactstrap'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from 'react-helmet';

const DeliveryAddress = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!</title>
            </Helmet>
            <div classNameName="delivery-sec">
                <div className="container-fluid p-3 header-container">
                    <div className="row header align-items-center">
                        <div className="col-1">
                        <Button onClick={()=> navigate(-1)}  className='back-arrow' ><FaArrowLeftLong /></Button>
                        </div>
                        <div className="col-10 ms-4 ms-sm-0">
                            <div className="menu-logo">
                                <h4 className="mb-0 mt-1 ms-2">Add delivery address</h4>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container-fluid">
                    <div className="card">
                        <Form>
                            <Input type="hidden" name="slug" id="slug" />
                            <div className="card-body">
                                <div className="form-floating mb-3">
                                    <Input className="form-control" type="text" name="name" id="name" placeholder="Full name"
                                        required fdprocessedid="xdkj1" />
                                    <label for="floatingInput">Full Name (Required)*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input className="form-control" type="text" id="number" name="mobile_number"
                                        placeholder="Mobile number" required fdprocessedid="zhp73r" />
                                    <label for="floatingInput">Mobile number (Required)*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input className="form-control" type="text" id="pin" name="pin" placeholder="PIN code" required
                                        fdprocessedid="p220bra" />
                                    <label for="floatingInput">Pincode (Required)*</label>
                                </div>
                                <div className="d-flex city-parent mb-3">
                                    <div className="col-sm-6 col-12 form-floating mb-3 mb-sm-0">
                                        <Input className="form-control" type="text" id="city" city="city" placeholder="Town/City"
                                            required fdprocessedid="r90kw9" />
                                        <label for="floatingInput">City (Required)*</label>
                                    </div>
                                    <div className="col-sm-6 col-12 form-floating dropdown">
                                        <select className="form-select" id="state" name="state" required fdprocessedid="vo8ko">
                                            <option value="AP">Andhra Pradesh</option>
                                            <option value="AR">Arunachal Pradesh</option>
                                            <option value="AS">Assam</option>
                                            <option value="BR">Bihar</option>
                                            <option value="CT">Chhattisgarh</option>
                                            <option value="GA">Goa</option>
                                            <option value="GJ">Gujarat</option>
                                            <option value="HR">Haryana</option>
                                            <option value="HP">Himachal Pradesh</option>
                                            <option value="JK">Jammu &amp; Kashmir</option>
                                            <option value="JH">Jharkhand</option>
                                            <option value="KA">Karnataka</option>
                                            <option value="KL">Kerala</option>
                                            <option value="MP">Madhya Pradesh</option>
                                            <option value="MH">Maharashtra</option>
                                            <option value="MN">Manipur</option>
                                            <option value="ML">Meghalaya</option>
                                            <option value="MZ">Mizoram</option>
                                            <option value="NL">Nagaland</option>
                                            <option value="OR">Odisha</option>
                                            <option value="PB">Punjab</option>
                                            <option value="RJ">Rajasthan</option>
                                            <option value="SK">Sikkim</option>
                                            <option value="TN">Tamil Nadu</option>
                                            <option value="TS">Telangana</option>
                                            <option value="TR">Tripura</option>
                                            <option value="UK">Uttarakhand</option>
                                            <option value="UP">Uttar Pradesh</option>
                                            <option value="WB">West Bengal</option>
                                            <option value="AN">Andaman &amp; Nicobar</option>
                                            <option value="CH">Chandigarh</option>
                                            <option value="DN">Dadra and Nagar Haveli</option>
                                            <option value="DD">Daman &amp; Diu</option>
                                            <option value="DL">Delhi</option>
                                            <option value="LD">Lakshadweep</option>
                                            <option value="PY">Puducherry</option>
                                        </select>
                                        <label for="floatingInput">State (Required)*
                                        </label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input className="form-control" type="text" id="flat" name="flat"
                                        placeholder="Flat, House.no, Building, Company" fdprocessedid="12fjat" />
                                    <label for="floatingInput">House No., Building Name (Required)*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input className="form-control" type="text" id="area" name="area"
                                        placeholder="Area, Colony, Street, Sector, Village" fdprocessedid="6p4gqk" />
                                    <label for="floatingInput">Road name, Area, Colony (Required)*</label>
                                </div>
                                <div className="card-footer px-0">
                                    <button className="btn btn p-3 text-white rounded save-address w-100" type="submit"
                                        fdprocessedid="nign4">Save Address</button>
                                </div>

                            </div>
                        </Form>
                    </div>






                </div>
            </div>
        </>
    )
}

export default DeliveryAddress
