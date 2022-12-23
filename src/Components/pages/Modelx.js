import React from "react";
import PageHome from "./pagecomponents/PageHome";

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
    </div>
  );
}

export default Modelx;
