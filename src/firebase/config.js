// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

//these are the two services we will be using
import 'firebase/compat/storage'; //this is to store our images
import 'firebase/compat/firestore';//this is the database


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC28AlCnmQT9HwmtB0hGuMROLvViwlK3k",
  authDomain: "snapgram-74f44.firebaseapp.com",
  projectId: "snapgram-74f44",
  storageBucket: "snapgram-74f44.appspot.com",
  messagingSenderId: "306966762596",
  appId: "1:306966762596:web:2a3d34b5400a67eac9bb71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialise storage

const dataStorage = firebase.storage();

//Initialise Firestore

const currentFirestore = firebase.firestore();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {dataStorage, currentFirestore, timestamp};