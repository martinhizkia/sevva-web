import React from "react";
import "./home.css";
import p3 from "../assets/phone3.png";
import p4 from "../assets/phone4.png";
import logo from "../assets/logo.png";
import badge from "../assets/Badges.png";
const Footer = () => {
  return (
    <>
      <div className="bluegreen p20">
        <div className="container row">
          <div className="col s12 m6 row">
            <div className="col s12 m6">
              <img src={p3} className="gambar" />
            </div>
            <div className="col s12 m6">
              <img src={p4} className="gambar" />
            </div>
          </div>
          <div className="col s12 m6">
            <h2>Choose Your Best Services with our Mobile Platform</h2>
            <p>
              Download the app to choose the best and the most reliable service
              solution that suits you!
            </p>
            <img src={badge} className="m10"/>
          </div>
        </div>
      </div>
      {/* <div className="darkblue">
        <div className="container row">
          <div className="col s12 m6">
              <div className = "row">
                  <img src = {logo}/>
              </div>
              <div className = "row">
                  <div className="col s2">
                      Home
                  </div>
                  <div className="col s2">
                      About
                  </div>
                  <div className="col s2">
                      Feature
                  </div>
              </div>
              <div className = "row"><p>© 2021 Universitas Indonesia. All rights reserved</p></div>
          </div>
          <div className="col s12 m6"></div>
        </div>
      </div> */}

      <footer class="page-footer pt-10 darkblue ">
        <div class="container ">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Sevva</h5>
              <img src= {logo} />
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    About
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Feature
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright darkblue ">
          <div class="container center">
            © 2021 Universitas Indonesia. All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
