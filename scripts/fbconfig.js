const firebaseConfig = {
    apiKey: "AIzaSyCI74nus3mlC-HSNTGQ3qNVIxwKyZ2pj5U",
    authDomain: "myportfolio-7b222.firebaseapp.com",
    projectId: "myportfolio-7b222",
    storageBucket: "myportfolio-7b222.appspot.com",
    messagingSenderId: "794548108370",
    appId: "1:794548108370:web:62dcac41975824c8aa738b",
    measurementId: "G-CY02LHQM61"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore();
