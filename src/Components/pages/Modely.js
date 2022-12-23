import React from "react";
import PageHome from "./pagecomponents/PageHome";

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
    </div>
  );
}

export default Modely;
