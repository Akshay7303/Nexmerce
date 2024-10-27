import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoUInkT03iYJQjjjE40TX8jHUz7aaicF4",
  authDomain: "nexmerce-e79be.firebaseapp.com",
  projectId: "nexmerce-e79be",
  storageBucket: "nexmerce-e79be.appspot.com",
  messagingSenderId: "832300680682",
  appId: "1:832300680682:web:0b95b26b40148904391e93"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('inputfield').addEventListener('submit_1', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        // Redirect to a different page after successful sign-in
        window.location.href = 'dashboard.html'; // Change to your dashboard page
    } catch (error) {
        document.getElementById('error-message').innerText = error.message;
    }
});