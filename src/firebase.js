import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWFcsHOwRjrW8kUFN8xZMFGqdXnSaTC7w",
  authDomain: "kiki-chat-576b2.firebaseapp.com",
  projectId: "kiki-chat-576b2",
  storageBucket: "kiki-chat-576b2.appspot.com",
  messagingSenderId: "188507463023",
  appId: "1:188507463023:web:e1009e76e5d9f551945c9a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
