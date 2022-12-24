import React from "react";
import PageFooter from "./pagecomponents/PageFooter";
import PageHome from "./pagecomponents/PageHome";
import "./modelspage.css";
import { Fade } from "react-awesome-reveal";

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

      <PageFooter image="modelspage/modelsfooter" model={"S"} />
    </div>
  );
}

export default Models;
