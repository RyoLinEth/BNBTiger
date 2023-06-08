import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";
import cn from "classnames";

const ContactOne = () => {
  const social_items = [
    {
      icon: 'fa fa-telegram',
      link: 'https://t.me/BNBTigerEN'
    },
    {
      icon: 'fa-twitter',
      link: 'https://twitter.com/BnbTiger'
    },
    {
      icon: 'fa-medium',
      link: 'https://bnbtiger.medium.com/bnbtiger-6300a46ca53'
    },
    {
      icon: 'fa-tiktok',
      link: 'https://t.me/BNBTigerEN'
    },

  ]
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          bnbtiger9527@gmail.com
        </>
      ),
    },
    {
      icon: "fa-phone",
      content: (
        <>
          +84 0977425031
          <br /> +998 765 775 34
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          State/province/area: <br />
          Georgia 198
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
              <span className="sub-title">Contact</span>
              <h2 className="title">
                <span>Contact</span> ICO Crypto
              </h2>
            </div>
          </div>
        </div>

        {
          social_items.map((x, index) => {
            return (
              <div key={x.icon}>
                <div className="contact-info-item">
                  <div className="icon">
                    <span className="icon-background"></span>
                    <i className={x.icon}></i>
                  </div>
                  <div className="content">
                    <p>{x.link}</p>
                  </div>
                </div>
              </div>
            )
          })
        }

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

        {/* section form */}
        <ContactOneForm />
      </div>
    </section>
  );
};

export default ContactOne;
