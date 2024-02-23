// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernstate-547cd.firebaseapp.com",
  projectId: "mernstate-547cd",
  storageBucket: "mernstate-547cd.appspot.com",
  messagingSenderId: "101515210484",
  appId: "1:101515210484:web:73670067167c98377678a1",
  measurementId: "G-TFTC7VEEXQ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);