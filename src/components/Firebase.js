import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2BHUBM-4zyEfOc9IFIz5F49W8Bo1oVUc",
  authDomain: "facebook-clone-74fec.firebaseapp.com",
  projectId: "facebook-clone-74fec",
  storageBucket: "facebook-clone-74fec.firebasestorage.app",
  messagingSenderId: "56305131022",
  appId: "1:56305131022:web:7d21467b6513cafb8da65f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;