/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./home.css";
import phoneMockup from "../assets/phone.png";
import phone2 from "../assets/phone2.png";
import icon1 from "../assets/01.png";
import icon2 from "../assets/02.png";
import icon3 from "../assets/03.png";
import icon4 from "../assets/04.png";
import icon5 from "../assets/05.png";
import icon6 from "../assets/08.png";

function handleClick() {
  const anchor = document.querySelector("#home");
  anchor.scrollIntoView({ behavior: "smooth" });
}
function handleClick1() {
  const anchor = document.querySelector("#service");
  anchor.scrollIntoView({ behavior: "smooth" });
}
function handleClick2() {
  const anchor = document.querySelector("#about");
  anchor.scrollIntoView({ behavior: "smooth" });
}

const Landing = () => {
  return (
    <>
      <div className="landingbg mt100" id="home">
        <div>
          <div id="home">
            <div class="mtcontainer"></div>
            <div class="topnav">
              <div class="logokiri"></div>
              <div class="midnav">
                <a onClick={handleClick}>Home</a>
                <a onClick={handleClick1}>Services</a>
                <a onClick={handleClick2}>About</a>
              </div>
              <div class="rightnav"></div>
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
                      Sevva “For the best <br />
                      home advice”
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

      <div className="container" id="service">
        <div className="row">
          <div className="col s12 m6 l6">
            <img src={phone2} className="phone2" />
          </div>
          <div className="col s12 m6 l6">
            <h2 className="bold">What is Sevva?</h2>
            <p className="whatissevva ">
              Sevva is an android-based application platform and website that
              provides all services to meet the needs of the community with good
              reliability and functionality. Sevva use the marketplace model
              which will fix the problems of various existing systems, to become
              a marketplace-based service platform that can be used easily by
              all people from various cultures and levels. Sevva offers a
              solution to provide an interactive and user-friendly platform that
              can bridge customers and tenants. Customers can choose with
              various service options with multiple tenants that will give the
              ability for Sevva to become cost-effective with safety and
              guarantee to assure quality and experience. With a wide variety of
              businesses, customers can make the application their go-to
              application for all things related to services or service business
              in general. This will give Sevva the ability to provide a broad
              and versatile application that includes many options and services
              for customers.
            </p>
          </div>
        </div>
      </div>

      <div className="container center">
        <div class="row">
          <div class="col s12">
            <h3 className="bold">Our Features</h3>
          </div>
        </div>
        <div class="row">
          <div class="col s6 m4 row">
            <div class="col s12">
              <img src={icon1} className="iconfeature" />
            </div>
            <div class="col s12 mainfeature">Versatile Service Solution</div>
            <div class="col s12">
              One Platform for All the Services you need
            </div>
          </div>
          <div class="col s6 m4 row">
            <div class="col s12">
              <img src={icon2} className="iconfeature" />
            </div>
            <div class="col s12 mainfeature ">Cost Effectiveness</div>
            <div class="col s12">Price Range & Promotions</div>
          </div>
          <div class="col s12 m4 row">
            <div class="col s12">
              <img src={icon3} className="iconfeature" />
            </div>
            <div class="col s12 mainfeature">Quality Assurance</div>
            <div class="col s12">Assure Qualtiy with Safety and Warranty</div>
          </div>
        </div>
        <div class="row">
          <div class="col s6 m4 row">
            <div class="col s12">
              <img src={icon4} className="iconfeature" />
            </div>
            <div class="col s12 mainfeature">Variety Options</div>
            <div class="col s12">Multipurpose Service & Tenants Variation</div>
          </div>
          <div class="col s6 m4 row">
            <div class="col s12">
              <img src={icon5} className="iconfeature" />
            </div>
            <div class="col s12 mainfeature">Simple Payment Method</div>
            <div class="col s12">Easy and Reliable Payment System</div>
          </div>
          <div class="col s12 m4 row">
            <div class="col s12">
              <img src={icon6} className="iconfeature" />
            </div>
            <div class="col s12 mainfeature">Reviews and Feedbacks</div>
            <div class="col s12">See and Choose the Best Services for You</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
