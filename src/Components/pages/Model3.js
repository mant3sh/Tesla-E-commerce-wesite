import React from "react";
import PageHome from "./pagecomponents/PageHome";
import PageFooter from "./pagecomponents/PageFooter";
import Pageorder from "./pagecomponents/Pageorder";
import Autopliot from "./pagecomponents/Autopliot";
import "./model3.css";
import { Fade } from "react-awesome-reveal";
function Model3() {
  return (
    <div>
      <PageHome
        title="Model 3"
        model="AWD Dual Motor"
        image={`model3`}
        range="358"
        pickup={"3.1"}
        peakpower="283"
        topspeed="162"
      />
      <div>
        <div className="model3interior">
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "150px",
            }}
          >
            <div>
              <Fade cascade direction="up" duration={600} fraction={`0`}>
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                  }}
                >
                  15 inch
                </h2>

                <p>A touchsrceen display desigened to </p>
                <p>improve over time.</p>
              </Fade>
            </div>
            <div>
              <Fade cascade direction="up" duration={600} fraction={`0`}>
                <p>Over-the-air software updates introduce</p>
                <p>new features,functionally and performance</p>
              </Fade>
            </div>
            <div>
              <Fade cascade direction="up" duration={600} fraction={`0`}>
                <p>An expansive Glass Roof provides more</p>
                <p>headroom ans uv protection</p>
              </Fade>
            </div>
          </div>
        </div>
        <Pageorder
          model={"Interior"}
          title="Built Around the Driver"
          des={
            "The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat."
          }
        />
        <div className="model3_awd">
          <div className="model3awddes">
            <Fade cascade duration={600} direction="up" fraction={"0"}>
              <h2
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                }}
              >
                10 ms
              </h2>
              <br />
              <p>Dual motors respond to changing </p>
              <p>conditions in as little as 10 miliseconds</p>
            </Fade>
          </div>
        </div>
        <Pageorder
          model={"All-Wheel Drive"}
          title="Dual Motor"
          des="Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control."
        />
        <div className="model3safty"></div>
        <Pageorder
          model={"Safty"}
          title="Built for Safety"
          des="Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory. Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories."
        />
        <Autopliot />
        <Pageorder
          model="Autopilot"
          title={"Future of Driving"}
          des="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
        />
        <PageFooter image="model3page/model3footer" model="3" />
      </div>
    </div>
  );
}

export default Model3;
