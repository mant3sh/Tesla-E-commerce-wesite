import React from "react";
import "./pagehome.css";
import { Fade } from "react-awesome-reveal";

function PageHome({ title, image, model, range, pickup, topspeed, peakpower }) {
  return (
    <div
      className="carpagehome"
      style={{
        backgroundImage: `url('/images/${image}.jpeg')`,
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="carTitle">
        <Fade cascade duration={600} direction="up" fraction={`0`}>
          <h1>{title}</h1>
          <p>{model}</p>
        </Fade>
      </div>

      <div className="carSpec">
        <Fade cascade duration={400} direction="up" fraction={`0`}>
          <div className="carSpecbox">
            <h1>{range} mi</h1>
            <p>Range (EPA est.)</p>
          </div>
          <div className="carSpecbox">
            <h1>{pickup} s</h1>
            <p>0-60 mph*</p>
          </div>
          <div className="carSpecbox">
            <h1>{topspeed} mph</h1>
            <p>Top speed</p>
          </div>
          <div className="carSpecbox">
            <h1>{peakpower} hp</h1>
            <p>Peak power</p>
          </div>
          <div className="carbuynowdiv">
            <a className="carbuynow" href="#">
              Buy Now
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default PageHome;
