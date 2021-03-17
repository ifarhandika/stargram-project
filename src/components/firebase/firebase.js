import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0zi2pleWNx0KrRQBBiBtwzkAeXHf8F_o",
  authDomain: "stargram-40b81.firebaseapp.com",
  projectId: "stargram-40b81",
  storageBucket: "stargram-40b81.appspot.com",
  messagingSenderId: "228357722021",
  appId: "1:228357722021:web:5c565e9ca0d5e700c6624c",
})

export const firestore = app.firestore()
export const database = {
    files: firestore.collection('images'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
