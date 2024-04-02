// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlf-KSHkpbmm_E4tUNVuWidAmB5h4gxbQ",
  authDomain: "netflixgpt-9832a.firebaseapp.com",
  projectId: "netflixgpt-9832a",
  storageBucket: "netflixgpt-9832a.appspot.com",
  messagingSenderId: "136065413377",
  appId: "1:136065413377:web:c47a3b70c9df256a3deb00",
  measurementId: "G-HDKY0M3BGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();