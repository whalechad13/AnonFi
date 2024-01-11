import React from "react";
import img01 from "../../assets/img/images/aboout.jpg";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              <img src={img02} alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  The World’s <span>1st Privacy Solution</span> on Solana Blockchain
                </h2>
              </div>
              <p>
                AnonFi pioneers decentralized privacy on Solana, ensuring
                confidential transactions. We redefine blockchain standards by
                integrating guardian mechanisms and confidentiality pools for
                unparalleled anonymity and security. AnonFi: Empowering users
                with revolutionary privacy solutions
              </p>
              <Link to="/" className="btn" onClick={() => alert("Details to be announced")}>
                Purchase AnonFi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
