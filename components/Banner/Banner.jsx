import React, { useEffect, useState } from "react";
import CountDownOne from "../CountDown/CountDownOne";
import HomeMap from "../HomeMap/HomeMap";

const Banner = () => {

  const link = "https://api.dexscreener.com/latest/dex/pairs/bsc/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7";

  const [price, setPrice] = useState("0");

  useEffect(() => {
    fetchData();
  }, []);


  const NumberConversion = (originalData) => {
    const stringToNum = Number(originalData);
    const scientificNotation = stringToNum.toExponential();

    //  提取次方
    const match = scientificNotation.match(/e\+?(-?\d+)/);
    const exponent = parseInt(match[1], 10);
    const zeroCount = Math.abs(exponent) - 1;

    //  提取最後幾位
    const tempString = originalData.slice(-(originalData.length - zeroCount - 2))
    console.log(tempString)

    const convertedData = `0.0(${zeroCount})${tempString}`;

    return convertedData;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(link);
      const tempData = await response.json();

      const tempPrice = tempData.pair.priceUsd
      const convertedPrice = NumberConversion(tempPrice)

      setPrice(convertedPrice);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

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
              {/* <img src={"/img/svg/astroTiger.jpg"} alt="" /> */}
              <img src={"/img/icon/fire.png"} alt="" />
              <h2 className="title">
                BNBTiger : <span>{price}</span>
              </h2>
            </div>
          </div>
        </div>
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
