import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBl9tW7hCVUPXM1lgxuRKlBJw2iJ_-hoTM",
    authDomain: "aiastudies.firebaseapp.com",
    databaseURL: "https://aiastudies.firebaseio.com",
    projectId: "aiastudies",
    storageBucket: "aiastudies.appspot.com",
    messagingSenderId: "636062489913",
    appId: "1:636062489913:web:7345b0e531b896f7765ce8",
    measurementId: "G-0PTPESTCJ4"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;