// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEs-GISvZ-GmdA6KGiSf_Z5N05aejGnk4",
  authDomain: "hotelwebsite-d128e.firebaseapp.com",
  projectId: "hotelwebsite-d128e",
  storageBucket: "hotelwebsite-d128e.appspot.com",  // make sure this is correct!
  messagingSenderId: "863812055776",
  appId: "1:863812055776:web:2305696f8489ef78441685",
  measurementId: "G-NNTPT8BTWR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
