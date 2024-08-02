// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "post"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
