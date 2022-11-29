 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCshbLZreLlWWyFuT1Ed0Ec58I05FrMp7g",
   authDomain: "poreru-70900.firebaseapp.com",
   projectId: "poreru-70900",
   storageBucket: "poreru-70900.appspot.com",
   messagingSenderId: "586564558224",
   appId: "1:586564558224:web:2bd261590000236caba715",
   measurementId: "G-0LYD0J7VEC"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);