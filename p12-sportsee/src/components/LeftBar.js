import React from "react";
import Icon from "./Icon";
import Yoga from "../assets/yoga.svg";
import Natation from "../assets/natation.svg";
import Velo from "../assets/velo.svg";
import Altere from "../assets/altere.svg";

function LeftBar() {
  return (
    <div className="leftbar">
      <span></span>
      <div className="leftbar-Icon">
        <Icon image={Yoga} backgroundColor="white" />
        <Icon image={Natation} backgroundColor="white" />
        <Icon image={Velo} backgroundColor="white" />
        <Icon image={Altere} backgroundColor="white" />
      </div>
      <span className="copyright">Copyright SportSee 2020</span>
    </div>
  );
}

export default LeftBar;
