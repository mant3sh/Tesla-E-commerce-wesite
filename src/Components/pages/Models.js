import React from "react";
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
    </div>
  );
}

export default Models;
