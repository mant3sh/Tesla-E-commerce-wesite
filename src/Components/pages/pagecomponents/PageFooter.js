import React from "react";
import "./pagefooter.css";
import { Link } from "react-router-dom";
function PageFooter({ image, model }) {
  return (
    <div className="pagefooter">
      <div className="order">
        <div className="orderdel">
          <h2>Order Model {model}</h2>
          <br />
          <Link to="/account" className="footerbuynow">
            Buy Now
          </Link>
          <br />
          <Link to="/account" className="footercustomorder">
            Custom Order
          </Link>
        </div>
        <img
          className="orderimg"
          src={`/images/${image}.jpeg`}
          alt="This is modelY car"
        />
      </div>

      <div className="discalimer">
        <div className="actualDis">
          Certain high data usage vehicle features require at least Standard
          Connectivity, including maps, navigation and voice commands. Access to
          features that use cellular data and third-party licenses are subject
          to change. Learn more about Standard Connectivity and any limitations.
        </div>
      </div>
      <div className="footerlinks">
        <a href="#" className="footerlink">
          Tesla © 2022
        </a>
        <a href="#" className="footerlink">
          Privacy & Legal
        </a>
        <a href="#" className="footerlink">
          Vehicale Recalls
        </a>
        <a href="#" className="footerlink">
          Contact
        </a>
        <a href="#" className="footerlink">
          Careers
        </a>
        <a href="#" className="footerlink">
          News
        </a>
        <a href="#" className="footerlink">
          Engage
        </a>
        <a href="#" className="footerlink">
          Locations
        </a>
      </div>
    </div>
  );
}

export default PageFooter;
