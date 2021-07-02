/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./home.css";
import phoneMockup from "../assets/phone.png";

const Landing = () => {
  return (
    <>
      <div className="landingbg">
        <div>
          <div id="home">
            <div class="mtcontainer"></div>
            <div class="topnav">
              <div class="logokiri">
                {/* <img src={s2} alt="" width="40px" height="40px" /> */}
              </div>
              {/*  ------*/}
              <div class="midnav">
                <a>Home</a>
                <a>About</a>
                <a>Services</a>
              </div>
              {/* ------- */}
              <div class="rightnav">{/* <button>Contact Us</button> */}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="container ">
            <div className="row">
              <div className="col s12 m7 valign-wrapper">
                <div className="row">
                  <div className="col">
                    <h1 className=" pt500 mainTitle">
                      Sevva “For the best <br/>home advice”
                    </h1>
                  </div>
                  <div className="col">
                    <a class="waves-effect waves-light btn">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m5">
                <img src={phoneMockup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
