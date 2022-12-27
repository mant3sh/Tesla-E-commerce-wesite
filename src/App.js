import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import { useState } from "react";
import Mainpage from "./Mainpage";
import Models from "./Components/pages/Models";
import Model3 from "./Components/pages/Model3";
import Modelx from "./Components/pages/Modelx";
import Modely from "./Components/pages/Modely";
import Login from "./Components/pages/lo/Login";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <Nav menu={menu} setMenu={setMenu} />
      {menu && <Menu menu={menu} setMenu={setMenu} />}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/ModelS" element={<Models />} />
        <Route path="/Model3" element={<Model3 />} />
        <Route path="/ModelX" element={<Modelx />} />
        <Route path="/modelY" element={<Modely />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
