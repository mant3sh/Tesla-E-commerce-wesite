import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";
import Autopliot from "./pagecomponents/Autopliot";
import Pageorder from "./pagecomponents/Pageorder";

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
        <Autopliot />
        <Pageorder
          model="Autopilot"
          title={"Future of Driving"}
          des="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
        />
        <PageFooter image={"modelxpage/modelxfooter"} model="X" />
      </div>
    </div>
  );
}

export default Modelx;
