// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-fcbcd.firebaseapp.com",
  projectId: "estate-mern-fcbcd",
  storageBucket: "estate-mern-fcbcd.appspot.com",
  messagingSenderId: "481153349425",
  appId: "1:481153349425:web:a7321e2deea9d1a0cfe210",
  measurementId: "G-GZNNV0Q00C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);