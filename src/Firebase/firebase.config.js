import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASg2-x2fryTM467WVIXL6yA2Z8Nb0Q8T8",
  authDomain: "email-pass-project-b7e9f.firebaseapp.com",
  projectId: "email-pass-project-b7e9f",
  storageBucket: "email-pass-project-b7e9f.appspot.com",
  messagingSenderId: "997938588541",
  appId: "1:997938588541:web:c77354b236927fb01b3a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;