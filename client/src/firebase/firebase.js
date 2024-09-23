import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0ewH1kGworp0KZxM8RqPAYDE4IPVplI0",
  authDomain: "gupp-436320.firebaseapp.com",
  projectId: "gupp-436320",
  storageBucket: "gupp-436320.appspot.com",
  messagingSenderId: "1016997311806",
  appId: "1:1016997311806:web:999fa10b49bbe96784286f",
  measurementId: "G-SYYC4Z9839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}