import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCLdOsM_l8XJ9HKOxhuWBwr1kbSMHGDBmY",
    authDomain: "ecommerce-coderhouse-23b9a.firebaseapp.com",
    projectId: "ecommerce-coderhouse-23b9a",
    storageBucket: "ecommerce-coderhouse-23b9a.appspot.com",
    messagingSenderId: "725565836593",
    appId: "1:725565836593:web:e7b6edfbd3656b7063b410",
    measurementId: "G-2757Q21G2G"
};

const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();


