import React, { useState } from "react";
import "./ordercard.css";
import { useSelector } from "react-redux";
import { orderService } from "../../../service/orderService";
import { toast } from "react-toastify";

function Ordercard({ order, ammout, timeStamp, id }) {
  const [confirm, setConfirm] = useState(false);
  const user = useSelector((state) => state.user);
  const toogle = () => {
    setConfirm(!confirm);
  };
  const handelDeleteOrder = async () => {
    try {
      const del = orderService
        .cancelOrder(user, id)
        .catch((error) => console.log(error.message));
      toast.success("Your order deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="order__card">
      <div className="ordercard__des">
        <h2>
          {order.name} {`(${order?.model},${order?.color})`}
        </h2>
        {order.autopilot && <p className="text__black">Premium package ✅</p>}
        {order.premium && <p className="text__black">Autopliot ✅</p>}
        <div className="des__order">
          <span>Total Amount</span>
          <span>${ammout}</span>
        </div>
        <h3>ordered on </h3>
        <p className="text__black">
          {new Date(timeStamp?.toDate()).toUTCString()}
        </p>
      </div>
      <div className="cancel__order">
        {confirm ? (
          <div>
            <h3> Are you sure?</h3>

            <br />
            <div className="confrim__ask">
              <button className="red__buttn" onClick={handelDeleteOrder}>
                yes
              </button>
              <button className="red__buttn blue" onClick={toogle}>
                no
              </button>
            </div>
          </div>
        ) : (
          <button className="red__buttn" onClick={toogle}>
            Cancel?
          </button>
        )}
      </div>
    </div>
  );
}

export default Ordercard;
