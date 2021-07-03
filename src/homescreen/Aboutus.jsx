import React from "react";
import "./home.css";
import martin from "../assets/martin.jpg";
import arva from "../assets/arva.jpg";
import peka from "../assets/peka.JPG";
import bryan from "../assets/bryan.png";
import hanvey from "../assets/hanvey.jpg";

const Aboutus = () => {
  return (
    <>
      <div className="container center mb60" id="about">
        <div className="row">
          <h1 className="bold">Meet Our Team</h1>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <img src={martin} className="foto" />
            <h6 className="mainfeature ">Martin Hizkia Parasi</h6>
          </div>
          <div className="col s12 m4">
            {" "}
            <img src={arva} className="foto" />
            <h6 className="mainfeature ">Arvalinno</h6>
          </div>
          <div className="col s12 m4">
            {" "}
            <img src={bryan} className="foto" />
            <h6 className="mainfeature ">Bryan Oliver</h6>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            {" "}
            <img src={peka} className="foto" />
            <h6 className="mainfeature ">Philipus Renaldy</h6>
          </div>
          <div className="col s12 m6">
            {" "}
            <img src={hanvey} className="foto" />
            <h6 className="mainfeature ">Hanvey Xavero</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
