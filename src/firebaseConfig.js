  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyB7ftGEeF3gVjWqxD2GB_c8EU7AvlcAUsE",
      authDomain: "seekme-304d1.firebaseapp.com",
      projectId: "seekme-304d1",
      storageBucket: "seekme-304d1.appspot.com",
      messagingSenderId: "792674629688",
      appId: "1:792674629688:web:bc3bad134aef3eea1c0ecd",
      measurementId: "G-HDT6LDQ45S"
    };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  export { auth, app, firestore, storage };
