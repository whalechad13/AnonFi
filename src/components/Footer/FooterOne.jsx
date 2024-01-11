import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/logo.png";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="footer-content">
                    <ul className="footer-social" style={{justifyContent: "center"}}>
                      <li>
                        <a href="https://t.me/AnonFinance" target="_blank">
                          <i className="fas fa-paper-plane"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Anon__Fi" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
