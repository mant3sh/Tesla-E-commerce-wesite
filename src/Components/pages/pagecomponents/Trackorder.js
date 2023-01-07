import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import { useSelector } from "react-redux";
import Ordercard from "./Ordercard";
import "./trackorder.css";

function Trackorder() {
  const user = useSelector((state) => state.user);
  const reff = collection(db, "user", user?.uid, "orders");
  const q1 = query(reff, orderBy("time", "desc"));
  const [orders, loading, error] = useCollection(q1);

  return (
    <div>
      <div className="orders__wrapper">
        <br />
        <br />
        {loading && <h2>Loading....</h2>}
        {orders?.docs.length === 0 && (
          <h2>No Orders yet Please order your car .</h2>
        )}
        {orders?.docs.length !== 0 && <h2>Your orders.</h2>}
        <br />
        {orders?.docs.map((doc) => (
          <>
            <div key={doc.id}>
              {" "}
              <Ordercard
                order={doc.data().order}
                ammout={doc.data().ammout}
                timeStamp={doc.data().timeStamp}
                id={doc.id}
              />
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default Trackorder;
