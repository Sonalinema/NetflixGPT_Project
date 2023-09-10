import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmjcRV9Dw0UPvmmDJzDb8UxP3OdCSEj0",
  authDomain: "netflixgpt-a8361.firebaseapp.com",
  projectId: "netflixgpt-a8361",
  storageBucket: "netflixgpt-a8361.appspot.com",
  messagingSenderId: "723045244527",
  appId: "1:723045244527:web:a08694a122b3e99f37379a",
  measurementId: "G-J6XX2RP548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
