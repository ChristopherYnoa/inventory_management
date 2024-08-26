// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhNVTI1Ezum0uT7VFEY7IPOiGk0VCx1ho",
  authDomain: "inventory-management-469da.firebaseapp.com",
  projectId: "inventory-management-469da",
  storageBucket: "inventory-management-469da.appspot.com",
  messagingSenderId: "204338915750",
  appId: "1:204338915750:web:2b25c298af33baa885c767",
  measurementId: "G-W33E2Q82Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}