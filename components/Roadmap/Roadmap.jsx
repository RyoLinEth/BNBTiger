import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q4 2022",
      title: "Launch",
      info: [
        "1,000 Holders",
        "Website Launch",
        "2,000 Telegram Members",
        "Marketing Campaign",
        "3,000 Holders",
        "CoinMarketCap Listing",
      ],
    },
    {

    },
    {
      roadmapTitle: "Q1 2023",
      title: "Growth",
      info: [
        "5,000 Telegram Members",
        "Website Redesign",
        "Burn Plan/Events",
        "9,000 Holders",
        "10,000 Telegram Members",
        "18,000 Holders",
      ],
    },
    {

    },

    {
      roadmapTitle: "Q2-3 2023",
      title: "Expansion",
      info: [
        "BNBTiger Swap(Decentralize Exchange)",
        "Initial CEX Listing(BKEX,BitMart, MEXC)",
        "15,000 Telegram Members",
        "30,000 Holders",
      ],
    },
    {

    },
    {
      roadmapTitle: "Q4 2023 and Beyond",
      title: "Utility",
      info: [
        "BNBTiger Burrow (NFT Marketplace)",
        "BNBTiger Trail of Wonders (Wallet and Passive Income Tracker)",
        "BNBTiger in WONDERLAND (Merchandise Store)",
        "3 More CEX Listings",
        "50,000 Telegram Members",
        "90,000 Holders",
        "Influencer marketing partnership"
      ],
    },
    // {
    //   roadmapTitle: "Mid of Q4 2021",
    //   title: "Benefits",
    //   info: [
    //     "Mainnet launch",
    //     "Centralized exchange launch",
    //     "Public incentivize testnet",
    //   ],
    // },
    // {
    //   roadmapTitle: "Mid of Q4 2021",
    //   title: "Operational",
    //   info: [
    //     <>
    //       SubQuery launches its <br /> own parthian
    //     </>,
    //     "SubQuery Foundation",
    //   ],
    // },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Roadmap</span>
              <h2 className="title">
                BNBTiger <span>Map</span> : <br/>
                We set goals and conquer them
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ 
                overflow: "auto", 
                height:'80vh'
              }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
