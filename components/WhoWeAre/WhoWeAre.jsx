import React, { useContext } from "react";
import Link from "next/link";
import LanguageContext from "../Context/LanguageProvider";
import Fierce from "../Fierce/Fierce";

const WhoWeAre = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const ENContent = {
    p1: "BNBTiger is the king of beasts. They are the symbol of victory and strength. Powerful and tough.and our $BNBTIGER community is the same.",
    p2: "$BNBTIGER is a decentralized experiment, launched on the January 3, 2022, by the founder, BNBTiger9527, as a fresh opportunity for those who were struggling in the midst of the biggest bear market since. Born out of trials and tribulation, the $BNBTIGER community is the strongest community you'll find, supportive of one another, and pushing each other towards success.",
    p3: "We are fed up with the fraud projects in the market! These projects have lowered people's trust, led to suspicion and panic, and finally led to the death of one project after another. No more great projects like Shib can be born! The goal of the birth of BNBTiger is to rebuild the security and trust of the market. Like Shib, Let's complete another 260000 X the task. So we launched a huge number of 10.000.000.000.000.000.000.000.000 tokens, destroyed 50%, and launched fairly! Let's start from zero. This is a new social experiment. We want to see how many zeros can be killed by real trust! Our ultimate goal is to eliminate all zeros and surpass the historical record of shib!",
    p4: "",
  }
  const PTContent = {
    p1: "BNBTiger é o rei dos animais. Eles são o símbolo da vitória e da força. Poderoso e resistente. e nossa comunidade $BNBTIGER é a mesma.",
    p2: "$BNBTIGER é um experimento descentralizado, lançado em 3 de janeiro de 2022, pelo fundador, BNBTiger9527, como uma nova oportunidade para aqueles que lutavam em meio ao maior mercado de baixa desde então. Nascida de provações e tribulações, a comunidade $BNBTIGER é a comunidade mais forte que você encontrará, apoiando-se mutuamente e impulsionando-se mutuamente para o sucesso.",
    p3: "Estamos fartos dos projetos fraudulentos do mercado! Esses projetos diminuíram a confiança das pessoas, levaram à suspeita e ao pânico e, finalmente, levaram à morte de um projeto após o outro. Nenhum outro grande projeto como Shib pode nascer! O objetivo do nascimento do BNBTiger é reconstruir a segurança e a confiança do mercado. Como Shib, vamos completar mais 260000 X a tarefa. Então lançamos um grande número de 10.000.000.000.000.000.000.000.000 tokens, destruímos 50% e lançamos de forma justa! Vamos começar do zero. Este é um novo experimento social. Queremos ver quantos zeros podem ser eliminados pela confiança real! Nosso objetivo final é eliminar todos os zeros e superar o recorde histórico de shib!",
    p4: "",
  }
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">

              <div className="section-title mb-30">
                <span className="sub-title"
                  style={{
                    fontSize: '30px'
                  }}>About Us</span>
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
              <p>
                {selectedLanguage === "EN" ? ENContent.p1 : PTContent.p1}
              </p>
              <p>
                {selectedLanguage === "EN" ? ENContent.p2 : PTContent.p2}
              </p>
              <p>
                {selectedLanguage === "EN" ? ENContent.p3 : PTContent.p3}
              </p>
              <Fierce />
              <br />
              <p
                style={{ wordBreak: 'break-word' }}
              >
                {
                  selectedLanguage === "EN"
                    ? "BNBTiger Contract:"
                    : "Contrato BNBTiger:"
                }
                <br />
                0xac68931b666e086e9de380cfdb0fb5704a35dc2d
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
