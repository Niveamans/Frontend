// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARbqvkK2WVs4Jdj6Hr8EfS9ocAcEz6sDE",
  authDomain: "ehealth-record-01.firebaseapp.com",
  projectId: "ehealth-record-01",
  storageBucket: "ehealth-record-01.appspot.com",
  messagingSenderId: "266132758410",
  appId: "1:266132758410:web:143a761f3a0b21be043273",
  measurementId: "G-0RC9Z4GGQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);