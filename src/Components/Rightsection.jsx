import React from 'react'
import './Rightsection.css'
const Rightsection = () => {
    return (
        <div className="Rightsection">
            <div className="rightHeadMenu">
                <div className="sortRightmenu">
                    <span>Home/Bangalore/Dena Bank Colony...</span>

                    <div className="sortSelectOption">
                        <label htmlFor="">Sort By:</label>
                        <select name="sort" id="">
                            <option value="NoBrokerRank">NoBrokerRank</option>
                            <option value="Posted By">Posted By</option>
                            <option value="Posted By">Posted By</option>
                            <option value="Posted By">Posted By</option>
                            <option value="Posted By">Posted By</option>
                            <option value="Posted By">Posted By</option>
                        </select>
                    </div>
                </div>
                <div className="sortRightmenu2">
                    <span>21 - Apartments, Flats for Rent in Dena Bank Colony, Bangalore Karnataka Without Brokerage...</span>
                </div>
            </div>

        </div>
    )
}

export default Rightsection