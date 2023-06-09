import React, { useEffect, useState } from "react";
import CountDownOne from "../CountDown/CountDownOne";
import HomeMap from "../HomeMap/HomeMap";

const Banner = () => {



  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={"/img/svg/Logo.png"} alt="" style={{borderRadius:'20px'}}/>
              <h2 className="title">
                <span>BNBTiger!</span>
              </h2>
              <span>Fierce.Firm.Victory</span>
            </div>
          </div>
        </div>
        <br/>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <HomeMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
