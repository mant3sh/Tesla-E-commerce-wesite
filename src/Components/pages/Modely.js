import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";
import Autopliot from "./pagecomponents/Autopliot";
import Pageorder from "./pagecomponents/Pageorder";

function Modely() {
  return (
    <div>
      <PageHome
        title={"Model Y"}
        image={`modelypage/modelyhero`}
        model="AWD Dual Motor"
        range={"330"}
        pickup="4.6"
        peakpower={"600"}
        topspeed="155"
      />

      <div>
        <Autopliot />
        <Pageorder
          model="Autopilot"
          title={"Future of Driving"}
          des="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
        />
        <PageFooter image={"modelypage/modelyfooter"} model="Y" />
      </div>
    </div>
  );
}

export default Modely;
