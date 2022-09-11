// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn0QiuCOqsb1R3LZO5uplrndrHE6j-eis",
  authDomain: "invoicegenerator-33137.firebaseapp.com",
  projectId: "invoicegenerator-33137",
  storageBucket: "invoicegenerator-33137.appspot.com",
  messagingSenderId: "250343414211",
  appId: "1:250343414211:web:4a14b6254debd233ca0576",
  measurementId: "G-PVDNC4CT85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);