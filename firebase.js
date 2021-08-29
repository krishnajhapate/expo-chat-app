// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB902tdD8Xgo0QjX-OTMusIxDaBfKPC5HQ",
    authDomain: "gifted-chat-expo.firebaseapp.com",
    projectId: "gifted-chat-expo",
    storageBucket: "gifted-chat-expo.appspot.com",
    messagingSenderId: "517055798271",
    appId: "1:517055798271:web:318db16b6255a138d365ca"
};
// const firebaseConfig = {
//     apiKey: "your_api_key",
//     authDomain: "your_auth_domain",
//     projectId: "your_project_id",
//     storageBucket: "your_storage_bucket",
//     messagingSenderId: "your_meddage_sender_id",
//     appId: "your_app_id"
// };

// Initialize Firebase

let app;
if (firebase?.apps?.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase?.app();
}

const db = app.firestore()
const auth = firebase.auth()
export { db, auth }