import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/banner_shape02.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";
// import anon from "../../assets/img/icon/anon-r.gif";
import anon from "../../assets/img/logo/tr-logo.png";

import CountDownOne from "../CountDown/CountDownOne";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img className="shaky-image" style={{width: "100px"}} src={anon} alt="" />
              <h2 className="title">
              Join financial confidentiality on the  <span>Solana</span> blockchain
              </h2>
            </div>
            {/* <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div> */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              {/* <h2 className="title">ICO Will Start In..</h2> */}
              <h2 className="title">
              Your transactions
              </h2>
              <h2 className="title">
              Your secrets
              </h2>
              <h2 className="title text-uppercase" style={{color:"#01ff01"}}>
              Our priority
              </h2>
              {/* <CountDownOne /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
