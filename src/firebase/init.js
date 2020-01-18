import firebase from 'firebase'
// import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDKrb4btF9prRdvfZW1imadL9YcFWLMFQA",
    authDomain: "teamchatapp-8e03f.firebaseapp.com",
    databaseURL: "https://teamchatapp-8e03f.firebaseio.com",
    projectId: "teamchatapp-8e03f",
    storageBucket: "teamchatapp-8e03f.appspot.com",
    messagingSenderId: "456151124665",
    appId: "1:456151124665:web:0715b44c8a195a23766968",
    measurementId: "G-KP1L0WD788"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore()
