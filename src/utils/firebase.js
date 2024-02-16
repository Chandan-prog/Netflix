// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmKKU4TmI5zkQgNYGz3DskePfJ_2WRAao",
  authDomain: "netflixgpt-992db.firebaseapp.com",
  projectId: "netflixgpt-992db",
  storageBucket: "netflixgpt-992db.appspot.com",
  messagingSenderId: "855781827113",
  appId: "1:855781827113:web:414c91f94f33f275587238",
  measurementId: "G-R12QPB86P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

