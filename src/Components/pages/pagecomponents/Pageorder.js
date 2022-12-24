import React from "react";
import "./pageorder.css";
import { Slide } from "react-awesome-reveal";

function Pageorder({ model, title, des }) {
  return (
    <div>
      <div className="order_box">
        <Slide triggerOnce direction="left" fraction={"0"} duration="600">
          <div>
            <br />
            <h3>{model}</h3>
            <h2>{title}</h2>
            <br />
            <a href="#" className="footerbuynow">
              Buy Now
            </a>
            <br />
            <a href="#" className="footercustomorder">
              Custom Order
            </a>
          </div>
        </Slide>
        <Slide triggerOnce direction="right" fraction={"0"} duration="600">
          <div className="order_box_buttons">{des}</div>
        </Slide>
      </div>
    </div>
  );
}

export default Pageorder;
