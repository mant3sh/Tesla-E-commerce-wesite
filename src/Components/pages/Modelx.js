import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";
import Autopliot from "./pagecomponents/Autopliot";
import Pageorder from "./pagecomponents/Pageorder";
import { modelxint, modelxext } from "./pagecomponents/modelxfetures";
import Features from "./pagecomponents/Features";
import "./modelxpage.css";
import { Fade } from "react-awesome-reveal";
function Modelx() {
  return (
    <div>
      <PageHome
        title="Model X"
        model={"plaid"}
        range="333"
        pickup={"2.5"}
        image={`modelxpage/modelxhero`}
        peakpower="1,020"
        topspeed={"163"}
      />
      <div>
        <div className="modelxutility">
          <div className="modelx_utlity_des">
            <div className="utlity_des">
              <Fade direction="up" duration={600} fraction="0">
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                  }}
                >
                  92 ft³
                </h2>
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Up to 92 ft³ of storage
                </p>
              </Fade>
            </div>
            <div className="utlity_des">
              <Fade direction="up" duration={600} fraction="0">
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                  }}
                >
                  5,000 lbs
                </h2>
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Tow up to 5,000 lbs
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <Pageorder
          model={"Utility"}
          title="Even More Capable"
          des="With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go."
        />
        <Features features={modelxint} />

        <Autopliot />
        <Pageorder
          model="Autopilot"
          title={"Future of Driving"}
          des="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
        />
        <Features features={modelxext} />
        <Pageorder
          model="Exterior"
          title={"Designed for Efficiency"}
          des="Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort."
        />
        <PageFooter image={"modelxpage/modelxfooter"} model="X" />
      </div>
    </div>
  );
}

export default Modelx;
