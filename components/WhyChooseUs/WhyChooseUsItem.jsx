import React from "react";
import Link from "next/link";

const WhyChooseUsItem = (props) => {
  return (
    <div className="choose-item">
        <img src={props.item.src} alt={props.item.alt} />
    </div>
  );
};

export default WhyChooseUsItem;
