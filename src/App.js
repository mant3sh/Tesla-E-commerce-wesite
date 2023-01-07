import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import { useEffect, useState } from "react";
import Mainpage from "./Mainpage";
import Models from "./Components/pages/Models";
import Model3 from "./Components/pages/Model3";
import Modelx from "./Components/pages/Modelx";
import Modely from "./Components/pages/Modely";
import Login from "./Components/pages/lo/Login";
import Signup from "./Components/pages/lo/Signup";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/user";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseconfig";
import Account from "./Components/pages/Account";
import Cartorder from "./Components/pages/pagecomponents/Cartorder";
import Trackorder from "./Components/pages/pagecomponents/Trackorder";
import Myaccount from "./Components/pages/pagecomponents/Myaccount";
import Paymentpage from "./Components/pages/pagecomponents/Paymentpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const currentUser = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
          };
          dispatch(login(currentUser));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<Cartorder />} />
          <Route path="cartorder" element={<Cartorder />} />
          <Route path="trackorder" element={<Trackorder />} />
          <Route path="myaccount" element={<Myaccount />} />
          <Route path="payment" element={<Paymentpage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
