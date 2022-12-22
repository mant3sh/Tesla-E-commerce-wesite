import "./App.css";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";

import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <Nav menu={menu} setMenu={setMenu} />
      {menu && <Menu menu={menu} setMenu={setMenu} />}
      <div className="container">
        <div className="section">
          <Homepage title="Model 3" image="model3.jpeg" />
        </div>
        <div className="section">
          <Homepage title="Model Y" image="modely.jpeg" />
        </div>
        <div className="section">
          <Homepage title="Model S" image="models.jpeg" />
        </div>
        <div className="section">
          <Homepage title="Model X" image="modelx.jpeg" />
        </div>
        <div className="section">
          <Homepage
            title="Solar Panels"
            image="solarpannel.jpeg"
            notcar
            des="Lowest Cost Pannels in America"
          />
        </div>
        <div className="section">
          <Homepage
            title="Solar Roof"
            notcar
            des="Produce Clean Energy From your Roof"
            image="solarroof.jpeg"
          />
        </div>
        <div className="section">
          <Homepage title="Accesssories" notcar image="accessories.jpeg" acc />
        </div>
      </div>
    </div>
  );
}

export default App;
