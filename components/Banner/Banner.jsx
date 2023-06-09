import React, { useEffect, useState, useContext } from "react";
import CountDownOne from "../CountDown/CountDownOne";
import HomeMap from "../HomeMap/HomeMap";
import LanguageContext from "../Context/LanguageProvider";

const Banner = () => {

  const { selectedLanguage } = useContext(LanguageContext);

  const datalist = {
    bnbtiger: selectedLanguage == "EN" ? "BNBTiger!" : "BNBTiger!",
    yell: selectedLanguage == "EN" ? "Fierce.Firm.Victory" : "Feroz.Firme.Vitória"

  }

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
              <img src={"/img/svg/Logo.png"} alt="" style={{ borderRadius: '50%', maxWidth: '200px' }} />
              {/* <h1 className="title"> */}
              <p style={{
                fontSize: '70px',
                fontWeight: 'bolder',
                color: '#00C4F4',
              }}>{datalist.bnbtiger}</p>
              {/* </h1> */}
              <span style={{
                fontSize: '25px'
              }}>{datalist.yell}</span>
            </div>
          </div>
        </div>
        <br />
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
