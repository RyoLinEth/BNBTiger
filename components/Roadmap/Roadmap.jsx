import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import { useContext } from "react"
import LanguageContext from "../Context/LanguageProvider"
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const enInfo1 = [
    "1,000 Holders",
    "Website Launch",
    "2,000 Telegram Members",
    "Marketing Campaign",
    "3,000 Holders",
    "CoinMarketCap Listing",
  ]
  const enInfo2 = [
    "5,000 Telegram Members",
    "Website Redesign",
    "Burn Plan/Events",
    "9,000 Holders",
    "10,000 Telegram Members",
    "18,000 Holders",
  ]
  const enInfo3 = [
    "BNBTiger Swap(Decentralize Exchange)",
    "Initial CEX Listing(BKEX,BitMart, MEXC)",
    "15,000 Telegram Members",
    "30,000 Holders",
  ]
  const enInfo4 = [
    "BNBTiger Burrow (NFT Marketplace)",
    "BNBTiger Trail of Wonders (Wallet and Passive Income Tracker)",
    "BNBTiger in WONDERLAND (Merchandise Store)",
    "3 More CEX Listings",
    "50,000 Telegram Members",
    "90,000 Holders",
    "Influencer marketing partnership"
  ]
  const ptInfo1 = [
    "1,000 titulares",
    "Lançamento do site",
    "2,000 membros do Telegram",
    "Campanha de Marketing",
    "3,000 titulares",
    "Listagem CoinMarketCap",
  ]
  const ptInfo2 = [
    "5,000 membros do Telegram",
    "Redesenho do site",
    "Plano de queima/eventos",    
    "9,000 titulares",
    "10,000 membros do Telegram",
    "18,000 titulares",
  ]
  const ptInfo3 = [
    "Swap BNBTiger (Câmbio Descentralizado)",
    "Listagem CEX inicial (BKEX, BitMart, MEXC)",
    "15,000 membros do Telegram",
    "30,000 titulares",
  ]
  const ptInfo4 = [
    "BNBTiger Burrow (NFT Marketplace)",
    "BNBTiger Trail of Wonders (Carteira e Rastreador de Renda Passiva)",
    "BNBTiger no PAÍS DAS MARAVILHAS (loja de mercadorias)",
    "3 Mais Listagens CEX",
    "50,000 membros do Telegram",
    "90,000 titulares",
    "Parceria de marketing de influenciadores"
  ]

  const roadmap_items = [
    {
      roadmapTitle: "Q4 2022",
      title: selectedLanguage === "EN" ? "Launch" : "Lançar",
      info: selectedLanguage === "EN" ? enInfo1 : ptInfo1
    },
    {

    },
    {
      roadmapTitle: "Q1 2023",
      title: "Growth",
      info: selectedLanguage === "EN" ? enInfo2 : ptInfo2
    },
    {

    },

    {
      roadmapTitle: "Q2-3 2023",
      title: "Expansion",
      info: selectedLanguage === "EN" ? enInfo3 : ptInfo3
    },
    {

    },
    {
      roadmapTitle: "Q4 2023 and Beyond",
      title: "Utility",
      info: selectedLanguage === "EN" ? enInfo4 : ptInfo4
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title"
                style={{
                  fontSize: '30px',
                  textAlign: 'center'
                }}>
                {
                  selectedLanguage === "EN" ? "Our Roadmap" : "Nosso Roteiro"
                }
              </span>

              {
                selectedLanguage === "EN"
                  ?
                  <h2 className="title">
                    BNBTiger <span>Map</span> : <br />
                    We set goals and conquer them
                  </h2>
                  :
                  <h2 className="title">
                    <span>Mapa</span> BNBTiger : <br />
                    Traçamos metas e as conquistamos
                  </h2>
              }
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
                height: '80vh'
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
