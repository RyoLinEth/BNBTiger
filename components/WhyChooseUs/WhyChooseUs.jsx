import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";
import Link from "next/link";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/nft/1.jpg",
      alt: "",
      link: "/",
      title: "Mobile payment make easy",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/nft/2.jpg",
      alt: "",
      link: "/",
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/nft/3.jpg",
      alt: "",
      link: "/",
      title: <>Protect the identity</>,
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/nft/4.jpg",
      alt: "",
      link: "/",
      title: "Sercurity & control over money",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/nft/5.jpg",
      alt: "",
      link: "/",
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              {/* <span className="sub-title"> </span> */}
              <h2 className="title">
                BNBTiger <span>NFTs</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>
        <br/>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Link href="https://opensea.io/collection/bnbtiger-nft" className="btn">
            Buy on Opensea
          </Link>

          <Link href="https://nft.bitkeep.com/en/collection/bnb/0xbD0beb9F745f9E667623C691da5Ab5C2e1CD0081" className="btn">
            Buy on BitKeep
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
