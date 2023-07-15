import React from "react";
import { useContext } from "react"
import LanguageContext from "../Context/LanguageProvider"
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";
import cn from "classnames";


const ContactOne = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const social_items = [
    {
      icon: 'fa fa-telegram',
      svgpath: '../img/svg/telegram.svg',
      link: 'https://t.me/BNBTigerEN'
    },
    {
      icon: 'fa-twitter',
      svgpath: '../img/svg/twitter.svg',
      link: 'https://twitter.com/bnbtigerinu'
    },
    {
      icon: 'fa-medium',
      svgpath: '../img/svg/medium.svg',
      link: 'https://bnbtiger.medium.com/bnbtiger-6300a46ca53'
    },
  ]
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>

          {
            selectedLanguage === "EN" 
            ? "Cooperation and suggestions:" 
            : "Cooperação e sugestões:"
          }
          <br />
          bnbtiger9527@gmail.com
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title"
                style={{
                  fontSize: '30px',
                  textAlign: 'center'
                }}>
                {
                  selectedLanguage === "EN" ? "Contact" : "CONTATO"
                }</span>
              <h2 className="title">
                <span>
                  {
                    selectedLanguage === "EN" ? "Contact" : "CONTATO"
                  }</span> BNBTiger
              </h2>
              <br />
              <img src={"/img/svg/BNBTigerWithBG.png"} alt="BNBTiger Logo" style={{
                maxWidth: '150px'
              }} />
            </div>
          </div>
        </div>

        <h2 className="Title" style={{
          textAlign: 'center'
        }}>
          {
            selectedLanguage === "EN" ? "Socials" : "Redes Sociais"
          }</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {
            social_items.map((x, index) => {
              return (
                <div key={x.icon}>
                  <div className="icon" style={{ padding: '10px' }}>
                    <a href={x.link}>
                      <img src={x.svgpath}></img>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div>

        {/* <ContactOneForm /> */}
      </div>
    </section>
  );
};

export default ContactOne;
