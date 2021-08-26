import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBNLqBJjS869z3dhCg7iKUeLxluw9LEJUI",
    authDomain: "vue-blog-system-d16f7.firebaseapp.com",
    projectId: "vue-blog-system-d16f7",
    storageBucket: "vue-blog-system-d16f7.appspot.com",
    messagingSenderId: "957997817266",
    appId: "1:957997817266:web:2cc0c529ba1ed228b518ab"
  };
  
//   init firebase

firebase.initializeApp(firebaseConfig)
//   database setup
const db = firebase.firestore()

export { db };