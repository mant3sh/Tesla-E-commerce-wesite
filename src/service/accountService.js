import { auth, provider } from "../firebaseconfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

class accountService {
  login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  logout = () => {
    return signOut(auth);
  };
  updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  googleSignin = () => {
    return signInWithPopup(auth, provider);
  };
}
export const AccountService = new accountService();
