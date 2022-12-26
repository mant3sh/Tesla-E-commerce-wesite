import React from "react";
import "./autopliot.css";
import { Fade } from "react-awesome-reveal";

function Autopliot() {
  return (
    <div className="autopliot">
      <div>
        <Fade triggerOnce cascade fraction={"0"} duration="600" direction="up">
          <h1>360°</h1>
          <br />
          <p
            style={{
              color: "#171a20",
            }}
          >
            Rear, side and forward-facing cameras
          </p>
          <p
            style={{
              color: "#171a20",
            }}
          >
            provide maximum visibility
          </p>
        </Fade>
      </div>
      <div>
        <Fade triggerOnce cascade fraction={"0"} duration="600" direction="up">
          <h1>250 m</h1>
          <p
            style={{
              color: "#171a20",
            }}
          >
            Powerful visual processing at up to 250
          </p>
          <p
            style={{
              color: "#171a20",
            }}
          >
            {" "}
            meters of range
          </p>
        </Fade>
      </div>
      <div>
        <Fade triggerOnce cascade fraction={"0"} duration="600" direction="up">
          <p
            style={{
              color: "#171a20",
            }}
          >
            Tesla Vision detects nearby cars, helps
          </p>
          <p
            style={{
              color: "#171a20",
            }}
          >
            prevent potential collisions and assists
          </p>
          <p
            style={{
              color: "#171a20",
            }}
          >
            with parking
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Autopliot;
