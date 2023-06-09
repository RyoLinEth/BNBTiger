import React from "react";
import { useContext } from "react"
import LanguageContext from "../Context/LanguageProvider"
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const LiqBurn = selectedLanguage === "EN" ? "Liq Burn: " : "Queima de Liq: "
  const LiqLocked = selectedLanguage === "EN" ? "Liq Locked::" : "Liq bloqueado: "
  const chart_info_list = [
    `${LiqBurn} 74.3710%`,
    `${LiqLocked} 24.4021%`,
  ];

  const totalSupply = selectedLanguage === "EN" ? "Total Supply: " : "Fornecimento total: "
  const burnSupply = selectedLanguage === "EN" ? "Burn Supply: " : "Fornecimento de queima: "
  const maxSupply = selectedLanguage === "EN" ? "Max Supply: " : "Fornecimento máximo: "
  const circulatingSupply = selectedLanguage === "EN" ? "Circulating Supply: " : "Fornecimento circulante: "

  const taxDescrip =
    selectedLanguage === "EN"
      ?
      <div >
        9 % Tax < br /> <br />
        2 % Backflow 2 % Buyback 2 % Marketing < br />
        3 % Philanthropy
      </div >
      :
      <div >
        9 % Imposto  < br /> <br />
        2 % Retorno 2 % Recompra 2 % Marketing  < br />
        3 % Filantropia
      </div >


  const TokenDescrip =
    <div>
      {totalSupply}<br />
      10,000,000,000,000,000,000,000,000 <br />

      {burnSupply} <br />
      5,613,347,139,019,740,000,000,000 <br />

      {maxSupply} <br />
      4,386,652,860,980,260,000,000,000 <br />

      {circulatingSupply} <br />
      4,386,652,860,980,260,000,000,000
    </div>

  const pancakeLink = "https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D";

  return (
    <section id="tokenomics" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <div className="Title">
                  {
                    selectedLanguage === "EN"
                      ? "Total Security"
                      : "Segurança Total"
                  }
                </div>
                <br />
                <img src={"/img/images/chart.png"} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title={selectedLanguage === "EN" ? "Tax Allocation" : "Alocação de Imposto"}
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title={selectedLanguage === "EN" ? "Token Allocation" : "Alocação de token"}
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title={selectedLanguage === "EN" ? "Tax" : "Imposto"}
                    description={taxDescrip}
                    link={pancakeLink}
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title={selectedLanguage === "EN" ? "Token" : "Símbolo"}
                    description={TokenDescrip}
                    link={pancakeLink}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Sales;
