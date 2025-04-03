// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ltFtSBgUKLM4cmvSo4S3Oyiq3aiTMNU",
  authDomain: "mniproject-4209b.firebaseapp.com",
  projectId: "mniproject-4209b",
  storageBucket: "mniproject-4209b.firebasestorage.app",
  messagingSenderId: "276470896355",
  appId: "1:276470896355:web:3e11c84cf5c3f22948d7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const submit = document.getElementById('submit');
submit.addEventListener("click",function (event){
    event.preventDefault();

    const name = document.getElementById('panditName').value;
    const email = document.getElementById('panditEmail').value;
    const password = document.getElementById('panditPassword').value;
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        alert("Creating Account.....")
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
})