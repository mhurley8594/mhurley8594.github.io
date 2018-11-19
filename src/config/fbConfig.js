import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyAQyQ2mkF6k5ToK-inOmaIwQVkwxCXFLDw",
    authDomain: "react-firebase-tutorial-3f678.firebaseapp.com",
    databaseURL: "https://react-firebase-tutorial-3f678.firebaseio.com",
    projectId: "react-firebase-tutorial-3f678",
    storageBucket: "react-firebase-tutorial-3f678.appspot.com",
    messagingSenderId: "256336111624"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
