import React from "react";
import PageHome from "./pagecomponents/PageHome";
import PageFooter from "./pagecomponents/PageFooter";
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
        <PageFooter image="model3page/model3footer" model="3" />
      </div>
    </div>
  );
}

export default Model3;
