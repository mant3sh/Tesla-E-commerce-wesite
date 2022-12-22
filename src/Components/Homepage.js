import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./Homepage.css";

function Homepage({ title, image, notcar, des, acc }) {
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url('/images/${image}')`,
      }}
    >
      <div className="page__title">
        <Fade cascade direction="up" duration={700} fraction={`0`}>
          <h1>{title}</h1>
          {notcar ? <p>{des}</p> : <a href="#">Schedule a Test Drive</a>}
        </Fade>
      </div>

      <div className="homepage__buttons">
        <Slide direction="left" duration={700} fraction={`0`}>
          <button className="white">Buy Now</button>
        </Slide>

        {!acc && (
          <Slide direction="right" duration={700} fraction={`0`}>
            {" "}
            <button className="black">Custom Order</button>{" "}
          </Slide>
        )}
      </div>
      {acc && (
        <div className="footer">
          <a href="#">Tesla © 2022</a>
          <a href="#">privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">News</a>
          <a href="#">Engage</a>
          <a href="#">Location</a>
        </div>
      )}
    </div>
  );
}

export default Homepage;
