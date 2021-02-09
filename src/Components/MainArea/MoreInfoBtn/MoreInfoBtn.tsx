import React from "react";
import "./MoreInfoBtn.css";

interface MoreInfoBtnProps {
  image?: string;
}

const MoreInfoBtn = (props: MoreInfoBtnProps): JSX.Element => {
  return (
    <div className="MoreInfoBtn">
      <img src={props.image} alt="" />
    </div>
  );
};

export default MoreInfoBtn;
