import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chart_info_list = [
    "Liq Burn: 74.3710%",
    "Liq Locked: 24.4021%",
  ];

  const taxDescrip =
    <div>
      9% Tax <br /><br />
      2% Backflow 2% Buyback 2% Marketing <br />
      3% Philanthropy
    </div>

  const TokenDescrip =
    <div>
      Total Supply: <br />
      10,000,000,000,000,000,000,000,000 <br />

      Burn Supply:  <br />
      5,613,347,139,019,740,000,000,000 <br />

      Max Supply:  <br />
      4,386,652,860,980,260,000,000,000 <br />

      Circulating Supply: <br />
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
                <div className="Title">Total Security</div>
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
                    title="Tax Allocation"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Token Allocation"
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
                    title="Tax"
                    description={taxDescrip}
                    link={pancakeLink}
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="Token"
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
