import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbwfwaCxJ9_SF9y-lWd6EhVODdTZjyV5w",
    authDomain: "react-todo-app-50855.firebaseapp.com",
    databaseURL: "https://react-todo-app-50855.firebaseio.com",
    projectId: "react-todo-app-50855",
    storageBucket: "react-todo-app-50855.appspot.com",
    messagingSenderId: "460900356474",
    appId: "1:460900356474:web:635f94369b56976ac986c3",
    measurementId: "G-VGWZHY6WTS"
});

const db = firebaseApp.firestore();

export default db;