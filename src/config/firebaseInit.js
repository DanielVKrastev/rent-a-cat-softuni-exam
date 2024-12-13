// Import the functions you need from the SDKs you need
//import { initializeApp } from "../../node_modules/firebase/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//import { getAuth } from "../../node_modules/firebase/firebase-auth.js";
import { getAuth, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'
import page from "../lib/page.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2iaZUfl_qc8fpi595g04U5oIGAsr8v-4",
  authDomain: "softuni2024-rent-a-cat.firebaseapp.com",
  projectId: "softuni2024-rent-a-cat",
  storageBucket: "softuni2024-rent-a-cat.firebasestorage.app",
  messagingSenderId: "447721046509",
  appId: "1:447721046509:web:6210201a60d0372cec27e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('persistance');

    // REFRESH CURRENT PAGE WHEN PERSISTENCE IS LOADED, A LITTLE HACK
    page.redirect(location.pathname);
  })
  .catch(err => {
    console.log('err');
    
  })

export default app;