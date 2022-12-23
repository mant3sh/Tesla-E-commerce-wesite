import React from "react";
import PageHome from "./pagecomponents/PageHome";

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
    </div>
  );
}

export default Model3;
