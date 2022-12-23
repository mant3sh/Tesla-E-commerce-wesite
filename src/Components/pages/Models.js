import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";

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
      <PageFooter image="modelspage/modelsfooter" model={"S"} />
    </div>
  );
}

export default Models;
