import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbuPOUnXOEtiwz-bJbN4hFu7c0gHyowvw",
    authDomain: "react-latergram.firebaseapp.com",
    projectId: "react-latergram",
    storageBucket: "react-latergram.appspot.com",
    messagingSenderId: "371870532756",
    appId: "1:371870532756:web:93b6408b7a4a3422826081"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };