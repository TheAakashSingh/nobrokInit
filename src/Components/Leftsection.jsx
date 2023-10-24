import React from 'react'
import './Leftsection.css'
const Leftsection = () => {
    return (
        <div className='Leftsection'>
            <div className="lMainBox">
                <div className="lmainHeader">
                    <span>Filters</span>
                    <span>Premium Filters</span>
                </div>
                <div className="lmainScroll">
                    <span>Reset</span>
                    <div className="lmainType">
                        <div className="lmainTypeList">
                            <span>BHK Type</span>
                            <div className="t1">
                                <span>1 RK</span>
                                <span>1 BHK</span>
                                <span>2 BHK</span>
                                <span>3 BHK</span>
                                <span>4 BHK</span>
                                <span>4+ BHK</span>
                            </div>
                        </div>
                        <span className="lmainrange">Rent Range: ₹ 0 to ₹ 5 Lacs</span>
                        <div className="rangeScrollBar"></div>
                        <div className="lmainAvailable">
                            <span>Availability</span>
                            <div className="t2">
                                <label htmlFor=""><input type="radio" name="availability" value="Immediate" id="" />Immediate </label>
                                <label htmlFor=""><input type="radio" name="availability" value="Within 15 Days" id="" />Within 15 Days </label>
                                <label htmlFor=""><input type="radio" name="availability" value="Within 30 Days" id="" />Within 30 Days </label>
                                <label htmlFor=""><input type="radio" name="availability" value="After 30 Days" id="" />After 30 Days </label>

                            </div>
                        </div>
                        <div className="lmainPreffered">
                            <span>Preferred Tenants</span>
                            <div className="t2">
                                <label htmlFor=""><input type="checkbox" name="preferred" value="Family" id="" />Family</label>
                                <label htmlFor=""><input type="checkbox" name="preferred" value="Company" id="" />Company</label>
                                <label htmlFor=""><input type="checkbox" name="preferred" value="Bachelor Male" id="" />Bachelor Male</label>
                                <label htmlFor=""><input type="checkbox" name="preferred" value="Bachelor Female" id="" />Bachelor Female</label>

                            </div>
                        </div>
                        <div className="lmainPropertyType">
                            <span>Property Type</span>
                            <div className="t2">
                                <label htmlFor=""><input type="checkbox" name="propertytype" value="Apartment" id="" />Apartment</label>
                                <label htmlFor=""><input type="checkbox" name="propertytype" value="Independent House/Villa" id="" />Independent House/Villa</label>
                                <label htmlFor=""><input type="checkbox" name="propertytype" value="Gated Community Villa" id="" />Gated Community Villa</label>
                            </div>
                        </div>
                        <div className="lmainFurnishing">
                            <span>Furnishing</span>
                            <div className="t2">
                                <label htmlFor=""><input type="checkbox" name="furnishing" value="Full" id="" />Full</label>
                                <label htmlFor=""><input type="checkbox" name="furnishing" value="Semi" id="" />Semi</label>
                                <label htmlFor=""><input type="checkbox" name="furnishing" value="None" id="" />None</label>
                            </div>
                        </div>
                        <div className="lmainParking">
                            <span>Parking</span>
                            <div className="t2">
                                <label htmlFor=""><input type="checkbox" name="parking" value="2 Wheeler" id="" />2 Wheeler</label>
                                <label htmlFor=""> <input type="checkbox" name="parking" value="4 Wheeler" id="" />4 Wheeler</label>
                                <label htmlFor=""> <input type="checkbox" name="parking" value="Show Only Lease Properties" id="" />Show Only Lease Properties</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftsection