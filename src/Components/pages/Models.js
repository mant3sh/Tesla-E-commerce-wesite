import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";
import "./modelspage.css";
import { Fade } from "react-awesome-reveal";
import Pageorder from "./pagecomponents/Pageorder";
import Autopliot from "./pagecomponents/Autopliot";
import Features from "./pagecomponents/Features";
import { features, extfeatures } from "./pagecomponents/modelsfeaturs";
function Models() {
  return (
    <div>
      <PageHome
        title={"Model S"}
        image="models"
        model="Plaid"
        range="396"
        pickup="1.99"
        topspeed="200"
        peakpower="1,020"
      />
      <div className="modelsinterior">
        <div className="interior_des">
          <Fade duration={700} fraction="0" direction="up">
            <h2 className="des_text">Interior of the Future</h2>
          </Fade>
        </div>
      </div>
      <Pageorder
        title={"Beyond Ludicrous"}
        model="Plaid"
        des="Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
      />
      <Features features={features} />
      <Pageorder
        model="Interior"
        title={"Designed for Efficiency"}
        des="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
      />
      <Autopliot />

      <Pageorder
        model="Autopilot"
        title={"Future of Driving"}
        des="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
      />
      <Features features={extfeatures} />
      <PageFooter image="modelspage/modelsfooter" model={"S"} />
    </div>
  );
}

export default Models;
