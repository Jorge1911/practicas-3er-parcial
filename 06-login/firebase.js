
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAbP7hB9L11qnwjP98VvYhtK8aCtATNcIA",
    authDomain: "appfirebase-fd21c.firebaseapp.com",
    projectId: "appfirebase-fd21c",
    storageBucket: "appfirebase-fd21c.appspot.com",
    messagingSenderId: "787864901432",
    appId: "1:787864901432:web:e234b4365df1eaccaa13cd",
    measurementId: "G-96NFSC6BE3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);