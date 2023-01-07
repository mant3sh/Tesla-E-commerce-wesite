import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import { useSelector } from "react-redux";

function Trackorder() {
  const user = useSelector((state) => state.user);
  const reff = collection(db, "user", user?.uid, "orders");
  const q1 = query(reff, orderBy("time", "desc"));
  const [orders, loading, error] = useCollection(q1);

  return (
    <div>
      {orders.docs.map((doc) => (
        <div key={doc.id}> {JSON.stringify(doc.data())} </div>
      ))}
      hello
    </div>
  );
}

export default Trackorder;
