import React from "react";
import PageHome from "./pagecomponents/PageHome";
import PageFooter from "./pagecomponents/PageFooter";
import Pageorder from "./pagecomponents/Pageorder";
import Autopliot from "./pagecomponents/Autopliot";
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
