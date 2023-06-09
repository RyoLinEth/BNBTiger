import React from "react";
import Link from "next/link";
import Fierce from "../Fierce/Fierce";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">

              <div className="section-title mb-30">
                <span className="sub-title">About Us</span>
                <img src={"/img/images/bnbTiger_about.png"} alt="" />
                <img
                  src={"/img/images/about_img02.png"}
                  alt=""
                  className="img-two"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                {/* <span className="sub-title">About Us</span> */}
                <h2 className="title">
                  BSC <span>Best Meme</span>
                </h2>
              </div>
              <p>
                BNBTiger is the king of beasts. They are the symbol of victory and strength. Powerful and tough.and our $BNBTIGER community is the same.
              </p>
              <p>
                $BNBTIGER is a decentralized experiment, launched on the January 3, 2022, by the founder, BNBTiger9527, as a fresh opportunity for those who were struggling in the midst of the biggest bear market since. Born out of trials and tribulation, the $BNBTIGER community is the strongest community you'll find, supportive of one another, and pushing each other towards success.
              </p>
              <p>
                We are fed up with the fraud projects in the market! These projects have lowered people's trust, led to suspicion and panic, and finally led to the death of one project after another. No more great projects like Shib can be born! The goal of the birth of BNBTiger is to rebuild the security and trust of the market. Like Shib, Let's complete another 260000 X the task. So we launched a huge number of 10.000.000.000.000.000.000.000.000 tokens, destroyed 50%, and launched fairly! Let's start from zero. This is a new social experiment. We want to see how many zeros can be killed by real trust! Our ultimate goal is to eliminate all zeros and surpass the historical record of shib!
              </p>
              <Fierce />
              <br/>
              <p>
                BNBTiger Contract: 0xac68931b666e086e9de380cfdb0fb5704a35dc2d
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
