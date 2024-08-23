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

const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  let product = doc.data();
  document.getElementById("list-blog").innerHTML += `<div class="con_dao_non">
                                        <img src="${product.image}"
                                            alt="${product.description}">

                                        <div>
                                            <h3>
                                                <a
                                                    href="${product.link}">
                                                    ${product.title}
                                                   </a>
                                            </h3>
                                        </div>
                                    </div>`;
});
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");

const btnRegister = document.getElementById("btnRegister");

if (btnRegister) {
  btnRegister.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await sendEmailVerification(user);
        await updateProfile(auth.currentUser, {
          displayName: username.value,
        });
        await signOut(auth);
        alert("Please verify your email");
        location.href = "./login.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
      });
  });
}

const btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
  btnLogin.addEventListener("click", function () {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          signOut(auth);
          throw { code: "Email not verified", message: "" };
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
      });
  });
}
