import React from "react";
import "./Home.css";
import Leftsection from "../Components/Leftsection";
export const Home = () => {
  return (
    <div className="HomeSection">
      <div className="homeSearchSection">
        <div className="searchSec1">
          <div className="sSec1">
            <input type="search" name="searchname" id="placeSrch" placeholder="Search upto 3 localities or landmarks" />
            <div className="sSecbtn">
              <button className="locationButton">Location</button>
              <button className="metroButton">Metro</button>
            </div>
          </div>
          <div className="sSec2">
            <button className="searchButton">Search</button>
          </div>
        </div>
        <div className="searchSec2">
          <div className="listbtn">
            <span>List</span>
          </div>
          <div className="mapbtn">
            <span>Map</span>
          </div>
        </div>
      </div>


      <div className="homeSecondSection">
        <div className="leftSection">
          <Leftsection />
        </div>


        <div className="rightSection">
          rightMost
        </div>
      </div>
    </div>
  );
};
