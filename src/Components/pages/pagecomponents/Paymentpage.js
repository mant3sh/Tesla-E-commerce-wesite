import React, { useState } from "react";
import "./paymentpage.css";
import { useSelector } from "react-redux";
import { tellAmout } from "./Cartorder";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { orderService } from "../../../service/orderService";
import { toast } from "react-toastify";
function Paymentpage() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const adduser = await orderService
      .adduser(user)
      .catch((err) => console.log(err.message));
    const update = await orderService
      .placeOrder(user, item)
      .catch((err) => console.log(err.message));
    toast.success("Your order is placed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(removeFromCart());

    navigate("/account/trackorder");
  };
  return (
    <div>
      <br />
      <br />
      <div className="payment__header">
        <span> Your Order </span>{" "}
        <span onClick={() => setShow(!show)}>
          {show ? "Show Less " : "  Show full summary"}
        </span>
      </div>
      {show ? (
        <>
          <div className="payment__header">
            <span>
              {item.items?.name} {`(${item.items?.model},${item.items?.color})`}
            </span>{" "}
            <span>$ {item.items && tellAmout(item.items)}</span>
          </div>
          {item.items?.autopilot && (
            <div className="payment__header">
              <span>Add on Autoploit</span> <span>$ {6000}</span>
            </div>
          )}
          {item.items?.premium && (
            <div className="payment__header">
              <span>Premium Package</span> <span>$ {15000}</span>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
      <br />
      <hr />
      <div className="payment__header">
        <span>Total</span> <span>$ {item.ammout}</span>
      </div>
      <br />

      <form onSubmit={handelSubmit} className="shipping__details">
        <h3 className="label">Name on Card</h3>
        <input className="login_deatils" type="text" />
        <h3 className="label">Card Number</h3>
        <input className="login_deatils" type="number" />
        <div className="checkbox">
          <div>
            <h3 className="label">Expiration date {`(MM/YY)`}</h3>
            <input className="login_deatils" type="date" />
          </div>
          <div>
            <h3 className="label">CVV</h3>
            <input className="login_deatils" type="number" />
          </div>
        </div>
        <div className="checkbox">
          <div>
            <h3 className="label">City</h3>
            <input className="login_deatils" type="text" />
          </div>
          <div>
            <h3 className="label">State</h3>
            <input className="login_deatils" type="text" />
          </div>
          <div>
            <h3 className="label">Postal Code</h3>
            <input className="login_deatils" type="number" />
          </div>
        </div>
        <h3 className="label">Address</h3>
        <input className="login_deatils" type="text" />
        <br />
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <span>Billing Address is the same as shipping address</span>
        </div>
        <br />
        <br />
        <button type="submit" className="text__center block__pay finalpay">
          Pay $ {item.ammout}
        </button>
      </form>
    </div>
  );
}

export default Paymentpage;
