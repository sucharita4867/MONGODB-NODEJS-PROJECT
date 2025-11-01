// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4YVKp63DZAKm7-SHQ3HMeSVRp8fmdm4g",
  authDomain: "smart-deals-3ea32.firebaseapp.com",
  projectId: "smart-deals-3ea32",
  storageBucket: "smart-deals-3ea32.firebasestorage.app",
  messagingSenderId: "886225353499",
  appId: "1:886225353499:web:d766427fa9d6a23360b1be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
