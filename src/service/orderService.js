import { db } from "../firebaseconfig";
import {
  addDoc,
  setDoc,
  collection,
  serverTimestamp,
  doc,
} from "firebase/firestore";

class OrderService {
  finduser = (id) => {
    return doc(db, "user", id);
  };
  adduser = (user) => {
    return setDoc(doc(db, "user", `${user.uid}`), {
      name: user.displayName,
      email: user.email,
    });
  };
  placeOrder = (user, item) => {
    const myorder = {
      order: item.items,
      ammout: item.ammout,
      time: Date.now(),
      timeStamp: serverTimestamp(),
    };
    const reff = collection(db, "user", user.uid, "orders");
    return addDoc(reff, myorder);
  };
}

export const orderService = new OrderService();
