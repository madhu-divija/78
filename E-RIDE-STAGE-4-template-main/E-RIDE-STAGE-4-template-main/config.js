import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAUbkBrb8Jpv0pZlgPrUnshlg4PXBpb66Y",
    authDomain: "complaint-forum-da055.firebaseapp.com",
    projectId: "complaint-forum-da055",
    storageBucket: "complaint-forum-da055.appspot.com",
    messagingSenderId: "300688945025",
    appId: "1:300688945025:web:892add746d31a494588280"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();