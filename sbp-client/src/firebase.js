import firebase from 'firebase'
//import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyBVgPNA-poJzLghO6O_QbfTlzisGmFZQ6w",
    authDomain: "sandboxpower-64622.firebaseapp.com",
    projectId: "sandboxpower-64622",
    storageBucket: "sandboxpower-64622.appspot.com",
    messagingSenderId: "51512107389",
    appId: "1:51512107389:web:2453012ab9036c3ce62c14",
    measurementId: "G-SYMLB56FNE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
//const logsCollection = db.collection('logs')

export async function getLog() {
    return await db.collection('logs').get()
}

export async function getProgress() {
    return await db.collection('progress').get()
}

export async function getTeam() {
    return await db.collection('team').get()
}