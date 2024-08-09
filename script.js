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
  let product = doc.data();
  document.getElementById("list-blog").innerHTML += `<div class="con_dao_non">
                                        <img src="https://photo-baomoi.bmcdn.me/w300_r3x2/2023_09_21_23_46994130/a83061cebb8352dd0b92.jpg.webp"
                                            alt="Bà Nguyễn Phương Hằng nói lời sau cùng" class="bm_CE">

                                        <div>
                                            <h3>
                                                <a
                                                    href="https://vietnamnet.vn/ba-nguyen-phuong-hang-noi-loi-sau-cung-2192729.html">Bà
                                                    Nguyễn Phương Hằng nói lời sau cùng</a>
                                            </h3>
                                        </div>
                                    </div>`;
});
