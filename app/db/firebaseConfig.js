// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkG2pCewSBnP_fIF3CqYt6vn9AGH1ZGaY",
  authDomain: "coffee-app-nextjs.firebaseapp.com",
  projectId: "coffee-app-nextjs",
  storageBucket: "coffee-app-nextjs.appspot.com",
  messagingSenderId: "198264208756",
  appId: "1:198264208756:web:08874c7b54bebf578b0021"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)