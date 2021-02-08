import firebase from 'firebase';

require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAxswsjuALtbbj43eCywgJJRBtq4mBS0nY",
  authDomain: "advertisementapp-c97e5.firebaseapp.com",
  databaseURL: "https://advertisementapp-c97e5-default-rtdb.firebaseio.com",
  projectId: "advertisementapp-c97e5",
  storageBucket: "advertisementapp-c97e5.appspot.com",
  messagingSenderId: "8132576079",
  appId: "1:8132576079:web:d4c212a810db7cb465fb3a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();