import firebase from "firebase";

const firebaseApp = firebase.initializeApp({    
        apiKey: "AIzaSyA7fvjNDyz4cbWzXs4fgcVH5pqb4mVThoM",
        authDomain: "facebook-messenger-clone-90ede.firebaseapp.com",
        projectId: "facebook-messenger-clone-90ede",
        storageBucket: "facebook-messenger-clone-90ede.appspot.com",
        messagingSenderId: "416741673097",
        appId: "1:416741673097:web:757f1c1dc839a835a75e58",
        measurementId: "G-95WELJEX4D"  
})

const db = firebaseApp.firestore();

export default db ;