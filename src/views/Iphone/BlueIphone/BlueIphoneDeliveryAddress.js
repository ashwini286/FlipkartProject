import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'reactstrap'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from 'react-helmet';

const BlueIphoneDeliveryAddress = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        mobile_number: '',
        pin: '',
        city: '',
        state: '',
        flat: '',
        area: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Build a URL with query parameters
        const queryParams = new URLSearchParams();
        queryParams.append('name', formData.name);
        queryParams.append('mobile_number', formData.mobile_number);
        queryParams.append('pin', formData.pin);
        queryParams.append('city', formData.city);
        queryParams.append('state', formData.state);
        queryParams.append('flat', formData.flat);
        queryParams.append('area', formData.area);

        // Redirect to another page with the query parameters
        if(formData.name, formData.mobile_number, formData.pin){
            window.location.href = `/blue-iphone-order-summary?${queryParams.toString()}`;
        }
        else{
            alert("Please fill the data")
        }

    };

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
                            <Button onClick={() => navigate(-1)} className='back-arrow' ><FaArrowLeftLong /></Button>
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
                                    <Input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        fdprocessedid="xdkj1" />
                                    <label for="floatingInput">Full Name (Required)*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input
                                        className="form-control"
                                        type="text"
                                        id="number"
                                        name="mobile_number"
                                        placeholder="Mobile number"
                                        required
                                        fdprocessedid="zhp73r"
                                        value={formData.mobile_number}
                                        onChange={handleInputChange}
                                    />
                                    <label for="floatingInput">Mobile number (Required)*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input
                                        className="form-control"
                                        type="text"
                                        id="pin"
                                        name="pin"
                                        placeholder="PIN code"
                                        required
                                        fdprocessedid="p220bra"
                                        value={formData.pin}
                                        onChange={handleInputChange}
                                    />
                                    <label for="floatingInput">Pincode (Required)*</label>
                                </div>
                                <div className="d-flex city-parent mb-3">
                                    <div className="col-sm-6 col-12 form-floating mb-3 mb-sm-0">
                                        <Input
                                            className="form-control"
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Town/City"
                                            required
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                        <label for="floatingInput">City (Required)*</label>
                                    </div>
                                    <div className="col-sm-6 col-12 form-floating dropdown">
                                        <select
                                            className="form-select"
                                            id="state"
                                            name="state"
                                            required
                                            fdprocessedid="vo8ko"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Andaman & Nicobar">Andaman &amp; Nicobar</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                            <option value="Daman & Diu">Daman &amp; Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Puducherry">Puducherry</option>
                                        </select>
                                        <label for="floatingInput">State (Required)*
                                        </label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input
                                        className="form-control"
                                        type="text"
                                        id="flat"
                                        name="flat"
                                        placeholder="Flat, House.no, Building, Company"
                                        fdprocessedid="12fjat"
                                        value={formData.flat}
                                        onChange={handleInputChange}
                                    />
                                    <label for="floatingInput">House No., Building Name (Required)*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Input
                                        className="form-control"
                                        type="text"
                                        id="area"
                                        name="area"
                                        placeholder="Area, Colony, Street, Sector, Village"
                                        fdprocessedid="6p4gqk"
                                        value={formData.area}
                                        onChange={handleInputChange}

                                    />
                                    <label for="floatingInput">Road name, Area, Colony (Required)*</label>
                                </div>
                                <div className="card-footer px-0">
                                    <button onClick={handleFormSubmit} className="btn btn p-3 text-white rounded save-address w-100" type="submit"
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

export default BlueIphoneDeliveryAddress
