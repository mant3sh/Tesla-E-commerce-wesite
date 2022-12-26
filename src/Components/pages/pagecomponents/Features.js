import React from "react";
import "./features.css";
import { Fade } from "react-awesome-reveal";

function Features({ features }) {
  return (
    <div className="features">
      <div className="featuresbox">
        {features.map((item, idx) => (
          <div key={idx} className="features_box">
            <Fade duration={700} fraction={`0`} direction="up">
              <div className="features_boxes">
                <img
                  className="features_box_img"
                  src={`/images/${item.image}`}
                  alt=""
                  srcset=""
                />
              </div>
            </Fade>
            <Fade duration={700} fraction={`0`} direction="up">
              <div className="features_boxes">
                <strong>{item.destitle}</strong>
                <br />
                <br />
                <p>{item.des}</p>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
