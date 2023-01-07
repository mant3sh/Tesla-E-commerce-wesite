import React from "react";
import "./pageorder.css";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

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
            <Link to="/account" className="footerbuynow">
              Buy Now
            </Link>
            <br />
            <Link to="/account" className="footercustomorder">
              Custom Order
            </Link>
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
