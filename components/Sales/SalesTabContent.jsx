import React from "react";
import { useContext } from "react"
import LanguageContext from "../Context/LanguageProvider"
import Link from "next/link";
import cn from "classnames";

const SalesTabContent = (props) => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        {props.description}
        <br />
        <Link href={props.link} className="btn">
          {selectedLanguage === "EN" ? "Buy Now" : "Comprar agora"}
        </Link>
      </div>
    </div>
  );
};

export default SalesTabContent;
