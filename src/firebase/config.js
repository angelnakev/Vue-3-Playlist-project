import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCUX0Zme61tO3euIexrmpeM892MpQw9y2g",
    authDomain: "playlist-c3381.firebaseapp.com",
    projectId: "playlist-c3381",
    storageBucket: "playlist-c3381.appspot.com",
    messagingSenderId: "45774743334",
    appId: "1:45774743334:web:e55257e621fb33ad4a43e7"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth,projectStorage, timestamp, }