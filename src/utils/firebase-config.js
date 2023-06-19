import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcFUNcGqsC9fX0Ig82ovnUo6CcTw83P08",
  authDomain: "netflixclone-e1041.firebaseapp.com",
  projectId: "netflixclone-e1041",
  storageBucket: "netflixclone-e1041.appspot.com",
  messagingSenderId: "459689042295",
  appId: "1:459689042295:web:b75233c7dc984f8efd8172",
  measurementId: "G-8MG4GQVHHG",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
