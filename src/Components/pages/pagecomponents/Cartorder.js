import React, { useState } from "react";
import "./cartorder.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addtoCart,
  removeFromCart,
  calAmmout,
  addAddon,
} from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Cartorder() {
  const [car, setCar] = useState(null);
  const navigate = useNavigate();
  const [color, setcolor] = useState(null);
  const [model, setModel] = useState(null);
  const [autopilot, setAutopilot] = useState(false);
  const [premium, setPremium] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handelAddCart = () => {
    dispatch(
      addtoCart({
        name: car,
        model: model,
        color: color,
      })
    );
    setCar(null);
    setModel(null);
    setcolor(null);
    toast.success("Wow your car is in stock", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handelRemove = () => {
    dispatch(removeFromCart());
    setPremium(false);
    setAutopilot(false);
  };
  const handelCal = () => {
    dispatch(addAddon({ autopilot, premium }));
    dispatch(calAmmout());
    navigate("/account/payment");
  };

  return (
    <div>
      <br />
      <br />
      <div>
        {cart ? (
          <> </>
        ) : (
          <>
            <div>
              <span>Choose your Car </span>

              <span>
                <select
                  className="order__select"
                  value={car}
                  onChange={(e) => {
                    setCar(e.target.value);
                  }}
                  name="cars"
                  id="car"
                >
                  <option></option>
                  <option>ModelS</option>
                  <option>ModelY</option>
                  <option>Model3</option>
                  <option>ModelX</option>
                </select>
              </span>
            </div>
            <br />
            {car && (
              <>
                <div>
                  <span>Pick Model </span>

                  <span>
                    <select
                      className="order__select"
                      value={model}
                      onChange={(e) => {
                        setModel(e.target.value);
                      }}
                      name="cars"
                      id="car"
                    >
                      <option></option>
                      <option>AWD</option>
                      <option>Plaid</option>
                    </select>
                  </span>
                </div>
              </>
            )}
            <br />
            {model && car && (
              <>
                <div>
                  <span>Pick Color </span>

                  <span>
                    <select
                      className="order__select"
                      value={color}
                      onChange={(e) => {
                        setcolor(e.target.value);
                      }}
                      name="cars"
                      id="car"
                    >
                      <option></option>
                      <option>Red</option>
                      <option>Black</option>
                      <option>White</option>
                      <option>Blue</option>
                    </select>
                  </span>
                </div>
              </>
            )}
            <br />
            {car && model && color && (
              <>
                <button className="proceed" onClick={handelAddCart}>
                  Proceed to check Availabality
                </button>{" "}
              </>
            )}
          </>
        )}
      </div>
      <br />
      {cart && (
        <>
          <h2 className="greentext">Congratulations your car is in Stock ✅</h2>
          <br />
          <h2>
            {cart.name}, {cart.model}
            <span className="bluetext">{` (${cart.color})`}</span>
          </h2>
          <br />
          <p className="black__text">{giveDes(cart.name)}</p>
          <br />
          <h3>Price:- ${tellAmout(cart)}</h3>
          <br />
          <h2>Add on Features</h2>
          <br />
          <div className="addons">
            <div>
              <h2>
                Enhanced Autopilot <span> {autopilot && " ✅"}</span>
              </h2>
              <h3 className="text__center">$6,000</h3>

              <ul>
                <li>Navigate on Autopilot</li>
                <li>Auto Lane Change</li>
                <li>Autopark</li>
                <li>Summon</li>
                <li>Smart Summon</li>
              </ul>
              <br />
              {autopilot ? (
                <button
                  className="remove__buttn"
                  onClick={() => setAutopilot(!autopilot)}
                >
                  Remove Autopliot
                </button>
              ) : (
                <button
                  className="Add__buttn"
                  onClick={() => setAutopilot(!autopilot)}
                >
                  Add Autopliot
                </button>
              )}
            </div>
            <div>
              <h2>
                Premium interior <span> {premium && " ✅"}</span>
              </h2>
              <h3 className="text__center">$15,000</h3>

              <ul>
                <li>Multi-Coat paint</li>
                <li>Turbine wheels</li>
                <li>Yoke Steering</li>
                <li>Wall Connector</li>
                <li>Mobile Connector</li>
              </ul>
              <br />
              {premium ? (
                <button
                  className="remove__buttn"
                  onClick={() => setPremium(!premium)}
                >
                  Remove Premium package
                </button>
              ) : (
                <button
                  className="Add__buttn"
                  onClick={() => setPremium(!premium)}
                >
                  Add Premium package
                </button>
              )}
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="decission">
            <button className="Add__buttn" onClick={handelCal}>
              Confirm Order
            </button>{" "}
            <button className="remove__buttn" onClick={handelRemove}>
              Cancel
            </button>{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default Cartorder;

function giveDes(name) {
  const model3 =
    "Tesla model3 has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.";
  const modelx =
    "With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.";
  const modely =
    "Tesla designed Model X from the ground-up as an electric vehicle each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.";
  const models =
    "Tesla designed Model S from the ground-up as an electric vehicle  each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.";
  switch (name) {
    case "ModelS":
      return models;
    case "Model3":
      return model3;
    case "ModelX":
      return modelx;
    case "ModelY":
      return modely;
  }
}
export function tellAmout(item) {
  switch (item.name) {
    case "ModelS":
      if (item.model == "AWD") {
        return 73000;
      } else {
        return 102000;
      }

    case "Model3":
      if (item.model == "AWD") {
        return 64000;
      } else {
        return 92000;
      }
    case "ModelY":
      if (item.model == "AWD") {
        return 82000;
      } else {
        return 112000;
      }
    case "ModelX":
      if (item.model == "AWD") {
        return 91000;
      } else {
        return 108000;
      }
  }
}
