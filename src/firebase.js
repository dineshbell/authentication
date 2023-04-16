import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjCnJB7Nxp0fy93HmuCm53arMPgQi1Sfo",
  authDomain: "authentication-a58e5.firebaseapp.com",
  projectId: "authentication-a58e5",
  storageBucket: "authentication-a58e5.appspot.com",
  messagingSenderId: "521937853488",
  appId: "1:521937853488:web:f4055c7207b4d3a22021f5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
export {auth};
export default db;