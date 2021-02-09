import React from "react";
import "./MoreInfoBtn.css";

interface MoreInfoBtnProps {
  image?: string;
  usd?: number;
  eur?: number;
  ils?: number;
}

const MoreInfoBtn = (props: MoreInfoBtnProps): JSX.Element => {
  return (
    <div className="MoreInfoBtn">
      <img src={props.image} alt="" />
      <div className="valueData_div">
        <p>{props.usd}$</p>
        <p>{props.eur}€</p>
        <p>{props.ils}₪</p>
      </div>
    </div>
  );
};

export default MoreInfoBtn;
