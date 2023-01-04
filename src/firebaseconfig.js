import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM_RSDOtUvkBvDmyQGONiz4chPkY0VF98",
  authDomain: "tesla-clone-29cc9.firebaseapp.com",
  projectId: "tesla-clone-29cc9",
  storageBucket: "tesla-clone-29cc9.appspot.com",
  messagingSenderId: "424061345796",
  appId: "1:424061345796:web:c6b1b70943ba278328d551",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export default app;
