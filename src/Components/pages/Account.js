import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";

import "./account.css";

function Account() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);
  return (
    <div>
      {user ? (
        <>
          <Accountpage />
        </>
      ) : (
        <div>fuckoff</div>
      )}
    </div>
  );
}

export default Account;

function Accountpage() {
  return (
    <>
      <div className="Account__page">
        <div className="AccountPage__container">
          <div className="AccountPage__nav">
            <Link className="links_nested" to="cartorder">
              OrderNow
            </Link>
            <div className="Accountpage__navleft">
              <Link className="links_nested" to="trackorder">
                Orders
              </Link>
              <Link className="links_nested" to="myaccount">
                Account
              </Link>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
}
