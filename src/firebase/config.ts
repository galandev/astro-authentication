import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwEV2JH6cvHrAAFbG_L664lZnhep--nT4",
  authDomain: "astro-authentication-98ed0.firebaseapp.com",
  projectId: "astro-authentication-98ed0",
  storageBucket: "astro-authentication-98ed0.firebasestorage.app",
  messagingSenderId: "19045432862",
  appId: "1:19045432862:web:563cb00052bcd9e53d780f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
    app,
    auth,
};