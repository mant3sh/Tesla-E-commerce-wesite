import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";
import "./modelspage.css";
import { Fade } from "react-awesome-reveal";
import Pageorder from "./pagecomponents/Pageorder";
import Autopliot from "./pagecomponents/Autopliot";

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
      <Autopliot />
      <Pageorder
        model="Autopilot"
        title={"Future of Driving"}
        des="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
      />
      <PageFooter image="modelspage/modelsfooter" model={"S"} />
    </div>
  );
}

export default Models;
