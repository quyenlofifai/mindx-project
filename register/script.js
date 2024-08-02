import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// import https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGha8HAHtK7PgHEqQ3vTFyseu7ULZtgyg",
  authDomain: "baitestuytinliemkhiet.firebaseapp.com",
  projectId: "baitestuytinliemkhiet",
  storageBucket: "baitestuytinliemkhiet.appspot.com",
  messagingSenderId: "273997481236",
  appId: "1:273997481236:web:ce87cb55c2e44b16ff2e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const username = document.getElementById("username");
console.log("username", username.value);

const submit = document.getElementById("submit");
submit.addEventListener;
