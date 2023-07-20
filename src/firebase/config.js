// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

//these are the two services we will be using
import 'firebase/compat/storage'; //this is to store our images
import 'firebase/compat/firestore';//this is the database


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

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